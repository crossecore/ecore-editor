import { EcoreSwitch, EClass, EClassImpl, EEnum } from "crossecore";

export interface Bounds{
    width:number,
    height:number
}

export class BoundsCalculator extends EcoreSwitch<number>{
    
    private constructor(){
        super()
    }

    public static INSTANCE = new BoundsCalculator()

    public caseEClass(eclass:EClass){
        let factor = 8;
        let indent = 5;
        let width = eclass.name.length*factor
        


        for(const attr of eclass.eAttributes){
            let current = indent + attr.name.length *factor
            if(current>width){
                width=current
            }
        }
        for(const operation of eclass.eOperations){
            let current = indent + operation.name.length *factor
            if(current>width){
                width=current
            }
        }
        
        return width
    } 

    public caseEEnum(eenum:EEnum){
        let factor = 8;
        let indent = 5;
        let width = eenum.name.length*factor
        
        for(const literals of eenum.eLiterals){
            const current = indent + literals.name.length *factor
            if(current>width){
                width=current
            }
        }
        
        return width
    } 
}