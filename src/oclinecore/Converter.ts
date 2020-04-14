import { EPackage, EClassImpl } from "crossecore";


export class Converter{
    static convert = (epackage:EPackage):String => {
        
        for(let eclassifier of epackage.eClassifiers){

            if(eclassifier instanceof EClassImpl){
                
                const eclass = eclassifier as EClassImpl;
                
                for(let attribute of eclass.eAttributes){
                    
                }

                for(let reference of eclass.eReferences){
                    
                }
                
            }
        }
        return ''
    }
}