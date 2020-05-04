
import 'reflect-metadata';
import {EPackage, EcorePackageImpl, EcoreFactoryImpl} from 'crossecore'
import { EPackage2ElkGraph } from '../elkjs/EPackage2ElkGraph';
import { ElkGraphJsonToSprotty } from '../elkjs/elkgraph-to-sprotty';
import React from 'react';
import '../assets/diagram.css'
import { Container as GlContainer } from 'golden-layout';


import { TYPES, LocalModelSource } from 'sprotty';

import createContainer from '../sprotty-config';
//import ELK from 'elkjs'
import ELK, {ElkNode } from 'elkjs/lib/elk.bundled';
import { Container } from 'inversify';
import { Messages } from './Messages';
import { ViewBoxGraph } from '../sprotty-model';

interface State{
  container: GlContainer | null
  epackage: EPackage | null

}
export default class SprottyDiagram extends React.Component {
    
    sprottyContainer : Container = createContainer();
    modelSource:LocalModelSource= new LocalModelSource()
    state:State;
    

    constructor(props:any) {
      super(props);
      props.glContainer.setTitle("Diagram")
      this.sprottyContainer.bind(TYPES.ModelSource).to(LocalModelSource).inSingletonScope();
      this.modelSource = this.sprottyContainer.get<LocalModelSource>(TYPES.ModelSource);


      this.state = {epackage:EcoreFactoryImpl.eINSTANCE.createEPackage(),container: props.glContainer}

      props.glEventHub.on(Messages.SET_EPACKAGE, (epackage:any)=>{
      
        this.setState({epackage: epackage})
        this.updateModel()
      })

      
      props.glContainer.on('resize', () => {
        this.resize()
      })

      window.addEventListener('resize', this.resize);

    }

    resize = () => {
      const x = document.getElementById("sprotty")?.children[0] as any;
      const container = this.state.container as GlContainer
      x.style.width = container.width+"px"
      x.style.height = container.height+"px"
      
    }
    
    updateModel() {
        const elk = new ELK({defaultLayoutOptions: {
          'elk.algorithm': 'layered',
          'elk.direction': 'RIGHT',
          'elk.padding': '[top=25,left=25,bottom=25,right=25]',
          'elk.edgeLabels.inline': "true"
        }})
        //console.log(elk.knownLayoutOptions())
        const graph = EPackage2ElkGraph.convert(this.state.epackage as unknown as EPackage)
    
        elk.layout(graph)
       .then((g:ElkNode) => {
        console.log(g)
        let sGraph = new ElkGraphJsonToSprotty().transform(g)
        this.modelSource.updateModel(sGraph)
        this.resize()
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
