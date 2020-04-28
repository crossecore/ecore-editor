import * as monaco from 'monaco-editor'
import React from 'react';
import { Container } from 'golden-layout';



export class MonacoEditor extends React.Component{

    state = {
        width: 0,
        height: 0
    }
    myRef: any

    constructor(props:any){
        super(props)
        this.myRef = React.createRef();
        this.state = {width: props.glContainer.width, height: props.glContainer.height}

        props.glContainer.on('open', (x:any)=>{
            console.log("open")
            console.log(x)
        })

        props.glContainer.on('resize', (x:any) => {
            console.log("resize")
            console.log(x)
        })

    }

    componentDidMount(){
        console.log("componentDidMount")
        console.log(this.state.width)

        const ref = this.myRef.current;

        console.log(document.getElementById("monaco-editor"))
        //monaco.editor.onDidCreateEditor((editor)=>{editor.layout({width:this.state.width, height:this.state.height})});
        monaco.editor.onDidCreateEditor((editor)=>{editor.layout({width:300, height:300})});
        const model = monaco.editor.createModel("function(){}", "javascript");
        monaco.editor.create(ref, {
            model: model,
            theme: "vs"
        });
        monaco.editor.setModelLanguage(model, "javascript");

        /*
        const editor = monaco.editor.create(document.getElementById('monaco-editor')!, {
            value: "{id:2}",
            language: "json",
            theme: "vs-dark", 
        });
        
        
        editor.updateOptions({
            minimap: { enabled: false }
        });
        */
    }

    render(){
        return <div ref={this.myRef}></div>
    }
}