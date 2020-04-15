import 'reflect-metadata';
import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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

export default function App() {
  const classes = useStyles();

  
  
  const [epackage, setEPackage] = useState(EcorePackageImpl.eINSTANCE);
  const [selection, setSelection] = useState(EcorePackageImpl.eINSTANCE.getEClass());

  const selectionHandler = (eobject:any) =>{
      
      setSelection(eobject)
  }

 
  return (
    <ReactSplitPanel sizes={[0.2, 0.4, 0.4]}
                           options={{
                             orientation: "horizontal"
                           }}
                           style={{
                             width: "500px",
                             height: "500px",
                             border: "solid 1px black"
                           }}>

              <ReactWidget>
                  <div className=""
                       style={{
                         backgroundColor: "red",
                         ...absoluteFill
                       }}>
                      <p>Hi there</p>
                  </div>
              </ReactWidget>

              <ReactWidget>
                  <h1>Middle section</h1>
              </ReactWidget>

              <ReactBoxPanel options={{direction: "top-to-bottom"}}>
                  <ReactWidget>
                      <h1>First box panel thing</h1>
                  </ReactWidget>

                  <ReactWidget>
                      <h1>Second box panel thing</h1>
                  </ReactWidget>
              </ReactBoxPanel>
          </ReactSplitPanel>
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
