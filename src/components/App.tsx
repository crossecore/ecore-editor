import 'reflect-metadata';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-light-theme.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import EContentsTreeView from './EContentsTreeView'
import PropertiesView from './PropertiesView'
import {EcorePackageImpl} from 'crossecore'

import '../assets/diagram.css'
import SprottyDiagram from './SprottyDiagram';
import ReactSplitPanel from '../react-phosphor/ReactSplitPanel';
import ReactWidget from '../react-phosphor/ReactWidget';
import { absoluteFill } from '../react-phosphor/Common';
import ReactBoxPanel from '../react-phosphor/ReactBoxPanel';
import ReactDockPanel from '../react-phosphor/ReactDockPanel';
import GoldenLayout from 'golden-layout'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

class PropertiesView2 extends React.Component {
  constructor(props:any) {
    super(props);
  }
  render() {
    return (
      <div>works</div>
    );
  }
}


export default function App() {
  const classes = useStyles();

  

  const myLayout = new GoldenLayout({
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
                component: 'PropertiesView',
                props: { label: 'B' }
            },{
                type:'react-component',
                component: 'DiagramView',
                props: { label: 'C' }
            }]
        }]
    }]
});

  useEffect(()=>{
    myLayout.registerComponent( 'EContentsTreeView', PropertiesView2 );
    myLayout.registerComponent( 'PropertiesView', PropertiesView2 );
    myLayout.registerComponent( 'DiagramView', PropertiesView2 );
    myLayout.init()
  })
  
  

  const [epackage, setEPackage] = useState(EcorePackageImpl.eINSTANCE);
  const [selection, setSelection] = useState(EcorePackageImpl.eINSTANCE.getEClass());

  const selectionHandler = (eobject:any) =>{
      
      setSelection(eobject)
  }
  window.React = React;
  window.ReactDOM = ReactDOM;
 
  return (
    <div></div>
  )
/*
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            File
          </Typography>
        </Toolbar>
      </AppBar>
      <EContentsTreeView selectionHandler={selectionHandler}/>
      <PropertiesView selection={selection}/>
      <SprottyDiagram/>
      <div id="sprotty"></div>
    </div>
  );
  */
}
