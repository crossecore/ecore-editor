import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { EPackage, EClassImpl, EcorePackageImpl, EObject } from 'crossecore';
import icon from '../assets/EClass.gif'
import Typography from '@material-ui/core/Typography';

interface Node{
  id: string
  name: string
  children?: Array<Node>
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
          features.push({id: id, name:feature.name})
          id2eobject.set(id, feature)
        }
        const id = eclassifier.getClassifierID()+"c"
        classifiers.push({id: id, name:eclassifier.name, children: features})
        id2eobject.set(id, eclassifier)

      }
      
    }

    const root:Node = {id: epackage.name, name:epackage.name, children: classifiers}

    return root
    
  }

  const renderTree = (nodes:Node) => (
    
    <TreeItem key={nodes.id} nodeId={nodes.id}
    label={
      <div>
        <img src={icon} className={classes.icon}/>
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
