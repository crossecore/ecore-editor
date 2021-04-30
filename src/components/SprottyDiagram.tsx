
import 'reflect-metadata';
import {EPackage, EcorePackageImpl, EcoreFactoryImpl} from 'crossecore'
import { EPackage2ElkGraph } from '../elkjs/EPackage2ElkGraph';
import { ElkGraphJsonToSprotty } from '../elkjs/elkgraph-to-sprotty';
import React from 'react';
import '../assets/diagram.css'



import { TYPES, LocalModelSource } from 'sprotty';

import createContainer from '../sprotty-config';
//import ELK from 'elkjs'
import ELK, {ElkNode } from 'elkjs/lib/elk.bundled';
import { Container } from 'inversify';

import { EPackageContext } from './Context';



interface State{
  epackage: EPackage | null

}
export default class SprottyDiagram extends React.Component {
    
    sprottyContainer : Container = createContainer();
    modelSource:LocalModelSource= new LocalModelSource()
    state:State;
    

    constructor(props:any) {
      super(props);

      this.sprottyContainer.bind(TYPES.ModelSource).to(LocalModelSource).inSingletonScope();
      this.modelSource = this.sprottyContainer.get<LocalModelSource>(TYPES.ModelSource);

      this.state = {epackage:EcoreFactoryImpl.eINSTANCE.createEPackage()}

    }
    
    updateModel() {
        const elk = new ELK({defaultLayoutOptions: {
          'elk.algorithm': 'layered',
          'elk.direction': 'RIGHT',
          'elk.padding': '[top=25,left=25,bottom=25,right=25]',
          'elk.edgeLabels.inline': "true"
        }})
        //console.log(elk.knownLayoutOptions())
        const graph = EPackage2ElkGraph.convert(this.context)
    
        elk.layout(graph)
       .then((g:ElkNode) => {
        console.log(g)
        let sGraph = new ElkGraphJsonToSprotty().transform(g)
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

SprottyDiagram.contextType = EPackageContext
