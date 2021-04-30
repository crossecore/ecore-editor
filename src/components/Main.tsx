
import React, { Component } from 'react';
import ReactDOM from 'react-dom';



import 'flexlayout-react/style/light.css'

import PropertiesView from './PropertiesView';
import SprottyDiagram from './SprottyDiagram';
import EContentsTreeView from './EContentsTreeView';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { XmiResource,EPackage, EcorePackageImpl, EcoreFactoryImpl } from 'crossecore';
import { SelectFileDialog } from './SelectFileDialog';

import { MonacoEditor } from './MonacoEditor';
import ProjectExplorer from './ProjectExplorer';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PouchDB from 'pouchdb'
import {Layout, Model, TabNode} from "flexlayout-react";
import {EPackageContext} from './Context'



interface State{
  anchorEl: any,
  epackage: EPackage|null;
  open: boolean,
  model: Model,
  pouchdb: PouchDB.Database
}

class Main extends Component {
  

  constructor(props:any) {
    super(props);
    
    this.state.model = Model.fromJson(this.json)
    this.myRef = React.createRef();

  }

  factory = (node:TabNode) => {
    const component = node.getComponent();
    if (component === "EContentsTreeView") {
        return <EContentsTreeView></EContentsTreeView>
    }
    else if(component === "MonacoEditor"){
      return <MonacoEditor></MonacoEditor>
    }
    else if(component === "SprottyDiagram"){
      return <SprottyDiagram></SprottyDiagram>
    }
    else if(component === "ProjectExplorer"){
      return <ProjectExplorer></ProjectExplorer>
    }
  }

  json = {
    global: {},
    borders: [],
    layout:{
      "type": "row",
      "weight": 100,
      "children": [
        {
          "type": "tabset",
          "weight": 100,
          "selected": 0,
          "children": [
            {
              "type": "tab",
              "name": "Outline",
              "component":"EContentsTreeView",
            },
            {
              "type": "tab",
              "name": "Project Explorer",
              "component":"ProjectExplorer",
            },
            {
              "type": "tab",
              "name": "Model Editor",
              "component":"MonacoEditor",
            },
            {
              "type": "tab",
              "name": "Diagram",
              "component":"SprottyDiagram",
            },
          ]
        }
      ]
    }
  };


  json2 = {
    global: {},
    borders: [],
    layout:{
      "type": "row",
      "weight": 100,
      "children": [
        
          {
            "type": "tab",
            "name": "Outline",
            "component":"EContentsTreeView",
          },
          {
            "type": "tab",
            "name": "Project Explorer",
            "component":"ProjectExplorer",
          },
          {
            "type": "tab",
            "name": "Model Editor",
            "component":"MonacoEditor",
          },
          {
            "type": "tab",
            "name": "Diagram",
            "component":"SprottyDiagram",
          },
        
        
      ]
    }
  };
 
  

  state:State = {
    anchorEl: null,
    epackage: EcorePackageImpl.eINSTANCE,//TODO should be null
    open: false,
    model: Model.fromJson(this.json),
    pouchdb: new PouchDB("local", {revs_limit: 1})
  }

  myRef:any;

  componentDidMount() {
    const ref = this.myRef.current;
    
    this.restore()

  }

  restore = async () =>{
    
    try{
      const doc:any = await this.state.pouchdb.get("model")
      this.returnDialog(doc.contents)
      
    }catch(e){
      console.error(e)
    }

  }

  handleClick = (event: React.MouseEvent<HTMLButtonElement>)=>{
    console.log(event)
    this.setState({anchorEl: event.currentTarget})
    
  }

  handleClose = ()=>{
    console.log("close")
    this.setState({anchorEl: null})    
  }
  
  export = () => {

    
    const xmi = new XmiResource(new DOMParser())

    const str = "";//xmi.save(this.state.epackage!)

    const element = document.createElement('a');
    const datalink = 'data:text/xml;base64,' + btoa(str);

    element.setAttribute('href', datalink);
    element.setAttribute('download', "export.ecore");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

  }

  openDialog = ()=>{
    this.setState({open:true})
  }

  returnDialog = async (value:string)=>{

    const epackage = new XmiResource(new DOMParser()).load(value);
    
    this.setState({open:false, anchorEl: null, epackage:epackage});

    let doc:any
    try{
      doc = await this.state.pouchdb.get("model")
    }catch(e){
      console.error(e)
    }
    try{
      if(doc){
        await this.state.pouchdb.put({_id: doc._id, _rev: doc._rev, contents: value}) 
      }
      else{
        await this.state.pouchdb.put({_id: "model", contents: value}) 
      }
      
    }catch(e){
      
    }
  }

  render() {
    return (
      <EPackageContext.Provider value={this.state.epackage}>
        <div id="toolbar">
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
          File
        </Button>
        <Menu
          id="simple-menu"
          keepMounted
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.openDialog}>Import</MenuItem>
          {/*<MenuItem onClick={this.export}>Export</MenuItem>*/}
        </Menu>
        <SelectFileDialog open={this.state.open} onClose={this.returnDialog} />
        <Button
        variant="contained"
        color="primary"
        style={{float:"right"}}
        startIcon={<AccountCircle />}
        >
        Sign in
        </Button>
        </div>
        <Layout model={this.state.model} factory={this.factory}/>    
      </EPackageContext.Provider>
      
    );
  }
}

export default Main;