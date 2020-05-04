import { Dialog, DialogTitle, ListItem, ListItemAvatar, Avatar, ListItemText, Button } from "@material-ui/core";
import React from "react";
import { List, XmiResource, EcorePackageImpl, EcoreFactoryImpl } from "crossecore";

export function SelectFileDialog(props:any) {
    
    const { onClose, open } = props;
  
    const load = () => {

        const element:any = document.getElementById("raised-button-file")

        if(element!==null){
            const file:any = element.files[0];
        
            const reader  = new FileReader();
            
            reader.readAsText(file);
            
            reader.addEventListener("load", () => {
                console.log(reader.result);
                
                //const eobject = new XmiResource(EcorePackageImpl.eINSTANCE, EcoreFactoryImpl.eINSTANCE, new DOMParser()).load(reader.result as string);
          
                //console.log(eobject);
                
                onClose(reader.result)
          
              }, false);

        }
        
      }
  
    
  
    return (
      <Dialog aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Select *.ecore file to import</DialogTitle>
        <input
  accept="ecore"
  style={{ display: 'none' }}
  id="raised-button-file"
  onChange={load}
  type="file"
/>
<label htmlFor="raised-button-file">
  <Button variant="contained" color="primary" component="span">
    Import
  </Button>
</label> 
      </Dialog>
    );
  }