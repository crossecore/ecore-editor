import React from 'react';
import { EClassImpl, EcorePackageImpl, EClass } from 'crossecore'
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class PropertiesView extends React.Component {
  
  state = {
    eclass: null,
  }
  
  constructor(props:any) {
    super(props);
    props.glContainer.setTitle("Properties")

    props.glEventHub.on("selection", (data:any)=>{
      console.log(data)
      this.setState({eclass: data})
    })
  }
  render() {

    const eclass = this.state.eclass as unknown as EClass
    if(eclass===undefined || eclass===null){
      return <div>Select an EClass</div>
    }
    else{

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
  }
}

