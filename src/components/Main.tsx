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
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

window.React = React;
window.ReactDOM = ReactDOM;



var myLayout = new GoldenLayout({
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

class Main extends Component {
  constructor(props:any) {
    super(props);
  }

  componentWillMount() {
    myLayout.registerComponent('PropertiesView', PropertiesView);
    myLayout.registerComponent('SprottyDiagram', SprottyDiagram);
    myLayout.registerComponent('EContentsTreeView', EContentsTreeView);
    myLayout.init();
  }

  render() {
    return (
      <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          File
        </Typography>
      </Toolbar>
    </AppBar>
      
    );
  }
}



export default Main;