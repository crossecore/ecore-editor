import { ContactsOutlined } from "@material-ui/icons";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { EClassifier, EcoreFactoryImpl, EObject, EOperationImpl, EPackage, EStructuralFeatureImpl } from "crossecore";
import { QualifiednameContext, XattributeContext, XclassContext, XclassifierContext, XenumContext, XgenerictypeContext, XmemberContext, XmultiplicityContext, XoperationContext, XpackageContext, XparameterContext, XreferenceContext, XtypeparameterContext } from "./XcoreParser";
import { XcoreParserListener } from "./XcoreParserListener";
import { XcoreParserVisitor } from "./XcoreParserVisitor";


export class Xcore2Ecore implements XcoreParserVisitor<EObject>{
    visitQualifiedname?: ((ctx: QualifiednameContext) => EObject) | undefined;


    visitXparameter?: ((ctx: XparameterContext) => EObject) | undefined;
    visitXtypeparameter?: ((ctx: XtypeparameterContext) => EObject) | undefined;
    visitXmultiplicity?: ((ctx: XmultiplicityContext) => EObject) | undefined;
    visitXgenerictype?: ((ctx: XgenerictypeContext) => EObject) | undefined;
    visit(tree: ParseTree): EObject {
        return EcoreFactoryImpl.eINSTANCE.createEPackage()
    }
    visitChildren(node: RuleNode): EObject {
        throw new Error("Method not implemented.");
    }
    visitTerminal(node: TerminalNode): EObject {
        throw new Error("Method not implemented.");
        
    }
    visitErrorNode(node: ErrorNode): EObject {
        throw new Error("Method not implemented.");
    }

    visitXpackage = (ctx:XpackageContext)=>{
        
        const epackage = EcoreFactoryImpl.eINSTANCE.createEPackage()
        const fullqualifiedname = ctx.qualifiedname().text
        const segments = fullqualifiedname.split(".")
        epackage.nsURI = fullqualifiedname
        epackage.name = segments[segments.length-1]
        epackage.nsPrefix = segments[segments.length-1]
        for(let xclassifier of ctx.xclassifier()){
            const eclassifier = this.visitXclassifier(xclassifier)
            epackage.eClassifiers.add(eclassifier as EClassifier)
        }
        return epackage
    }

    visitXmember = (ctx:XmemberContext)=>{
        const operation = ctx.xoperation()
        if(operation!==undefined){
            return this.visitXoperation(operation)
        }

        const attribute = ctx.xattribute()
        if(attribute!==undefined){
            return this.visitXattribute(attribute)
        }

        const reference = ctx.xreference()

        return this.visitXreference(reference!)
        
        
    }

    visitXoperation = (ctx:XoperationContext)=>{
        const operation = EcoreFactoryImpl.eINSTANCE.createEOperation()
        operation.name = ctx.ID().text
        operation.ordered = ctx.Unordered()===undefined
        operation.unique = ctx.Unique()!==undefined
        return operation
    }

    visitXattribute = (ctx:XattributeContext)=>{
        const attribute = EcoreFactoryImpl.eINSTANCE.createEAttribute()
        attribute.name = ctx.ID().text
        attribute.ordered = ctx.Unordered()===undefined
        attribute.unique = ctx.Unordered()!==undefined
        attribute.changeable = ctx.Readonly()!==undefined
        attribute.transient = ctx.Transient()!==undefined
        attribute.volatile=ctx.Volatile()!==undefined
        attribute.unsettable=ctx.Unsettable()!==undefined
        attribute.derived=ctx.Derived()!==undefined
        attribute.iD=ctx.Idattr()!==undefined

        if(ctx.xmultiplicity()?.Questionmark()){
            attribute.lowerBound = 0
            attribute.upperBound = 1
        }
        else if(ctx.xmultiplicity()?.Star()){
            attribute.lowerBound = 0
            attribute.upperBound = -1
        }
        else if(ctx.xmultiplicity()?.Plus()){
            attribute.lowerBound = 1
            attribute.upperBound = -1
        }
        else if(ctx.xmultiplicity()?.xrange()){
            attribute.lowerBound = Number.parseInt(ctx.xmultiplicity()?.xrange()?.INT(0).text!)
            
            if(ctx.xmultiplicity()?.xrange()?.Questionmark()){
                attribute.upperBound = -2
            }
            else if(ctx.xmultiplicity()?.xrange()?.Star()){
                attribute.upperBound = -1
            }
            else if(ctx.xmultiplicity()?.xrange()?.INT().length===2){
            
                attribute.upperBound =  Number.parseInt(ctx.xmultiplicity()?.xrange()?.INT(1).text!)
            
            }
            
            
        }


        return attribute
    }

    

    visitXreference = (ctx:XreferenceContext)=>{
        const reference = EcoreFactoryImpl.eINSTANCE.createEReference()
        reference.containment = ctx.Contains()!==undefined
        reference.ordered = ctx.Unordered()===undefined
        reference.unique = ctx.Unique()!==undefined
        reference.transient= ctx.Transient()!==undefined
        reference.volatile=ctx.Volatile()!==undefined
        reference.derived=ctx.Derived()!==undefined
        reference.name = ctx.ID(0).text
        return reference
    }

    visitXenum = (ctx:XenumContext)=>{

        const enum_ = EcoreFactoryImpl.eINSTANCE.createEEnum()
        enum_.name = ctx.ID().text
        return enum_
    }

    visitXclass = (ctx:XclassContext)=>{
        const eclass = EcoreFactoryImpl.eINSTANCE.createEClass()
        eclass.name = ctx.ID().text
        eclass.abstract = ctx.Abstract() !== undefined        
        eclass.interface = ctx.Interface() !==undefined

        if(ctx.Extends()){

            for(let t of ctx.xgenerictype()){
                let fully_qualified_name = t.qualifiedname().text

                //eclass.eSuperTypes.add()
            }
            

            
        }

        for(let xmember of ctx.xmember()){
            const emember = this.visitXmember(xmember)

            if(emember instanceof EOperationImpl){
                eclass.eOperations.add(emember)
            }
            else if(emember instanceof EStructuralFeatureImpl){
                eclass.eStructuralFeatures.add(emember)
            }
            else{
                throw new Error("illegal state")
            }
            
        }

        return eclass
    }

    visitXclassifier = (ctx:XclassifierContext)=>{

        if(ctx.xclass()){
            return this.visitXclass(ctx.xclass()!)  
        }
        else if (ctx.xenum()){
            return this.visitXenum(ctx.xenum()!) 
        }

        return null as unknown as EObject 
    }   
}