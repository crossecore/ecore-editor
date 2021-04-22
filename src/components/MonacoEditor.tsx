import * as monaco from 'monaco-editor'
import React from 'react';
import { Container } from 'golden-layout';
import { CalcTokensProvider } from '../monaco/TokenProvider';
import { XcoreParser } from '../monaco/XcoreParser';
import { ANTLRInputStream } from 'antlr4ts';
import { createParser, parseTreeStr } from '../monaco/ParserFacade';
import { ContactSupportOutlined } from '@material-ui/icons';
import { Xcore2Ecore } from '../monaco/Xcore2Ecore';
import { EPackage } from 'crossecore';


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

        
        const x = createParser("package x.a.b\nclass B{}")
        const xpackage = x.xpackage()
        const epackage = new Xcore2Ecore().visitXpackage(xpackage)
    
        const y = parseTreeStr("package x.a.b\nclass B{}")
        console.log(x,"createParser")
        console.log(y, "parseTreeStr")
        console.log(epackage, "epackage")

        this.myRef = React.createRef();
        this.state = {container: props.glContainer, editor:null}

        monaco.languages.register({ id: 'xcore' });
        monaco.languages.setTokensProvider('xcore', new CalcTokensProvider());

        const keywordColor = '7132a8'
        monaco.editor.defineTheme('myCoolTheme', {
            base: 'vs',
            inherit: false,
            rules: [
                { token: 'class.xcore', foreground: keywordColor, fontStyle: 'bold' },
                { token: 'abstract.xcore', foreground: keywordColor, fontStyle: 'bold' },
                { token: 'package.xcore', foreground: keywordColor, fontStyle: 'bold' },
                { token: 'interface.xcore', foreground: keywordColor, fontStyle: 'bold' },
                { token: 'extends.xcore', foreground: keywordColor, fontStyle: 'bold' },
                { token: 'unordered.xcore', foreground: keywordColor, fontStyle: 'bold' },
                { token: 'unique.xcore', foreground: keywordColor, fontStyle: 'bold' },
                { token: 'readonly.xcore', foreground: keywordColor, fontStyle: 'bold' },
                { token: 'transient.xcore', foreground: keywordColor, fontStyle: 'bold' },
                { token: 'unsettable.xcore', foreground: keywordColor, fontStyle: 'bold' },
                { token: 'volatile.xcore', foreground: keywordColor, fontStyle: 'bold' },
                { token: 'derived.xcore', foreground: keywordColor, fontStyle: 'bold' },
                { token: 'idattr.xcore', foreground: keywordColor, fontStyle: 'bold' },
                { token: 'contains.xcore', foreground: keywordColor, fontStyle: 'bold' },
                { token: 'opposite.xcore', foreground: keywordColor, fontStyle: 'bold' },
                { token: 'op.xcore', foreground: keywordColor, fontStyle: 'bold' },
                { token: 'void.xcore', foreground: keywordColor, fontStyle: 'bold' },
                { token: 'throws.xcore', foreground: keywordColor, fontStyle: 'bold' },
            ],
            colors: {}
        });
        
        
        

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
        const model = monaco.editor.createModel("package s\nclass X{}", "xcore");
        const editor = monaco.editor.create(ref, {
            model: model,
            theme: "myCoolTheme"
        });
        monaco.editor.setModelLanguage(model, "xcore");
        
        

        editor.onDidChangeModelContent((event)=>{
            console.log(event)
            console.log("CHAAAAAAAAAAAANGED")
        })

        /*
        const editor = monaco.editor.create(ref, {
            value: [
               'class Bla{}'
            ].join('n'),
            language: 'xcore',
            theme: 'vs'
         });

         */
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


