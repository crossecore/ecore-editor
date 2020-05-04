import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import GoldenLayout, { ItemConfig, ReactComponentConfig } from 'golden-layout';
import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-light-theme.css'

import PropertiesView from './PropertiesView';
import SprottyDiagram from './SprottyDiagram';
import EContentsTreeView from './EContentsTreeView';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { XmiResource, EcoreFactoryImpl, EcorePackageImpl, EPackage } from 'crossecore';
import { SelectFileDialog } from './SelectFileDialog';
import { Messages } from './Messages';
import { MonacoEditor } from './MonacoEditor';
import ProjectExplorer from './ProjectExplorer';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PouchDB from 'pouchdb'


//give goldenlayout access to React
window.React = React;
window.ReactDOM = ReactDOM;

interface State{
  anchorEl: any,
  epackage: EPackage|null;
  open: boolean,
  layout: GoldenLayout|null,
  pouchdb: PouchDB.Database
}

class Main extends Component {
  
  
  constructor(props:any) {
    super(props);
    
    this.myRef = React.createRef();

    
  }

  defaultLayout:GoldenLayout.Config = {
    content: [{
        type: 'row',
        content:[{
            type: 'stack',
            content: [{
              type:'react-component',
              component: 'EContentsTreeView',
              props: { label: 'A' }
            },
            {
              type:'react-component',
              component: 'ProjectExplorer',
              props: { label: 'A' }
            }
          ]

            
        },{
            type: 'column',
            content:[
              {
                type:'stack',
                content: [{
                  type:'react-component',
                  component: 'SprottyDiagram',
                  props: { label: 'B' }
              }]
              },{
                type:'react-component',
                component: 'PropertiesView',
                props: { label: 'C' }
            }]
        }]
    }]
}

  state:State = {
    anchorEl: null,
    epackage: null,
    open: false,
    layout: null,
    pouchdb: new PouchDB("local", {revs_limit: 1})
  }

  myRef:any;

  componentDidMount() {
    const ref = this.myRef.current;
    //this.state.layout.container = ref;
    this.createLayout()
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

  createLayout = async () =>{
    
    let config = this.defaultLayout
    try {
      const doc = await this.state.pouchdb.get("goldenlayout") as any
      config = doc.config
    } catch (err) {
      console.log(err);
    }
    this.state.layout = new GoldenLayout(config)
    this.state.layout.registerComponent('PropertiesView', PropertiesView);
    this.state.layout.registerComponent('SprottyDiagram', SprottyDiagram);
    this.state.layout.registerComponent('EContentsTreeView', EContentsTreeView);
    this.state.layout.registerComponent('ProjectExplorer', ProjectExplorer);
    this.state.layout.registerComponent('MonacoEditor', MonacoEditor);
        
    this.state.layout.init();

    this.state.layout.on('stateChanged', async ()=>{
      
      console.log(this.state.layout!.toConfig());
      try{
        const doc = await this.state.pouchdb.get("goldenlayout")
        await this.state.pouchdb.put({_id: doc._id, _rev: doc._rev, config: this.state.layout!.toConfig()});
      }catch(e){
        console.log(e);
      }
    })

    this.state.layout.eventHub.on(Messages.OPEN_FILE+"", (data:any)=>{
      
      this.openFile(data.filename, data.contents)
    })

  }



  openFile = (filename:string, contents:string) => {
    const newItemConfig:ReactComponentConfig = {
      title: filename,
      type: 'react-component',
      component: 'MonacoEditor'
  };

    this.state.layout!.root.contentItems[0].contentItems[1].contentItems[0].addChild(newItemConfig)
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

    
    const xmi = new XmiResource(this.state.epackage!, EcoreFactoryImpl.eINSTANCE, new DOMParser())

    const str = xmi.save(this.state.epackage!)

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

    const epackage = new XmiResource(EcorePackageImpl.eINSTANCE, EcoreFactoryImpl.eINSTANCE, new DOMParser()).load(value);
    
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

    this.state.layout!.eventHub.emit( Messages.SET_EPACKAGE+"", epackage);
    
  }

  render() {
    return (
      <div>
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
        <Button
        variant="contained"
        color="primary"
        style={{float:"right"}}
        startIcon={<AccountCircle />}
        >
        Sign in
        </Button>
        </div>
        <div ref={this.myRef} id="goldenlayout"></div>    
      </div>
      
    );
  }
}

export default Main;