import { EPackage, EClassImpl, EObject, ENamedElement, EReferenceImpl, EClass, EClassifier, ETypedElement, ETypedElementImpl, ENamedElementImpl, EAttribute } from "crossecore";
import { ElkNode, ElkPrimitiveEdge, ElkLabel } from "elkjs";
import { LabelProvider } from "../utils/LabelProvider";
import { URI } from "../utils/URI";


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

    
    static convert = (epackage:EPackage)=>{
        const factor = 8
        const classifiers = new Array<ElkNode>()
        const edges = new Array<ElkPrimitiveEdge>()
        for(let eclassifier of epackage.eClassifiers){
            const labels:ElkLabel = {id: Math.random()+"", text: eclassifier.name}


            if(eclassifier instanceof EClassImpl){
                
                const eclass = eclassifier as EClassImpl;

                for(let parent of eclass.eSuperTypes){
                    edges.push({id: URI.getFragment(eclass) +"_" + URI.getFragment(parent), source: URI.getFragment(eclass), target: URI.getFragment(parent)})
                }

                const features = new Array<ElkNode>()
                for(let attribute of eclass.eAttributes){

                    const label:ElkLabel = {id: Math.random()+"", text: attribute.name+" : " +new LabelProvider().caseEStructuralFeature(attribute)}
                    
                    
                    features.push({id: URI.getFragment(attribute), labels:[label], width:label.text.length*factor})
                }

                for(let reference of eclass.eReferences){
                    const labels2:Array<ElkLabel> = [{id: Math.random()+"", text: reference.name}]
                    
                    edges.push({id: URI.getFragment(reference),source: URI.getFragment(reference.eContainingClass), target: URI.getFragment(reference.eType), labels:labels2})
                }
                classifiers.push({id: URI.getFragment(eclass), children: features, width:labels.text.length*factor, height:30, labels: [labels]})
            }
            else{
                
                classifiers.push({id: URI.getFragment(eclassifier), width:labels.text.length*factor, height:30, labels: [labels]})
            }
        }

        const root:ElkNode = {id:URI.getFragment(epackage), layoutOptions: { 'algorithm': 'layered' }, children: classifiers, edges: edges}
        console.log(root)
        return root

    }

     
}