import * as monaco from 'monaco-editor'
import React from 'react';
import { Container } from 'golden-layout';
import { CalcTokensProvider } from '../monaco/TokenProvider';


interface State{
    container: Container | null
    editor: monaco.editor.IStandaloneCodeEditor | null

}

export class MonacoEditor extends React.Component{

    state:State = {
        container: null,
        editor: null
    }
    myRef: any

    constructor(props:any){
        super(props)
        this.myRef = React.createRef();
        this.state = {container: props.glContainer, editor:null}

        monaco.languages.register({ id: 'xcore' });
        monaco.languages.setTokensProvider('xcore', new CalcTokensProvider());


        props.glContainer.on('resize', () => {
            const editor = this.state.editor as monaco.editor.IStandaloneCodeEditor
            const container = this.state.container as Container
            editor.layout({width: container.width, height: container.height})
        })

    }

    componentDidMount(){
        console.log("componentDidMount")

        const ref = this.myRef.current;

        //monaco.editor.onDidCreateEditor((editor)=>{editor.layout({width:this.state.width, height:this.state.height})});
        monaco.editor.onDidCreateEditor((editor)=>{editor.layout({width:300, height:300})});
        const model = monaco.editor.createModel("function(){}", "xcore");
        const editor = monaco.editor.create(ref, {
            model: model,
            theme: "vs"
        });
        monaco.editor.setModelLanguage(model, "xcore");
        console.log(editor)
        this.state = {container: this.state.container, editor: editor}

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