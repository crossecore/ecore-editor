import { ENamedElement } from "crossecore";

export class URI{
    static getFragment = (eobject:ENamedElement) => {
        let fragment = ""
        let current = eobject
        

        do{
            fragment = "/"+current.name+fragment
            
            current = current.eInternalContainer() as ENamedElement
                        

        }while(current!=null);
        
        return fragment
    }
}

