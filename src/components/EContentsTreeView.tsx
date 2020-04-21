import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { EPackage, EClassImpl, EcorePackageImpl, EObject, EAttributeImpl, EDataTypeImpl, EEnumImpl, EClass, EPackageImpl, EReferenceImpl } from 'crossecore';
import iconEClass from '../assets/EClass.gif'
import iconAbstractEClass from '../assets/EClass_abstract.gif'
import iconInterface from '../assets/EClass_interface.gif'
import iconEDataType from '../assets/EDataType.gif'
import iconEAttribute from '../assets/EAttribute.gif'
import iconEReference from '../assets/EReference.gif'
import iconEEnum from '../assets/EEnum.gif'
import iconEPackage from '../assets/EPackage.gif'
import Typography from '@material-ui/core/Typography';
import './EContentsTreeView.css'
import { Messages } from './Messages';
import { URI } from '../utils/URI';
import { LabelProvider } from '../utils/LabelProvider';

interface Node{
  id: string
  name: string
  children?: Array<Node>
  eobject: EObject
}


export default class EContentsTreeView extends React.Component {
  //classes = useStyles();

  state = {epackage:null}

  id2eobject = new Map<String,EObject>()
  //props:any;
  
  constructor(props:any) {
    super(props);
    
   (this.props as any).glContainer.setTitle("Model Browser");
   (this.props as any).glEventHub.on( Messages.SET_EPACKAGE+"", (epackage:EPackage)=>{
    console.log(epackage) 
    this.setState({epackage:epackage})
   });

  }

  getIcon = (eobject:EObject)=>{
    if(eobject instanceof EAttributeImpl){
      return iconEAttribute
    }
    else if(eobject instanceof EReferenceImpl){
      return iconEReference
    }   
    else if(eobject instanceof EClassImpl){
      const eclass = eobject as EClass
      if(eclass.interface){
        return iconInterface
      }
      else if(eclass.abstract){
        return iconAbstractEClass
      }
      else{
        return iconEClass
      }
    }
    else if(eobject instanceof EEnumImpl){
      return iconEEnum
    }
    else if(eobject instanceof EDataTypeImpl){
      return iconEDataType
    }
    else if(eobject instanceof EPackageImpl){
      return iconEPackage
    }
    else{
      console.log("icon undefined")
      console.log(eobject.constructor.name)
    }

    return iconEClass
  }

  renderTree = (nodes:Node) => (
    
    <TreeItem key={nodes.id} nodeId={nodes.id}
    label={
      <div>
        <img src={this.getIcon(nodes.eobject)} className="icon"/>
        <Typography>
          {nodes.name}
        </Typography>
      </div>
    }>
      {Array.isArray(nodes.children) ? nodes.children.map((node:Node) => this.renderTree(node)) : null}
    </TreeItem>
  );


  getTree = (epackage:EPackage)=>{
    
    
    const classifiers = new Array<Node>()
    for(var eclassifier of epackage.eClassifiers){
      
      if(eclassifier instanceof EClassImpl){
        var eclass = eclassifier as EClassImpl;
        const features = new Array<Node>();
        for(var feature of eclass.eStructuralFeatures){
          
          const id = URI.getFragment(feature)
          features.push({id: id, name:feature.name +" : " +new LabelProvider().caseEStructuralFeature(feature), eobject:feature})
          this.id2eobject.set(id, feature)
        }
        const id = URI.getFragment(eclassifier)
        classifiers.push({id: id, name:eclassifier.name, children: features, eobject:eclassifier})
        this.id2eobject.set(id, eclassifier)

      }
      
    }

    const id = URI.getFragment(epackage)
    const root:Node = {id: id, name:epackage.name, children: classifiers, eobject:epackage}
    
    this.id2eobject.set(id, epackage)
    console.log("hassel")
    console.log("id")
    

    return root
    
  }

  handleSelect = (event:any, nodeIds:any) => {
    
    (this.props as any).glEventHub.emit( Messages.SET_SELECTION, this.id2eobject.get(nodeIds));
    console.log("handleselect")
    console.log(nodeIds)
    console.log(this.id2eobject.get(nodeIds))
  };

  render() {

    if(this.state.epackage!==null){
      return (
        <TreeView
        
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={['root']}
        defaultExpandIcon={<ChevronRightIcon />}
        onNodeSelect={this.handleSelect}
        
      >
        {this.renderTree(this.getTree(this.state.epackage as unknown as EPackage))}
      </TreeView>
      );
    }
    else{
      return <div>no EPackage</div>
    }
    
  }
  

}

