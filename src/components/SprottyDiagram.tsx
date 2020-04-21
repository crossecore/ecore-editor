
import 'reflect-metadata';
import {EPackage, EcorePackageImpl, EcoreFactoryImpl} from 'crossecore'
import { EPackage2ElkGraph } from '../elkjs/EPackage2ElkGraph';
import { ElkGraphJsonToSprotty } from '../elkjs/elkgraph-to-sprotty';
import React, {useEffect} from 'react';
import '../assets/diagram.css'


import { TYPES, LocalModelSource } from 'sprotty';

import createContainer from '../sprotty-config';
//import ELK from 'elkjs'
import ELK, {ElkNode } from 'elkjs/lib/elk.bundled';
import { Container } from 'inversify';
import { Messages } from './Messages';


export default class SprottyDiagram extends React.Component {
    
    sprottyContainer : Container = createContainer();
    modelSource:LocalModelSource= new LocalModelSource()
    
    constructor(props:any) {
      super(props);
      props.glContainer.setTitle("Diagram")
      this.sprottyContainer.bind(TYPES.ModelSource).to(LocalModelSource).inSingletonScope();
      this.modelSource = this.sprottyContainer.get<LocalModelSource>(TYPES.ModelSource);



      props.glEventHub.on(Messages.SET_EPACKAGE, (epackage:any)=>{
      
        this.setState({epackage: epackage})
        this.updateModel()
      })

    }

    state = {epackage:EcoreFactoryImpl.eINSTANCE.createEPackage()}
    
    updateModel() {
        

        const elk = new ELK()
        //console.log(elk.knownLayoutOptions())
        const graph = EPackage2ElkGraph.convert(this.state.epackage as unknown as EPackage)
    
        elk.layout(graph)
       .then((g:ElkNode) => {
        console.log(g)
        let sGraph = new ElkGraphJsonToSprotty().transform(g);
        this.modelSource.updateModel(sGraph)
       })
       .catch(console.error)
        
        
    }
    componentDidMount() {
        
        this.updateModel()
      }

    render() {
        return <div id="sprotty"></div>
    }
}
