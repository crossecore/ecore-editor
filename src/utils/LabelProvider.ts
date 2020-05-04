import { EAttribute, EcoreSwitch, EStructuralFeature, EOperation } from "crossecore"

export class LabelProvider extends EcoreSwitch<String>{

    public caseEStructuralFeature(eAttribute:EStructuralFeature){
        if(eAttribute.eType!==null){
            return eAttribute.eType.name
        }
        else if(eAttribute.eGenericType!==null){
            return eAttribute.eGenericType.eClassifier.name
        }
        else{
            return "error"
        } 
    }
    
    public caseEOperation(eOperation:EOperation){
        if(eOperation.eType!==null){
            return eOperation.eType.name
        }
        else if(eOperation.eGenericType!==null){
            return eOperation.eGenericType.eClassifier.name
        }
        else{
            return "error"
        } 
    }     

}