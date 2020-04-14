
import 'reflect-metadata';
import {EPackage, EcorePackageImpl} from 'crossecore'
import { EPackage2ElkGraph } from '../elkjs/EPackage2ElkGraph';
import { ElkGraphJsonToSprotty } from '../elkjs/ElkGraphJsonToSprotty';
import React, {useEffect} from 'react';
import '../assets/diagram.css'


import { TYPES, LocalModelSource } from 'sprotty';

import createContainer from '../sprotty-config';
//import ELK from 'elkjs'
import ELK, {ElkNode } from 'elkjs/lib/elk.bundled';


export default function SprottyDiagram(props:any) {      
    // Create Sprotty viewer
    const sprottyContainer = createContainer();
    sprottyContainer.bind(TYPES.ModelSource).to(LocalModelSource).inSingletonScope();
    const modelSource = sprottyContainer.get<LocalModelSource>(TYPES.ModelSource);


   function updateModel() {
    const elk = new ELK()
    //console.log(elk.knownLayoutOptions())
    elk.layout(EPackage2ElkGraph.convert(EcorePackageImpl.eINSTANCE), {layoutOptions: { 'algorithm': 'disco' }})
   .then((g:ElkNode) => {
    let sGraph = new ElkGraphJsonToSprotty().transform(g);
    modelSource.updateModel(sGraph)
   })
   .catch(console.error)
}

    useEffect(() => {   
        updateModel()
    });
    return (<div></div>);
    
  }