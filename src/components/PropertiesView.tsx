import React from 'react';
import { EClassImpl, EcorePackageImpl } from 'crossecore'
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function PropertiesView(props:any) {
 
  if(props && props.selection instanceof EClassImpl){

    //const eclass = EcorePackageImpl.eINSTANCE.getEClass();

  const eclass = props.selection as EClassImpl

  return (
    <FormGroup>
      {eclass.eClass().eAllStructuralFeatures.map(feature => {
        switch (feature.eType.name) {
          case "EString": return <TextField id="standard-basic" label={feature.name} value={eclass.eGet(feature)} />
          case "EBoolean": return <FormControlLabel
          control={<Switch />}
          checked={eclass.eGet(feature) as boolean}
          label={feature.name}
        />
          case "EDate": return <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        }
      })}
    </FormGroup>
  );
  }
  else{
    return <div>Error</div>
  }
}