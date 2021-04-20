// Generated from c:\data\repos\ecore-editor\XcoreParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { XpackageContext } from "./XcoreParser";
import { QualifiednameContext } from "./XcoreParser";
import { XclassifierContext } from "./XcoreParser";
import { XclassContext } from "./XcoreParser";
import { XmemberContext } from "./XcoreParser";
import { XattributeContext } from "./XcoreParser";
import { XreferenceContext } from "./XcoreParser";
import { XoperationContext } from "./XcoreParser";
import { XparameterContext } from "./XcoreParser";
import { XtypeparameterContext } from "./XcoreParser";
import { XmultiplicityContext } from "./XcoreParser";
import { XrangeContext } from "./XcoreParser";
import { XgenerictypeContext } from "./XcoreParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `XcoreParser`.
 */
export interface XcoreParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `XcoreParser.xpackage`.
	 * @param ctx the parse tree
	 */
	enterXpackage?: (ctx: XpackageContext) => void;
	/**
	 * Exit a parse tree produced by `XcoreParser.xpackage`.
	 * @param ctx the parse tree
	 */
	exitXpackage?: (ctx: XpackageContext) => void;

	/**
	 * Enter a parse tree produced by `XcoreParser.qualifiedname`.
	 * @param ctx the parse tree
	 */
	enterQualifiedname?: (ctx: QualifiednameContext) => void;
	/**
	 * Exit a parse tree produced by `XcoreParser.qualifiedname`.
	 * @param ctx the parse tree
	 */
	exitQualifiedname?: (ctx: QualifiednameContext) => void;

	/**
	 * Enter a parse tree produced by `XcoreParser.xclassifier`.
	 * @param ctx the parse tree
	 */
	enterXclassifier?: (ctx: XclassifierContext) => void;
	/**
	 * Exit a parse tree produced by `XcoreParser.xclassifier`.
	 * @param ctx the parse tree
	 */
	exitXclassifier?: (ctx: XclassifierContext) => void;

	/**
	 * Enter a parse tree produced by `XcoreParser.xclass`.
	 * @param ctx the parse tree
	 */
	enterXclass?: (ctx: XclassContext) => void;
	/**
	 * Exit a parse tree produced by `XcoreParser.xclass`.
	 * @param ctx the parse tree
	 */
	exitXclass?: (ctx: XclassContext) => void;

	/**
	 * Enter a parse tree produced by `XcoreParser.xmember`.
	 * @param ctx the parse tree
	 */
	enterXmember?: (ctx: XmemberContext) => void;
	/**
	 * Exit a parse tree produced by `XcoreParser.xmember`.
	 * @param ctx the parse tree
	 */
	exitXmember?: (ctx: XmemberContext) => void;

	/**
	 * Enter a parse tree produced by `XcoreParser.xattribute`.
	 * @param ctx the parse tree
	 */
	enterXattribute?: (ctx: XattributeContext) => void;
	/**
	 * Exit a parse tree produced by `XcoreParser.xattribute`.
	 * @param ctx the parse tree
	 */
	exitXattribute?: (ctx: XattributeContext) => void;

	/**
	 * Enter a parse tree produced by `XcoreParser.xreference`.
	 * @param ctx the parse tree
	 */
	enterXreference?: (ctx: XreferenceContext) => void;
	/**
	 * Exit a parse tree produced by `XcoreParser.xreference`.
	 * @param ctx the parse tree
	 */
	exitXreference?: (ctx: XreferenceContext) => void;

	/**
	 * Enter a parse tree produced by `XcoreParser.xoperation`.
	 * @param ctx the parse tree
	 */
	enterXoperation?: (ctx: XoperationContext) => void;
	/**
	 * Exit a parse tree produced by `XcoreParser.xoperation`.
	 * @param ctx the parse tree
	 */
	exitXoperation?: (ctx: XoperationContext) => void;

	/**
	 * Enter a parse tree produced by `XcoreParser.xparameter`.
	 * @param ctx the parse tree
	 */
	enterXparameter?: (ctx: XparameterContext) => void;
	/**
	 * Exit a parse tree produced by `XcoreParser.xparameter`.
	 * @param ctx the parse tree
	 */
	exitXparameter?: (ctx: XparameterContext) => void;

	/**
	 * Enter a parse tree produced by `XcoreParser.xtypeparameter`.
	 * @param ctx the parse tree
	 */
	enterXtypeparameter?: (ctx: XtypeparameterContext) => void;
	/**
	 * Exit a parse tree produced by `XcoreParser.xtypeparameter`.
	 * @param ctx the parse tree
	 */
	exitXtypeparameter?: (ctx: XtypeparameterContext) => void;

	/**
	 * Enter a parse tree produced by `XcoreParser.xmultiplicity`.
	 * @param ctx the parse tree
	 */
	enterXmultiplicity?: (ctx: XmultiplicityContext) => void;
	/**
	 * Exit a parse tree produced by `XcoreParser.xmultiplicity`.
	 * @param ctx the parse tree
	 */
	exitXmultiplicity?: (ctx: XmultiplicityContext) => void;

	/**
	 * Enter a parse tree produced by `XcoreParser.xrange`.
	 * @param ctx the parse tree
	 */
	enterXrange?: (ctx: XrangeContext) => void;
	/**
	 * Exit a parse tree produced by `XcoreParser.xrange`.
	 * @param ctx the parse tree
	 */
	exitXrange?: (ctx: XrangeContext) => void;

	/**
	 * Enter a parse tree produced by `XcoreParser.xgenerictype`.
	 * @param ctx the parse tree
	 */
	enterXgenerictype?: (ctx: XgenerictypeContext) => void;
	/**
	 * Exit a parse tree produced by `XcoreParser.xgenerictype`.
	 * @param ctx the parse tree
	 */
	exitXgenerictype?: (ctx: XgenerictypeContext) => void;
}

