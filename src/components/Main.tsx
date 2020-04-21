import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import GoldenLayout from 'golden-layout';
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
import { XmiResource, EcoreFactoryImpl, EcorePackageImpl } from 'crossecore';
import { SelectFileDialog } from './SelectFileDialog';
import { Messages } from './Messages';

window.React = React;
window.ReactDOM = ReactDOM;




class Main extends Component {
  
  layout:GoldenLayout = new GoldenLayout({
    content: [{
        type: 'row',
        content:[{
            type:'react-component',
            component: 'EContentsTreeView',
            props: { label: 'A' }
        },{
            type: 'column',
            content:[{
                type:'react-component',
                component: 'SprottyDiagram',
                props: { label: 'B' }
            },{
                type:'react-component',
                component: 'PropertiesView',
                props: { label: 'C' }
            }]
        }]
    }]
});
  
  constructor(props:any) {
    super(props);
    console.log("props")
    console.log(props)
  }

  state = {
    anchorEl: null,
    epackage: null,
    open: false,
    layout: this.layout
  }

  componentWillMount() {
    this.state.layout.registerComponent('PropertiesView', PropertiesView);
    this.state.layout.registerComponent('SprottyDiagram', SprottyDiagram);
    this.state.layout.registerComponent('EContentsTreeView', EContentsTreeView);
    this.state.layout.init();
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

    /*
    const xmi = new XmiResource(this.state.epackage, EcoreFactoryImpl.eINSTANCE, new DOMParser())

    const str = xmi.

    const element = document.createElement('a');
    const datalink = 'data:text/xml;base64,' + btoa(str);

    element.setAttribute('href', datalink);
    element.setAttribute('download', "export.ecore");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    */

  }

  openDialog = ()=>{
    this.setState({open:true})
  }

  returnDialog = (value:any)=>{
    this.setState({open:false, anchorEl: null, epackage:value});

    console.log("return dialog");
    console.log(this.layout);
    console.log(this.state.layout)
    this.layout.eventHub.emit( Messages.SET_EPACKAGE+"", value);
    
  }


  render() {
    return (
      <div>
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
  <MenuItem onClick={this.openDialog}>Open</MenuItem>
  <MenuItem onClick={this.handleClose}>Import</MenuItem>
  <MenuItem onClick={this.export}>Download</MenuItem>
</Menu>
<SelectFileDialog open={this.state.open} onClose={this.returnDialog} />        
      </div>
      
    );
  }
}

export default Main;