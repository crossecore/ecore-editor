import { EPackage, EClassImpl, EObject, ENamedElement, EReferenceImpl } from "crossecore";
import { ElkNode, ElkPrimitiveEdge, ElkLabel } from "elkjs";


export class EPackage2ElkGraph{
    
    private static getFragment = (eobject:ENamedElement) => {
        let fragment = ""
        let current = eobject
        do{
            fragment = "/"+current.name+fragment
            current = current.eInternalContainer() as ENamedElement

        }
        while(current!==null);
        
        return fragment
    }

    static convert = (epackage:EPackage)=>{

        const classifiers = new Array<ElkNode>()
        const edges = new Array<ElkPrimitiveEdge>()
        for(let eclassifier of epackage.eClassifiers){
            const labels:Array<ElkLabel> = [{id: Math.random()+"", text: eclassifier.name}]
            if(eclassifier instanceof EClassImpl){
                
                const eclass = eclassifier as EClassImpl;
                const features = new Array<ElkNode>()
                for(let attribute of eclass.eAttributes){
                    const labels2:Array<ElkLabel> = [{id: Math.random()+"", text: attribute.name+" : " +attribute.eType.name}]
                    
                    
                    features.push({id: EPackage2ElkGraph.getFragment(attribute), labels:labels2})
                }

                for(let reference of eclass.eReferences){
                    const labels2:Array<ElkLabel> = [{id: Math.random()+"", text: reference.name}]
                    edges.push({id: EPackage2ElkGraph.getFragment(reference),source: EPackage2ElkGraph.getFragment(reference.eContainingClass), target: EPackage2ElkGraph.getFragment(reference.eType), labels:labels2})
                }
                classifiers.push({id: EPackage2ElkGraph.getFragment(eclass), children: features, width:30, height:30, labels: labels})
            }
            else{
                
                classifiers.push({id: EPackage2ElkGraph.getFragment(eclassifier), width:30, height:30, labels: labels})
            }
        }

        const root:ElkNode = {id:EPackage2ElkGraph.getFragment(epackage), children: classifiers, edges: edges}
        
        return root

    }

     
}