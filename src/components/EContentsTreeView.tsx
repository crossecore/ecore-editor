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

interface Node{
  id: string
  name: string
  children?: Array<Node>
  eobject: EObject
}



const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },

  icon: {
    float: "left",
    width: 16,
    padding: "2px 4px 0 0"
  }
});

export default function EContentsTreeView(props:any) {
  const [selected, setSelected] = React.useState([]);
  
  const classes = useStyles();

  const id2eobject = new Map<String,EObject>()

  const getTree = (epackage:EPackage)=>{
    const tree = new Array<Node>();
    
    const classifiers = new Array<Node>()
    for(var eclassifier of epackage.eClassifiers){
      
      
      if(eclassifier instanceof EClassImpl){
        var eclass = eclassifier as EClassImpl;
        const features = new Array<Node>();
        for(var feature of eclass.eStructuralFeatures){
          
          const id = feature.getFeatureID()+"f"
          features.push({id: id, name:feature.name, eobject:feature})
          id2eobject.set(id, feature)
        }
        const id = eclassifier.getClassifierID()+"c"
        classifiers.push({id: id, name:eclassifier.name, children: features, eobject:eclassifier})
        id2eobject.set(id, eclassifier)

      }
      
    }

    const root:Node = {id: epackage.name, name:epackage.name, children: classifiers, eobject:epackage}

    return root
    
  }

  function getIcon(eobject:EObject){
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

  const renderTree = (nodes:Node) => (
    
    <TreeItem key={nodes.id} nodeId={nodes.id}
    label={
      <div>
        <img src={getIcon(nodes.eobject)} className={classes.icon}/>
        <Typography>
          {nodes.name}
        </Typography>
      </div>
    }>
      {Array.isArray(nodes.children) ? nodes.children.map((node:Node) => renderTree(node)) : null}
    </TreeItem>
  );


  const data = getTree(EcorePackageImpl.eINSTANCE)

  const handleSelect = (event:any, nodeIds:any) => {
    
    props.selectionHandler(id2eobject.get(nodeIds))
    setSelected(nodeIds);
  };

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      onNodeSelect={handleSelect}
    >
      {renderTree(data)}
    </TreeView>
  );
}
