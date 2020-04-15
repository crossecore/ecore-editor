import { EPackage, EClassImpl, EObject, ENamedElement, EReferenceImpl, EClass, EClassifier } from "crossecore";
import { ElkNode, ElkPrimitiveEdge, ElkLabel } from "elkjs";


export class EPackage2ElkGraph{
    
    private static calcWidth = (eClassifier:EClassifier) => {
        let factor = 50;
        let indent = 5;
        let width = eClassifier.name.length*factor

        if(eClassifier instanceof EClassImpl){
            const eClass = eClassifier as EClass
            for(const attr of eClass.eAttributes){
                let current = indent + attr.name.length *factor
                if(current>width){
                    width=current
                }
            }
        }
        console.log(width)
        return width
    }

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
        const factor = 8
        const classifiers = new Array<ElkNode>()
        const edges = new Array<ElkPrimitiveEdge>()
        for(let eclassifier of epackage.eClassifiers){
            const labels:ElkLabel = {id: Math.random()+"", text: eclassifier.name}
            if(eclassifier instanceof EClassImpl){
                
                const eclass = eclassifier as EClassImpl;
                const features = new Array<ElkNode>()
                for(let attribute of eclass.eAttributes){
                    const label:ElkLabel = {id: Math.random()+"", text: attribute.name+" : " +attribute.eType.name}
                    
                    
                    features.push({id: EPackage2ElkGraph.getFragment(attribute), labels:[label], width:label.text.length*factor})
                }

                for(let reference of eclass.eReferences){
                    const labels2:Array<ElkLabel> = [{id: Math.random()+"", text: reference.name}]
                    edges.push({id: EPackage2ElkGraph.getFragment(reference),source: EPackage2ElkGraph.getFragment(reference.eContainingClass), target: EPackage2ElkGraph.getFragment(reference.eType), labels:labels2})
                }
                classifiers.push({id: EPackage2ElkGraph.getFragment(eclass), children: features, width:labels.text.length*factor, height:30, labels: [labels]})
            }
            else{
                
                classifiers.push({id: EPackage2ElkGraph.getFragment(eclassifier), width:labels.text.length*factor, height:30, labels: [labels]})
            }
        }

        const root:ElkNode = {id:EPackage2ElkGraph.getFragment(epackage), layoutOptions: { 'algorithm': 'stress', "org.eclipse.elk.stress.desiredEdgeLength": "200" }, children: classifiers, edges: edges}
        console.log(root)
        return root

    }

     
}