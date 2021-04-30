import { EditAttributes } from "@material-ui/icons";
import { EAttribute, EClass, EcoreSwitch, EEnum, EEnumLiteral, EOperation, EPackage, EParameter, EReference, EStructuralFeature, ETypedElement } from "crossecore";

export class Ecore2Xcore extends EcoreSwitch<string>{

    caseEPackage(epackage:EPackage){
        const result = new Array<string>()

        result.push(`package ${epackage.nsPrefix}`)

        for(let c of epackage.eClassifiers){
            result.push(this.doSwitch(c))
            result.push("\n")
        }

        return result.join("\n")
        
        
    }

    caseEEnum(eenum:EEnum){


        const literals = new Array<string>()
        for(let i=0;i<eenum.eLiterals.size();i++){
            let l = eenum.eLiterals.at(i)

            let literal = new Array<string>()

            literal.push(l.name)
            
            if(l.literal !== l.name){
                literal.push("as "+l.literal)
            }

            if(l.value !== i){
                literal.push("= "+l.value)
            }

            literals.push(literal.join(" "))
        }

        return `enum ${eenum.name}{
            ${literals.join("\n")}
        }`
    }

    caseEEnumLiteral(literal:EEnumLiteral){

        const result = new Array<string>()
        result.push(literal.name)

        return `${literal.name }`
    }

    caseEClass(eclass:EClass){

        const result = new Array<string>()

        if(eclass.abstract){
            result.push("abstract")
        }

        if(eclass.interface){
            result.push("interface")
        }
        else{
            result.push("class")
        }

        result.push(eclass.name)

        if(eclass.eTypeParameters.notEmpty()){

            let params = new Array<string>()
            params.push('<')
            for(let i=0;i<eclass.eTypeParameters.size();i++){
                let p = eclass.eTypeParameters.at(i)

                if(i+1<eclass.eTypeParameters.size()){
                    result.push(p.name+", ")
                }
                else{
                    result.push(p.name)
                }

                
            }
            params.push('>')
        }

        if(eclass.eSuperTypes.notEmpty()){
            result.push("extends")

            
            for(let i=0;i<eclass.eSuperTypes.size();i++){
                let superclass = eclass.eSuperTypes.at(i)
                
                if(i+1<eclass.eSuperTypes.size()){
                    result.push(superclass.name+", ")
                }
                else{
                    result.push(superclass.name)
                }

            }

        }
        
        result.push("{")
        result.push("\n")
        
        const features = eclass.eStructuralFeatures.map(f=>"\t"+this.doSwitch(f)+"\n").join("")

        result.push(features)
        
        const operations = eclass.eOperations.map(f=>"\t"+this.doSwitch(f)+"\n").join("")
        result.push(operations)
        result.push("}")

        return result.join(" ")
    }

    private rangeHelper(eattribute:ETypedElement){

        if(eattribute.lowerBound===1 && eattribute.upperBound===1){
            return ""
        }
        else if(eattribute.lowerBound===0 && eattribute.upperBound===-1){
            return "[]"
        }
        else if(eattribute.lowerBound>0 && eattribute.upperBound===-1){
            return  `[${eattribute.lowerBound} .. *]`
        }
        else if(eattribute.lowerBound===1 && eattribute.upperBound===-1){
            return "[+]"
        }
        else if(eattribute.lowerBound===0 && eattribute.upperBound===1){
            return "[?]"
        }
        else if(eattribute.upperBound===-2){
            return `[${eattribute.lowerBound} .. ?]`
        }
        else{
            return `[${eattribute.lowerBound} .. ${eattribute.upperBound}]`
        }
    }

    caseEOperation(eoperation:EOperation){
        const result = new Array<string>()
        result.push("op")

        if(!eoperation.ordered){
            result.push("unordered")
        }

        if(!eoperation.unique){
            result.push("unique")
        }

        if(eoperation.eType!==null){
            result.push(eoperation.eType.name)
        }
        else{
            result.push("void")
        }

        const range = this.rangeHelper(eoperation)
        if(range!==""){
            result.push(range)
        }

        result.push(eoperation.name)

        return result.join(" ")
        
    }

    caseEParameter(eparameter:EParameter){
        const result = new Array<string>()
        if(!eparameter.ordered){
            result.push("unordered")
        }

        if(!eparameter.unique){
            result.push("unique")
        }

        
        result.push(eparameter.eType.name)
        const range = this.rangeHelper(eparameter)
        if(range!==""){
            result.push(range)
        }
        result.push(eparameter.name)

        return result.join(" ")
            
    }

    caseEAttribute(eattribute:EAttribute){

        const result = new Array<string>()

        if(!eattribute.ordered){
            result.push("unordered")
        }
        if(eattribute.unique){
            result.push("unordered")
        }
        if(!eattribute.changeable){
            result.push("readonly")
        }
        if(eattribute.transient){
            result.push("transient")
        }
        if(eattribute.volatile){
            result.push("volatile")
        }
        if(eattribute.derived){
            result.push("derived")
        }
        if(eattribute.iD){
            result.push("id")
        }

        result.push(eattribute.eType.name)

        let range = this.rangeHelper(eattribute)
        if(range!==""){
            result.push(range)
        }

        result.push(eattribute.name)


        return result.join(" ")
    }

    caseEReference(eattribute:EReference){

        const result = new Array<string>()

        if(!eattribute.containment){
            result.push("contains")
        }
        if(!eattribute.ordered){
            result.push("unordered")
        }
        if(eattribute.unique){
            result.push("unique")
        }
        if(!eattribute.changeable){
            result.push("readonly")
        }
        if(eattribute.transient){
            result.push("transient")
        }
        if(eattribute.volatile){
            result.push("volatile")
        }
        if(eattribute.unsettable){
            result.push("unsettable")
        }
        if(eattribute.derived){
            result.push("derived")
        }


        result.push(eattribute.eType.name)

        let range = this.rangeHelper(eattribute)
        if(range!==""){
            result.push(range)
        }

        result.push(eattribute.name)

        if(eattribute.eOpposite!==null){
            result.push("opposite "+eattribute.eOpposite.name)
        }

        return result.join(" ")
    }
}