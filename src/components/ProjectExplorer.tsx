import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import iconTypescript from '../assets/file_type_typescript.svg'
import iconJava from '../assets/file_type_java.svg'
import iconSwift from '../assets/file_type_swift.svg'
import iconCSharp from '../assets/file_type_csharp.svg'
import iconFile from '../assets/default_file.svg'
import Typography from '@material-ui/core/Typography';


import { Button, ButtonGroup, IconButton } from '@material-ui/core';

interface File{
  name: string
  children?: Array<File>
}


export default class ProjectExplorer extends React.Component {


  readonly project:File = {name: "src" , children: [{name:"myfile.ts"}]};
  state = {project:this.project}

  
  constructor(props:any) {
    super(props);
    


  }

  getIcon = (file:File)=>{
    if(file.name.endsWith(".ts")){
      return iconTypescript
    }
    else if(file.name.endsWith(".swift")){
      return iconSwift
    }
    else if(file.name.endsWith(".cs")){
      return iconCSharp
    }
    else if(file.name.endsWith(".java")){
      return iconJava
    }
    else{
      return iconFile
    }
    
  }

  renderTree = (file:File) => (
    
    <TreeItem key={file.name} nodeId={file.name}
    label={
      <div>
        {file.children===undefined && <img src={this.getIcon(file)} className="icon"/>}
        <Typography>
          {file.name}
        </Typography>
      </div>
    }>
      {Array.isArray(file.children) ? file.children.map((child:File) => this.renderTree(child)) : null}
    </TreeItem>
    
  );


  handleSelect = () => {    
    console.log("hi")
  };

  render() {

    if(this.state.project!==null){
      return (
        <>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button><img src={iconTypescript} width="20" height="20"></img></Button>
            <Button><img src={iconJava} width="20" height="20"></img></Button>
            <Button><img src={iconCSharp} width="20" height="20"></img></Button>
        </ButtonGroup>
        <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={['root']}
        defaultExpandIcon={<ChevronRightIcon />}
        onNodeSelect={this.handleSelect}        
      >
        {this.renderTree(this.state.project as any as File)}
      </TreeView>
      </>
      );
    }
    else{
      return <div>no EPackage</div>
    }
    
  }
  

}

