import React from 'react';
import { EClassImpl, EcorePackageImpl, EClass, EObject } from 'crossecore'
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Messages } from './Messages';

export default class PropertiesView extends React.Component {
  
  state = {
    eobject: null,
  }
  
  constructor(props:any) {
    super(props);
    props.glContainer.setTitle("Properties")

    props.glEventHub.on(Messages.SET_EPACKAGE, (epackage:any)=>{
      
      this.setState({eobject: null})
    })

    props.glEventHub.on(Messages.SET_SELECTION, (data:any)=>{
      console.log(data)
      this.setState({eobject: data})
    })
  }
  render() {

    const eobject = this.state.eobject as unknown as EObject
    if(eobject===undefined || eobject===null){
    return <div>Select an EClass</div>
    }
    else{

    return (
      <FormGroup>
      {eobject.eClass().eAllStructuralFeatures.map(feature => {
        switch (feature.eType.name) {
          case "EString": return <TextField id="standard-basic" label={feature.name} value={eobject.eGet(feature)} />
          case "EBoolean": return <FormControlLabel
          control={<Switch />}
          checked={eobject.eGet(feature) as boolean}
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
  }
}

