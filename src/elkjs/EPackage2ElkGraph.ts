import { EPackage, EClassImpl, EObject, ENamedElement, EReferenceImpl, EClass, EClassifier, ETypedElement, ETypedElementImpl, ENamedElementImpl, EAttribute, BasicEObjectImpl, EPackageImpl, EAttributeImpl, EClassifierImpl, EOperationImpl, EEnumImpl, EEnum, EEnumLiteralImpl } from "crossecore";
import { ElkNode, ElkPrimitiveEdge, ElkLabel } from "elkjs";
import { LabelProvider } from "../utils/LabelProvider";
import { URI } from "../utils/URI";
import { BoundsCalculator } from "./BoundsCalculator";


export class EPackage2ElkGraph{
    
    static bounds = BoundsCalculator.INSTANCE;

    private static getNodeId = (eobject:EObject, context:EPackage) => {

        if(eobject.eClass().ePackage.nsURI===context.nsURI){
            return (eobject as BasicEObjectImpl)._uuid
        }
        else{
            return `${(context as EPackageImpl)._uuid}_${(eobject as BasicEObjectImpl)._uuid}`
        }
        
    }

    static convert = (epackage:EPackage)=>{
        const factor = 8
        const classifiers = new Array<ElkNode>()
        const edges = new Array<ElkPrimitiveEdge>()
        const proxyNodes = new Set<String>()

        for(const subpkg of epackage.eSubpackages){
            const subroot = EPackage2ElkGraph.convert(subpkg)
            classifiers.push(subroot)         
        }

        for(const eclassifier of epackage.eClassifiers){
            const labels:ElkLabel = {id: Math.random()+"", text: eclassifier.name}


            if(eclassifier instanceof EClassImpl){
                
                const eclass = eclassifier as EClassImpl;

                
                for(const parent of eclass.eSuperTypes){
                    
                    if(parent.ePackage.nsURI===epackage.nsURI){
                        edges.push({id: eclass._uuid +"_" + (parent as EClassImpl)._uuid, source: eclass._uuid, target: (parent as EClassImpl)._uuid})
                    }
                    
                    else{
                        const targetId = EPackage2ElkGraph.getNodeId(parent, epackage)
                        if(!proxyNodes.has(targetId)){
                            proxyNodes.add(targetId)
                            
                            const proxyLabel:ElkLabel = {id: Math.random()+"", text: `${parent.ePackage.name}::${parent.name}`}
                            classifiers.push({id:targetId, width:proxyLabel.text.length*factor, height:30, labels:[proxyLabel]})
                        }
                        edges.push({id: eclass._uuid +"_" + targetId, source: eclass._uuid, target: targetId})   
                    }
                    
                    
                }
                
                const features = new Array<ElkNode>()
                for(const attribute of eclass.eAttributes){
                    
                    const label:ElkLabel = {id: Math.random()+"", text: attribute.name+" : " +new LabelProvider().caseEStructuralFeature(attribute)}
                    features.push({id: (attribute as EAttributeImpl)._uuid, labels:[label], width:label.text.length*factor})
                }

                
                for(const operation of eclass.eOperations){
                    
                    const label:ElkLabel = {id: Math.random()+"", text: operation.name+" : " +new LabelProvider().caseEOperation(operation)}
                    features.push({id: (operation as EOperationImpl)._uuid, labels:[label], width:label.text.length*factor})
                }                

                for(const reference of eclass.eReferences){
                    
                    const labels2:Array<ElkLabel> = [{id: Math.random()+"", text: reference.name, width: 40, height:20}]
                    if(reference.eContainingClass.ePackage.nsURI===reference.eType.ePackage.nsURI){
                        edges.push({id: (reference as EReferenceImpl)._uuid, source: (reference.eContainingClass as EClassImpl)._uuid, target: (reference.eType as EClassifierImpl)._uuid, labels:labels2})
                    }
                    else{
                        const targetId = EPackage2ElkGraph.getNodeId(reference.eType, epackage)
                        if(!proxyNodes.has(targetId)){
                            proxyNodes.add(targetId)
                            
                            const proxyLabel:ElkLabel = {id: Math.random()+"", text: `${reference.eType.ePackage.name}::${reference.eType.name}`}
                            classifiers.push({id:targetId, width:proxyLabel.text.length*factor, height:30, labels:[proxyLabel]})
                        }
                        edges.push({id: (reference as EReferenceImpl)._uuid, source: (reference.eContainingClass as EClassImpl)._uuid, target: targetId, labels:labels2})
                    }
                    
                
                }
                classifiers.push({id: (eclass as EClassImpl)._uuid, children: features, width: EPackage2ElkGraph.bounds.caseEClass(eclass), height:30, labels: [labels]})
            }
            else if(eclassifier instanceof EEnumImpl){
                const eenum = eclassifier as EEnumImpl;
                const literals = new Array<ElkNode>()
              
                for(const literal of eenum.eLiterals){
                    
                    const label:ElkLabel = {id: Math.random()+"", text: literal.name}
                    literals.push({id: (literal as EEnumLiteralImpl)._uuid, labels:[label], width:label.text.length*factor})
                }
                classifiers.push({id: eenum._uuid, children: literals, width: EPackage2ElkGraph.bounds.caseEEnum(eenum), height:30, labels: [labels]})
            }
            else{
                
                classifiers.push({id: (eclassifier as EClassifierImpl)._uuid, width:labels.text.length*factor, height:30, labels: [labels]})
            }
        }

        const root:ElkNode = {id:(epackage as EPackageImpl)._uuid, layoutOptions: { 'algorithm': 'layered' }, children: classifiers, edges: edges}
        console.log(root)
        return root

    }

     
}