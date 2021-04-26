// Generated from c:\data\repos\ecore-editor\XcoreParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { XpackageContext } from "./XcoreParser";
import { QualifiednameContext } from "./XcoreParser";
import { XclassifierContext } from "./XcoreParser";
import { XenumContext } from "./XcoreParser";
import { XenumliteralContext } from "./XcoreParser";
import { SignedintContext } from "./XcoreParser";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `XcoreParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface XcoreParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `XcoreParser.xpackage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXpackage?: (ctx: XpackageContext) => Result;

	/**
	 * Visit a parse tree produced by `XcoreParser.qualifiedname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedname?: (ctx: QualifiednameContext) => Result;

	/**
	 * Visit a parse tree produced by `XcoreParser.xclassifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXclassifier?: (ctx: XclassifierContext) => Result;

	/**
	 * Visit a parse tree produced by `XcoreParser.xenum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXenum?: (ctx: XenumContext) => Result;

	/**
	 * Visit a parse tree produced by `XcoreParser.xenumliteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXenumliteral?: (ctx: XenumliteralContext) => Result;

	/**
	 * Visit a parse tree produced by `XcoreParser.signedint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignedint?: (ctx: SignedintContext) => Result;

	/**
	 * Visit a parse tree produced by `XcoreParser.xclass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXclass?: (ctx: XclassContext) => Result;

	/**
	 * Visit a parse tree produced by `XcoreParser.xmember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXmember?: (ctx: XmemberContext) => Result;

	/**
	 * Visit a parse tree produced by `XcoreParser.xattribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXattribute?: (ctx: XattributeContext) => Result;

	/**
	 * Visit a parse tree produced by `XcoreParser.xreference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXreference?: (ctx: XreferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `XcoreParser.xoperation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXoperation?: (ctx: XoperationContext) => Result;

	/**
	 * Visit a parse tree produced by `XcoreParser.xparameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXparameter?: (ctx: XparameterContext) => Result;

	/**
	 * Visit a parse tree produced by `XcoreParser.xtypeparameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXtypeparameter?: (ctx: XtypeparameterContext) => Result;

	/**
	 * Visit a parse tree produced by `XcoreParser.xmultiplicity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXmultiplicity?: (ctx: XmultiplicityContext) => Result;

	/**
	 * Visit a parse tree produced by `XcoreParser.xrange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXrange?: (ctx: XrangeContext) => Result;

	/**
	 * Visit a parse tree produced by `XcoreParser.xgenerictype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXgenerictype?: (ctx: XgenerictypeContext) => Result;
}

