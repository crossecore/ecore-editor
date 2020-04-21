import { EAttribute, EcoreSwitch, EStructuralFeature } from "crossecore"

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

}