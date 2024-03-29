
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
import './Main.css'



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
          "type": "row",
          "weight": 33,
          "width": 300,
          "children":[
            {
              "type":"tabset",
              "weight": 100,
              "selected": 0,
              "height": 300,
              "children":[
                {
                  "type": "tab",
                  "name": "Project Explorer",
                  "component":"ProjectExplorer",
                }
              ]
            },
            {
              "type":"tabset",
              "weight": 100,
              "selected": 0,
              "children":[
                {
                  "type": "tab",
                  "name": "Outline",
                  "component":"EContentsTreeView",
                }
              ]
            },
            
          ]
        },
        {
          "type": "row",
          "weight": 33,
          "children":[
            {
              "type":"tabset",
              "weight": 100,
              "selected": 0,
              "children":[
                {
                  "type": "tab",
                  "name": "Model Editor",
                  "component":"MonacoEditor",
                }
              ]
            }
          ]
        },
        {
          "type": "row",
          "weight": 33,
          "children":[
            {
              "type":"tabset",
              "weight": 100,
              "selected": 0,
              "children":[
                {
                  "type": "tab",
                  "name": "Diagram",
                  "component":"SprottyDiagram",
                }
              ]
            }
          ]
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

    EcorePackageImpl.init()
    const xmi = new XmiResource(new DOMParser())

    const str = xmi.save(this.context)

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
      <div id="container">
      <EPackageContext.Provider value={this.state.epackage}>
        <div id="app">
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
          <MenuItem onClick={this.export}>Export</MenuItem>
        </Menu>
        <SelectFileDialog open={this.state.open} onClose={this.returnDialog} />

        </div>
        <div id="content">
        <Layout model={this.state.model} factory={this.factory}/>
        </div> 
        </div>
      </EPackageContext.Provider>
      </div>
    );
  }
}

export default Main;