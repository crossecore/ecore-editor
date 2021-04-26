// Generated from c:\data\repos\ecore-editor\XcoreParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { XcoreParserListener } from "./XcoreParserListener";
import { XcoreParserVisitor } from "./XcoreParserVisitor";


export class XcoreParser extends Parser {
	public static readonly WS = 1;
	public static readonly NL = 2;
	public static readonly Package = 3;
	public static readonly Abstract = 4;
	public static readonly Class = 5;
	public static readonly Interface = 6;
	public static readonly Extends = 7;
	public static readonly Comma = 8;
	public static readonly Dot = 9;
	public static readonly CurlyBraceOpen = 10;
	public static readonly CurlyBraceClose = 11;
	public static readonly AngleBraceOpen = 12;
	public static readonly AngleBraceClose = 13;
	public static readonly Unordered = 14;
	public static readonly Unique = 15;
	public static readonly Readonly = 16;
	public static readonly Transient = 17;
	public static readonly Unsettable = 18;
	public static readonly Volatile = 19;
	public static readonly Derived = 20;
	public static readonly Idattr = 21;
	public static readonly Contains = 22;
	public static readonly Opposite = 23;
	public static readonly Operation = 24;
	public static readonly Void = 25;
	public static readonly BraceOpen = 26;
	public static readonly BraceClose = 27;
	public static readonly Throws = 28;
	public static readonly SquareBraceOpen = 29;
	public static readonly SquareBraceClose = 30;
	public static readonly Questionmark = 31;
	public static readonly Star = 32;
	public static readonly Plus = 33;
	public static readonly Minus = 34;
	public static readonly Dotdot = 35;
	public static readonly Ampersand = 36;
	public static readonly Enum = 37;
	public static readonly As = 38;
	public static readonly Equal = 39;
	public static readonly ID = 40;
	public static readonly INT = 41;
	public static readonly STRING = 42;
	public static readonly RULE_xpackage = 0;
	public static readonly RULE_qualifiedname = 1;
	public static readonly RULE_xclassifier = 2;
	public static readonly RULE_xenum = 3;
	public static readonly RULE_xenumliteral = 4;
	public static readonly RULE_signedint = 5;
	public static readonly RULE_xclass = 6;
	public static readonly RULE_xmember = 7;
	public static readonly RULE_xattribute = 8;
	public static readonly RULE_xreference = 9;
	public static readonly RULE_xoperation = 10;
	public static readonly RULE_xparameter = 11;
	public static readonly RULE_xtypeparameter = 12;
	public static readonly RULE_xmultiplicity = 13;
	public static readonly RULE_xrange = 14;
	public static readonly RULE_xgenerictype = 15;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"xpackage", "qualifiedname", "xclassifier", "xenum", "xenumliteral", "signedint", 
		"xclass", "xmember", "xattribute", "xreference", "xoperation", "xparameter", 
		"xtypeparameter", "xmultiplicity", "xrange", "xgenerictype",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'package'", "'abstract'", "'class'", 
		"'interface'", "'extends'", "','", "'.'", "'{'", "'}'", "'<'", "'>'", 
		"'unordered'", "'unique'", "'readonly'", "'transient'", "'unsettable'", 
		"'volatile'", "'derived'", "'id'", "'contains'", "'opposite'", "'op'", 
		"'void'", "'('", "')'", "'throws'", "'['", "']'", "'?'", "'*'", "'+'", 
		"'-'", "'..'", "'&'", "'enum'", "'as'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "NL", "Package", "Abstract", "Class", "Interface", "Extends", 
		"Comma", "Dot", "CurlyBraceOpen", "CurlyBraceClose", "AngleBraceOpen", 
		"AngleBraceClose", "Unordered", "Unique", "Readonly", "Transient", "Unsettable", 
		"Volatile", "Derived", "Idattr", "Contains", "Opposite", "Operation", 
		"Void", "BraceOpen", "BraceClose", "Throws", "SquareBraceOpen", "SquareBraceClose", 
		"Questionmark", "Star", "Plus", "Minus", "Dotdot", "Ampersand", "Enum", 
		"As", "Equal", "ID", "INT", "STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XcoreParser._LITERAL_NAMES, XcoreParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XcoreParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "XcoreParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return XcoreParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return XcoreParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(XcoreParser._ATN, this);
	}
	// @RuleVersion(0)
	public xpackage(): XpackageContext {
		let _localctx: XpackageContext = new XpackageContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XcoreParser.RULE_xpackage);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this.match(XcoreParser.Package);
			this.state = 33;
			this.qualifiedname();
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XcoreParser.Abstract) | (1 << XcoreParser.Class) | (1 << XcoreParser.Interface))) !== 0) || _la === XcoreParser.Enum) {
				{
				{
				this.state = 34;
				this.xclassifier();
				}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedname(): QualifiednameContext {
		let _localctx: QualifiednameContext = new QualifiednameContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XcoreParser.RULE_qualifiedname);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.match(XcoreParser.ID);
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XcoreParser.Dot) {
				{
				{
				this.state = 41;
				this.match(XcoreParser.Dot);
				this.state = 42;
				this.match(XcoreParser.ID);
				}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xclassifier(): XclassifierContext {
		let _localctx: XclassifierContext = new XclassifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XcoreParser.RULE_xclassifier);
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XcoreParser.Abstract:
			case XcoreParser.Class:
			case XcoreParser.Interface:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 48;
				this.xclass();
				}
				break;
			case XcoreParser.Enum:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 49;
				this.xenum();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xenum(): XenumContext {
		let _localctx: XenumContext = new XenumContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XcoreParser.RULE_xenum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.match(XcoreParser.Enum);
			this.state = 53;
			this.match(XcoreParser.ID);
			this.state = 54;
			this.match(XcoreParser.CurlyBraceOpen);
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.ID) {
				{
				this.state = 55;
				this.xenumliteral();
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XcoreParser.Comma || _la === XcoreParser.ID) {
					{
					{
					this.state = 57;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XcoreParser.Comma) {
						{
						this.state = 56;
						this.match(XcoreParser.Comma);
						}
					}

					this.state = 59;
					this.xenumliteral();
					}
					}
					this.state = 64;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 67;
			this.match(XcoreParser.CurlyBraceClose);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xenumliteral(): XenumliteralContext {
		let _localctx: XenumliteralContext = new XenumliteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XcoreParser.RULE_xenumliteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(XcoreParser.ID);
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.As) {
				{
				this.state = 70;
				this.match(XcoreParser.As);
				this.state = 71;
				this.match(XcoreParser.STRING);
				}
			}

			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Equal) {
				{
				this.state = 74;
				this.match(XcoreParser.Equal);
				this.state = 75;
				this.signedint();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signedint(): SignedintContext {
		let _localctx: SignedintContext = new SignedintContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XcoreParser.RULE_signedint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Minus) {
				{
				this.state = 78;
				this.match(XcoreParser.Minus);
				}
			}

			this.state = 81;
			this.match(XcoreParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xclass(): XclassContext {
		let _localctx: XclassContext = new XclassContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XcoreParser.RULE_xclass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XcoreParser.Abstract:
			case XcoreParser.Class:
				{
				{
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XcoreParser.Abstract) {
					{
					this.state = 83;
					this.match(XcoreParser.Abstract);
					}
				}

				this.state = 86;
				this.match(XcoreParser.Class);
				}
				}
				break;
			case XcoreParser.Interface:
				{
				this.state = 87;
				this.match(XcoreParser.Interface);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 90;
			this.match(XcoreParser.ID);
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.AngleBraceOpen) {
				{
				this.state = 91;
				this.match(XcoreParser.AngleBraceOpen);
				this.state = 92;
				this.xtypeparameter();
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XcoreParser.Comma) {
					{
					{
					this.state = 93;
					this.match(XcoreParser.Comma);
					this.state = 94;
					this.xtypeparameter();
					}
					}
					this.state = 99;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 100;
				this.match(XcoreParser.AngleBraceOpen);
				}
			}

			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Extends) {
				{
				this.state = 104;
				this.match(XcoreParser.Extends);
				this.state = 105;
				this.xgenerictype();
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XcoreParser.Comma) {
					{
					{
					this.state = 106;
					this.match(XcoreParser.Comma);
					this.state = 107;
					this.xgenerictype();
					}
					}
					this.state = 112;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 115;
			this.match(XcoreParser.CurlyBraceOpen);
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (XcoreParser.Unordered - 14)) | (1 << (XcoreParser.Unique - 14)) | (1 << (XcoreParser.Readonly - 14)) | (1 << (XcoreParser.Transient - 14)) | (1 << (XcoreParser.Unsettable - 14)) | (1 << (XcoreParser.Volatile - 14)) | (1 << (XcoreParser.Derived - 14)) | (1 << (XcoreParser.Idattr - 14)) | (1 << (XcoreParser.Contains - 14)) | (1 << (XcoreParser.Operation - 14)) | (1 << (XcoreParser.ID - 14)))) !== 0)) {
				{
				{
				this.state = 116;
				this.xmember();
				}
				}
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 122;
			this.match(XcoreParser.CurlyBraceClose);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xmember(): XmemberContext {
		let _localctx: XmemberContext = new XmemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XcoreParser.RULE_xmember);
		try {
			this.state = 127;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 124;
				this.xoperation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 125;
				this.xattribute();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 126;
				this.xreference();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xattribute(): XattributeContext {
		let _localctx: XattributeContext = new XattributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XcoreParser.RULE_xattribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Unordered) {
				{
				this.state = 129;
				this.match(XcoreParser.Unordered);
				}
			}

			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Unique) {
				{
				this.state = 132;
				this.match(XcoreParser.Unique);
				}
			}

			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Readonly) {
				{
				this.state = 135;
				this.match(XcoreParser.Readonly);
				}
			}

			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Transient) {
				{
				this.state = 138;
				this.match(XcoreParser.Transient);
				}
			}

			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Volatile) {
				{
				this.state = 141;
				this.match(XcoreParser.Volatile);
				}
			}

			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Unsettable) {
				{
				this.state = 144;
				this.match(XcoreParser.Unsettable);
				}
			}

			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Derived) {
				{
				this.state = 147;
				this.match(XcoreParser.Derived);
				}
			}

			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Idattr) {
				{
				this.state = 150;
				this.match(XcoreParser.Idattr);
				}
			}

			}
			this.state = 153;
			this.xgenerictype();
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.SquareBraceOpen) {
				{
				this.state = 154;
				this.xmultiplicity();
				}
			}

			this.state = 157;
			this.match(XcoreParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xreference(): XreferenceContext {
		let _localctx: XreferenceContext = new XreferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XcoreParser.RULE_xreference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Contains) {
				{
				this.state = 159;
				this.match(XcoreParser.Contains);
				}
			}

			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Unordered) {
				{
				this.state = 162;
				this.match(XcoreParser.Unordered);
				}
			}

			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Unique) {
				{
				this.state = 165;
				this.match(XcoreParser.Unique);
				}
			}

			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Readonly) {
				{
				this.state = 168;
				this.match(XcoreParser.Readonly);
				}
			}

			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Transient) {
				{
				this.state = 171;
				this.match(XcoreParser.Transient);
				}
			}

			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Volatile) {
				{
				this.state = 174;
				this.match(XcoreParser.Volatile);
				}
			}

			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Unsettable) {
				{
				this.state = 177;
				this.match(XcoreParser.Unsettable);
				}
			}

			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Derived) {
				{
				this.state = 180;
				this.match(XcoreParser.Derived);
				}
			}

			}
			this.state = 183;
			this.xgenerictype();
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.SquareBraceOpen) {
				{
				this.state = 184;
				this.xmultiplicity();
				}
			}

			this.state = 187;
			this.match(XcoreParser.ID);
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Opposite) {
				{
				this.state = 188;
				this.match(XcoreParser.Opposite);
				this.state = 189;
				this.match(XcoreParser.ID);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xoperation(): XoperationContext {
		let _localctx: XoperationContext = new XoperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XcoreParser.RULE_xoperation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(XcoreParser.Operation);
			this.state = 201;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XcoreParser.Unordered:
				{
				this.state = 193;
				this.match(XcoreParser.Unordered);
				this.state = 195;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XcoreParser.Unique) {
					{
					this.state = 194;
					this.match(XcoreParser.Unique);
					}
				}

				}
				break;
			case XcoreParser.Unique:
				{
				this.state = 197;
				this.match(XcoreParser.Unique);
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XcoreParser.Unordered) {
					{
					this.state = 198;
					this.match(XcoreParser.Unordered);
					}
				}

				}
				break;
			case XcoreParser.AngleBraceOpen:
			case XcoreParser.Void:
			case XcoreParser.ID:
				break;
			default:
				break;
			}
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.AngleBraceOpen) {
				{
				this.state = 203;
				this.match(XcoreParser.AngleBraceOpen);
				this.state = 204;
				this.xtypeparameter();
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XcoreParser.Comma) {
					{
					{
					this.state = 205;
					this.match(XcoreParser.Comma);
					this.state = 206;
					this.xtypeparameter();
					}
					}
					this.state = 211;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 212;
				this.match(XcoreParser.AngleBraceClose);
				}
			}

			this.state = 218;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XcoreParser.ID:
				{
				this.state = 216;
				this.xgenerictype();
				}
				break;
			case XcoreParser.Void:
				{
				this.state = 217;
				this.match(XcoreParser.Void);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.SquareBraceOpen) {
				{
				this.state = 220;
				this.xmultiplicity();
				}
			}

			this.state = 223;
			this.match(XcoreParser.ID);
			this.state = 224;
			this.match(XcoreParser.BraceOpen);
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (XcoreParser.Unordered - 14)) | (1 << (XcoreParser.Unique - 14)) | (1 << (XcoreParser.ID - 14)))) !== 0)) {
				{
				this.state = 225;
				this.xparameter();
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XcoreParser.Comma) {
					{
					{
					this.state = 226;
					this.match(XcoreParser.Comma);
					this.state = 227;
					this.xparameter();
					}
					}
					this.state = 232;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 235;
			this.match(XcoreParser.BraceClose);
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Throws) {
				{
				this.state = 236;
				this.match(XcoreParser.Throws);
				this.state = 237;
				this.xgenerictype();
				this.state = 242;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XcoreParser.Comma) {
					{
					{
					this.state = 238;
					this.match(XcoreParser.Comma);
					this.state = 239;
					this.xgenerictype();
					}
					}
					this.state = 244;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xparameter(): XparameterContext {
		let _localctx: XparameterContext = new XparameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XcoreParser.RULE_xparameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XcoreParser.Unordered:
				{
				this.state = 247;
				this.match(XcoreParser.Unordered);
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XcoreParser.Unique) {
					{
					this.state = 248;
					this.match(XcoreParser.Unique);
					}
				}

				}
				break;
			case XcoreParser.Unique:
				{
				this.state = 251;
				this.match(XcoreParser.Unique);
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XcoreParser.Unordered) {
					{
					this.state = 252;
					this.match(XcoreParser.Unordered);
					}
				}

				}
				break;
			case XcoreParser.ID:
				break;
			default:
				break;
			}
			this.state = 257;
			this.xgenerictype();
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.SquareBraceOpen) {
				{
				this.state = 258;
				this.xmultiplicity();
				}
			}

			this.state = 261;
			this.match(XcoreParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xtypeparameter(): XtypeparameterContext {
		let _localctx: XtypeparameterContext = new XtypeparameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XcoreParser.RULE_xtypeparameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this.match(XcoreParser.ID);
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Extends) {
				{
				this.state = 264;
				this.match(XcoreParser.Extends);
				this.state = 265;
				this.xgenerictype();
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XcoreParser.Ampersand) {
					{
					{
					this.state = 266;
					this.match(XcoreParser.Ampersand);
					this.state = 267;
					this.xgenerictype();
					}
					}
					this.state = 272;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xmultiplicity(): XmultiplicityContext {
		let _localctx: XmultiplicityContext = new XmultiplicityContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, XcoreParser.RULE_xmultiplicity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.match(XcoreParser.SquareBraceOpen);
			this.state = 280;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XcoreParser.Questionmark:
				{
				this.state = 276;
				this.match(XcoreParser.Questionmark);
				}
				break;
			case XcoreParser.Star:
				{
				this.state = 277;
				this.match(XcoreParser.Star);
				}
				break;
			case XcoreParser.Plus:
				{
				this.state = 278;
				this.match(XcoreParser.Plus);
				}
				break;
			case XcoreParser.INT:
				{
				this.state = 279;
				this.xrange();
				}
				break;
			case XcoreParser.SquareBraceClose:
				break;
			default:
				break;
			}
			this.state = 282;
			this.match(XcoreParser.SquareBraceClose);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xrange(): XrangeContext {
		let _localctx: XrangeContext = new XrangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, XcoreParser.RULE_xrange);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 284;
			this.match(XcoreParser.INT);
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Dotdot) {
				{
				this.state = 285;
				this.match(XcoreParser.Dotdot);
				this.state = 286;
				_la = this._input.LA(1);
				if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (XcoreParser.Questionmark - 31)) | (1 << (XcoreParser.Star - 31)) | (1 << (XcoreParser.INT - 31)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public xgenerictype(): XgenerictypeContext {
		let _localctx: XgenerictypeContext = new XgenerictypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, XcoreParser.RULE_xgenerictype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.qualifiedname();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03,\u0126\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02\x03" +
		"\x02\x07\x02&\n\x02\f\x02\x0E\x02)\v\x02\x03\x03\x03\x03\x03\x03\x07\x03" +
		".\n\x03\f\x03\x0E\x031\v\x03\x03\x04\x03\x04\x05\x045\n\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x05\x05<\n\x05\x03\x05\x07\x05?\n\x05\f\x05" +
		"\x0E\x05B\v\x05\x05\x05D\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
		"\x05\x06K\n\x06\x03\x06\x03\x06\x05\x06O\n\x06\x03\x07\x05\x07R\n\x07" +
		"\x03\x07\x03\x07\x03\b\x05\bW\n\b\x03\b\x03\b\x05\b[\n\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x07\bb\n\b\f\b\x0E\be\v\b\x03\b\x03\b\x05\bi\n\b\x03\b" +
		"\x03\b\x03\b\x03\b\x07\bo\n\b\f\b\x0E\br\v\b\x05\bt\n\b\x03\b\x03\b\x07" +
		"\bx\n\b\f\b\x0E\b{\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x05\t\x82\n\t\x03" +
		"\n\x05\n\x85\n\n\x03\n\x05\n\x88\n\n\x03\n\x05\n\x8B\n\n\x03\n\x05\n\x8E" +
		"\n\n\x03\n\x05\n\x91\n\n\x03\n\x05\n\x94\n\n\x03\n\x05\n\x97\n\n\x03\n" +
		"\x05\n\x9A\n\n\x03\n\x03\n\x05\n\x9E\n\n\x03\n\x03\n\x03\v\x05\v\xA3\n" +
		"\v\x03\v\x05\v\xA6\n\v\x03\v\x05\v\xA9\n\v\x03\v\x05\v\xAC\n\v\x03\v\x05" +
		"\v\xAF\n\v\x03\v\x05\v\xB2\n\v\x03\v\x05\v\xB5\n\v\x03\v\x05\v\xB8\n\v" +
		"\x03\v\x03\v\x05\v\xBC\n\v\x03\v\x03\v\x03\v\x05\v\xC1\n\v\x03\f\x03\f" +
		"\x03\f\x05\f\xC6\n\f\x03\f\x03\f\x05\f\xCA\n\f\x05\f\xCC\n\f\x03\f\x03" +
		"\f\x03\f\x03\f\x07\f\xD2\n\f\f\f\x0E\f\xD5\v\f\x03\f\x03\f\x05\f\xD9\n" +
		"\f\x03\f\x03\f\x05\f\xDD\n\f\x03\f\x05\f\xE0\n\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x07\f\xE7\n\f\f\f\x0E\f\xEA\v\f\x05\f\xEC\n\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x07\f\xF3\n\f\f\f\x0E\f\xF6\v\f\x05\f\xF8\n\f\x03\r\x03" +
		"\r\x05\r\xFC\n\r\x03\r\x03\r\x05\r\u0100\n\r\x05\r\u0102\n\r\x03\r\x03" +
		"\r\x05\r\u0106\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x07\x0E\u010F\n\x0E\f\x0E\x0E\x0E\u0112\v\x0E\x05\x0E\u0114\n\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u011B\n\x0F\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x10\x05\x10\u0122\n\x10\x03\x11\x03\x11\x03\x11\x02" +
		"\x02\x02\x12\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\x02\x03" +
		"\x04\x02!\"++\x02\u0152\x02\"\x03\x02\x02\x02\x04*\x03\x02\x02\x02\x06" +
		"4\x03\x02\x02\x02\b6\x03\x02\x02\x02\nG\x03\x02\x02\x02\fQ\x03\x02\x02" +
		"\x02\x0EZ\x03\x02\x02\x02\x10\x81\x03\x02\x02\x02\x12\x84\x03\x02\x02" +
		"\x02\x14\xA2\x03\x02\x02\x02\x16\xC2\x03\x02\x02\x02\x18\u0101\x03\x02" +
		"\x02\x02\x1A\u0109\x03\x02\x02\x02\x1C\u0115\x03\x02\x02\x02\x1E\u011E" +
		"\x03\x02\x02\x02 \u0123\x03\x02\x02\x02\"#\x07\x05\x02\x02#\'\x05\x04" +
		"\x03\x02$&\x05\x06\x04\x02%$\x03\x02\x02\x02&)\x03\x02\x02\x02\'%\x03" +
		"\x02\x02\x02\'(\x03\x02\x02\x02(\x03\x03\x02\x02\x02)\'\x03\x02\x02\x02" +
		"*/\x07*\x02\x02+,\x07\v\x02\x02,.\x07*\x02\x02-+\x03\x02\x02\x02.1\x03" +
		"\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x020\x05\x03\x02\x02\x02" +
		"1/\x03\x02\x02\x0225\x05\x0E\b\x0235\x05\b\x05\x0242\x03\x02\x02\x024" +
		"3\x03\x02\x02\x025\x07\x03\x02\x02\x0267\x07\'\x02\x0278\x07*\x02\x02" +
		"8C\x07\f\x02\x029@\x05\n\x06\x02:<\x07\n\x02\x02;:\x03\x02\x02\x02;<\x03" +
		"\x02\x02\x02<=\x03\x02\x02\x02=?\x05\n\x06\x02>;\x03\x02\x02\x02?B\x03" +
		"\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02AD\x03\x02\x02\x02B@\x03" +
		"\x02\x02\x02C9\x03\x02\x02\x02CD\x03\x02\x02\x02DE\x03\x02\x02\x02EF\x07" +
		"\r\x02\x02F\t\x03\x02\x02\x02GJ\x07*\x02\x02HI\x07(\x02\x02IK\x07,\x02" +
		"\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02KN\x03\x02\x02\x02LM\x07)\x02" +
		"\x02MO\x05\f\x07\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02O\v\x03\x02\x02" +
		"\x02PR\x07$\x02\x02QP\x03\x02\x02\x02QR\x03\x02\x02\x02RS\x03\x02\x02" +
		"\x02ST\x07+\x02\x02T\r\x03\x02\x02\x02UW\x07\x06\x02\x02VU\x03\x02\x02" +
		"\x02VW\x03\x02\x02\x02WX\x03\x02\x02\x02X[\x07\x07\x02\x02Y[\x07\b\x02" +
		"\x02ZV\x03\x02\x02\x02ZY\x03\x02\x02\x02[\\\x03\x02\x02\x02\\h\x07*\x02" +
		"\x02]^\x07\x0E\x02\x02^c\x05\x1A\x0E\x02_`\x07\n\x02\x02`b\x05\x1A\x0E" +
		"\x02a_\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02" +
		"\x02df\x03\x02\x02\x02ec\x03\x02\x02\x02fg\x07\x0E\x02\x02gi\x03\x02\x02" +
		"\x02h]\x03\x02\x02\x02hi\x03\x02\x02\x02is\x03\x02\x02\x02jk\x07\t\x02" +
		"\x02kp\x05 \x11\x02lm\x07\n\x02\x02mo\x05 \x11\x02nl\x03\x02\x02\x02o" +
		"r\x03\x02\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02qt\x03\x02\x02\x02" +
		"rp\x03\x02\x02\x02sj\x03\x02\x02\x02st\x03\x02\x02\x02tu\x03\x02\x02\x02" +
		"uy\x07\f\x02\x02vx\x05\x10\t\x02wv\x03\x02\x02\x02x{\x03\x02\x02\x02y" +
		"w\x03\x02\x02\x02yz\x03\x02\x02\x02z|\x03\x02\x02\x02{y\x03\x02\x02\x02" +
		"|}\x07\r\x02\x02}\x0F\x03\x02\x02\x02~\x82\x05\x16\f\x02\x7F\x82\x05\x12" +
		"\n\x02\x80\x82\x05\x14\v\x02\x81~\x03\x02\x02\x02\x81\x7F\x03\x02\x02" +
		"\x02\x81\x80\x03\x02\x02\x02\x82\x11\x03\x02\x02\x02\x83\x85\x07\x10\x02" +
		"\x02\x84\x83\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x87\x03\x02\x02" +
		"\x02\x86\x88\x07\x11\x02\x02\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02\x02" +
		"\x02\x88\x8A\x03\x02\x02\x02\x89\x8B\x07\x12\x02\x02\x8A\x89\x03\x02\x02" +
		"\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8D\x03\x02\x02\x02\x8C\x8E\x07\x13\x02" +
		"\x02\x8D\x8C\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x90\x03\x02\x02" +
		"\x02\x8F\x91\x07\x15\x02\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02\x02" +
		"\x02\x91\x93\x03\x02\x02\x02\x92\x94\x07\x14\x02\x02\x93\x92\x03\x02\x02" +
		"\x02\x93\x94\x03\x02\x02\x02\x94\x96\x03\x02\x02\x02\x95\x97\x07\x16\x02" +
		"\x02\x96\x95\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x99\x03\x02\x02" +
		"\x02\x98\x9A\x07\x17\x02\x02\x99\x98\x03\x02\x02\x02\x99\x9A\x03\x02\x02" +
		"\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9D\x05 \x11\x02\x9C\x9E\x05\x1C\x0F" +
		"\x02\x9D\x9C\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9F\x03\x02\x02" +
		"\x02\x9F\xA0\x07*\x02\x02\xA0\x13\x03\x02\x02\x02\xA1\xA3\x07\x18\x02" +
		"\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA5\x03\x02\x02" +
		"\x02\xA4\xA6\x07\x10\x02\x02\xA5\xA4\x03\x02\x02\x02\xA5\xA6\x03\x02\x02" +
		"\x02\xA6\xA8\x03\x02\x02\x02\xA7\xA9\x07\x11\x02\x02\xA8\xA7\x03\x02\x02" +
		"\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAB\x03\x02\x02\x02\xAA\xAC\x07\x12\x02" +
		"\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAE\x03\x02\x02" +
		"\x02\xAD\xAF\x07\x13\x02\x02\xAE\xAD\x03\x02\x02\x02\xAE\xAF\x03\x02\x02" +
		"\x02\xAF\xB1\x03\x02\x02\x02\xB0\xB2\x07\x15\x02\x02\xB1\xB0\x03\x02\x02" +
		"\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x03\x02\x02\x02\xB3\xB5\x07\x14\x02" +
		"\x02\xB4\xB3\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB7\x03\x02\x02" +
		"\x02\xB6\xB8\x07\x16\x02\x02\xB7\xB6\x03\x02\x02\x02\xB7\xB8\x03\x02\x02" +
		"\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBB\x05 \x11\x02\xBA\xBC\x05\x1C\x0F" +
		"\x02\xBB\xBA\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x03\x02\x02" +
		"\x02\xBD\xC0\x07*\x02\x02\xBE\xBF\x07\x19\x02\x02\xBF\xC1\x07*\x02\x02" +
		"\xC0\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\x15\x03\x02\x02\x02" +
		"\xC2\xCB\x07\x1A\x02\x02\xC3\xC5\x07\x10\x02\x02\xC4\xC6\x07\x11\x02\x02" +
		"\xC5\xC4\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xCC\x03\x02\x02\x02" +
		"\xC7\xC9\x07\x11\x02\x02\xC8\xCA\x07\x10\x02\x02\xC9\xC8\x03\x02\x02\x02" +
		"\xC9\xCA\x03\x02\x02\x02\xCA\xCC\x03\x02\x02\x02\xCB\xC3\x03\x02\x02\x02" +
		"\xCB\xC7\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xD8\x03\x02\x02\x02" +
		"\xCD\xCE\x07\x0E\x02\x02\xCE\xD3\x05\x1A\x0E\x02\xCF\xD0\x07\n\x02\x02" +
		"\xD0\xD2\x05\x1A\x0E\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02" +
		"\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02" +
		"\xD5\xD3\x03\x02\x02\x02\xD6\xD7\x07\x0F\x02\x02\xD7\xD9\x03\x02\x02\x02" +
		"\xD8\xCD\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDC\x03\x02\x02\x02" +
		"\xDA\xDD\x05 \x11\x02\xDB\xDD\x07\x1B\x02\x02\xDC\xDA\x03\x02\x02\x02" +
		"\xDC\xDB\x03\x02\x02\x02\xDD\xDF\x03\x02\x02\x02\xDE\xE0\x05\x1C\x0F\x02" +
		"\xDF\xDE\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02" +
		"\xE1\xE2\x07*\x02\x02\xE2\xEB\x07\x1C\x02\x02\xE3\xE8\x05\x18\r\x02\xE4" +
		"\xE5\x07\n\x02\x02\xE5\xE7\x05\x18\r\x02\xE6\xE4\x03\x02\x02\x02\xE7\xEA" +
		"\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEC" +
		"\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xE3\x03\x02\x02\x02\xEB\xEC" +
		"\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xF7\x07\x1D\x02\x02\xEE\xEF" +
		"\x07\x1E\x02\x02\xEF\xF4\x05 \x11\x02\xF0\xF1\x07\n\x02\x02\xF1\xF3\x05" +
		" \x11\x02\xF2\xF0\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03" +
		"\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6\xF4\x03" +
		"\x02\x02\x02\xF7\xEE\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\x17\x03" +
		"\x02\x02\x02\xF9\xFB\x07\x10\x02\x02\xFA\xFC\x07\x11\x02\x02\xFB\xFA\x03" +
		"\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\u0102\x03\x02\x02\x02\xFD\xFF" +
		"\x07\x11\x02\x02\xFE\u0100\x07\x10\x02\x02\xFF\xFE\x03\x02\x02\x02\xFF" +
		"\u0100\x03\x02\x02\x02\u0100\u0102\x03\x02\x02\x02\u0101\xF9\x03\x02\x02" +
		"\x02\u0101\xFD\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0103" +
		"\x03\x02\x02\x02\u0103\u0105\x05 \x11\x02\u0104\u0106\x05\x1C\x0F\x02" +
		"\u0105\u0104\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0107\x03" +
		"\x02\x02\x02\u0107\u0108\x07*\x02\x02\u0108\x19\x03\x02\x02\x02\u0109" +
		"\u0113\x07*\x02\x02\u010A\u010B\x07\t\x02\x02\u010B\u0110\x05 \x11\x02" +
		"\u010C\u010D\x07&\x02\x02\u010D\u010F\x05 \x11\x02\u010E\u010C\x03\x02" +
		"\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110" +
		"\u0111\x03\x02\x02\x02\u0111\u0114\x03\x02\x02\x02\u0112\u0110\x03\x02" +
		"\x02\x02\u0113\u010A\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114" +
		"\x1B\x03\x02\x02\x02\u0115\u011A\x07\x1F\x02\x02\u0116\u011B\x07!\x02" +
		"\x02\u0117\u011B\x07\"\x02\x02\u0118\u011B\x07#\x02\x02\u0119\u011B\x05" +
		"\x1E\x10\x02\u011A\u0116\x03\x02\x02\x02\u011A\u0117\x03\x02\x02\x02\u011A" +
		"\u0118\x03\x02\x02\x02\u011A\u0119\x03\x02\x02\x02\u011A\u011B\x03\x02" +
		"\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011D\x07 \x02\x02\u011D\x1D" +
		"\x03\x02\x02\x02\u011E\u0121\x07+\x02\x02\u011F\u0120\x07%\x02\x02\u0120" +
		"\u0122\t\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02\x02" +
		"\x02\u0122\x1F\x03\x02\x02\x02\u0123\u0124\x05\x04\x03\x02\u0124!\x03" +
		"\x02\x02\x029\'/4;@CJNQVZchpsy\x81\x84\x87\x8A\x8D\x90\x93\x96\x99\x9D" +
		"\xA2\xA5\xA8\xAB\xAE\xB1\xB4\xB7\xBB\xC0\xC5\xC9\xCB\xD3\xD8\xDC\xDF\xE8" +
		"\xEB\xF4\xF7\xFB\xFF\u0101\u0105\u0110\u0113\u011A\u0121";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XcoreParser.__ATN) {
			XcoreParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XcoreParser._serializedATN));
		}

		return XcoreParser.__ATN;
	}

}

export class XpackageContext extends ParserRuleContext {
	public Package(): TerminalNode { return this.getToken(XcoreParser.Package, 0); }
	public qualifiedname(): QualifiednameContext {
		return this.getRuleContext(0, QualifiednameContext);
	}
	public xclassifier(): XclassifierContext[];
	public xclassifier(i: number): XclassifierContext;
	public xclassifier(i?: number): XclassifierContext | XclassifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(XclassifierContext);
		} else {
			return this.getRuleContext(i, XclassifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XcoreParser.RULE_xpackage; }
	// @Override
	public enterRule(listener: XcoreParserListener): void {
		if (listener.enterXpackage) {
			listener.enterXpackage(this);
		}
	}
	// @Override
	public exitRule(listener: XcoreParserListener): void {
		if (listener.exitXpackage) {
			listener.exitXpackage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XcoreParserVisitor<Result>): Result {
		if (visitor.visitXpackage) {
			return visitor.visitXpackage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiednameContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XcoreParser.ID);
		} else {
			return this.getToken(XcoreParser.ID, i);
		}
	}
	public Dot(): TerminalNode[];
	public Dot(i: number): TerminalNode;
	public Dot(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XcoreParser.Dot);
		} else {
			return this.getToken(XcoreParser.Dot, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XcoreParser.RULE_qualifiedname; }
	// @Override
	public enterRule(listener: XcoreParserListener): void {
		if (listener.enterQualifiedname) {
			listener.enterQualifiedname(this);
		}
	}
	// @Override
	public exitRule(listener: XcoreParserListener): void {
		if (listener.exitQualifiedname) {
			listener.exitQualifiedname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XcoreParserVisitor<Result>): Result {
		if (visitor.visitQualifiedname) {
			return visitor.visitQualifiedname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XclassifierContext extends ParserRuleContext {
	public xclass(): XclassContext | undefined {
		return this.tryGetRuleContext(0, XclassContext);
	}
	public xenum(): XenumContext | undefined {
		return this.tryGetRuleContext(0, XenumContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XcoreParser.RULE_xclassifier; }
	// @Override
	public enterRule(listener: XcoreParserListener): void {
		if (listener.enterXclassifier) {
			listener.enterXclassifier(this);
		}
	}
	// @Override
	public exitRule(listener: XcoreParserListener): void {
		if (listener.exitXclassifier) {
			listener.exitXclassifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XcoreParserVisitor<Result>): Result {
		if (visitor.visitXclassifier) {
			return visitor.visitXclassifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XenumContext extends ParserRuleContext {
	public Enum(): TerminalNode { return this.getToken(XcoreParser.Enum, 0); }
	public ID(): TerminalNode { return this.getToken(XcoreParser.ID, 0); }
	public CurlyBraceOpen(): TerminalNode { return this.getToken(XcoreParser.CurlyBraceOpen, 0); }
	public CurlyBraceClose(): TerminalNode { return this.getToken(XcoreParser.CurlyBraceClose, 0); }
	public xenumliteral(): XenumliteralContext[];
	public xenumliteral(i: number): XenumliteralContext;
	public xenumliteral(i?: number): XenumliteralContext | XenumliteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(XenumliteralContext);
		} else {
			return this.getRuleContext(i, XenumliteralContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XcoreParser.Comma);
		} else {
			return this.getToken(XcoreParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XcoreParser.RULE_xenum; }
	// @Override
	public enterRule(listener: XcoreParserListener): void {
		if (listener.enterXenum) {
			listener.enterXenum(this);
		}
	}
	// @Override
	public exitRule(listener: XcoreParserListener): void {
		if (listener.exitXenum) {
			listener.exitXenum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XcoreParserVisitor<Result>): Result {
		if (visitor.visitXenum) {
			return visitor.visitXenum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XenumliteralContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(XcoreParser.ID, 0); }
	public As(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.As, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.STRING, 0); }
	public Equal(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Equal, 0); }
	public signedint(): SignedintContext | undefined {
		return this.tryGetRuleContext(0, SignedintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XcoreParser.RULE_xenumliteral; }
	// @Override
	public enterRule(listener: XcoreParserListener): void {
		if (listener.enterXenumliteral) {
			listener.enterXenumliteral(this);
		}
	}
	// @Override
	public exitRule(listener: XcoreParserListener): void {
		if (listener.exitXenumliteral) {
			listener.exitXenumliteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XcoreParserVisitor<Result>): Result {
		if (visitor.visitXenumliteral) {
			return visitor.visitXenumliteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignedintContext extends ParserRuleContext {
	public INT(): TerminalNode { return this.getToken(XcoreParser.INT, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Minus, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XcoreParser.RULE_signedint; }
	// @Override
	public enterRule(listener: XcoreParserListener): void {
		if (listener.enterSignedint) {
			listener.enterSignedint(this);
		}
	}
	// @Override
	public exitRule(listener: XcoreParserListener): void {
		if (listener.exitSignedint) {
			listener.exitSignedint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XcoreParserVisitor<Result>): Result {
		if (visitor.visitSignedint) {
			return visitor.visitSignedint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XclassContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(XcoreParser.ID, 0); }
	public CurlyBraceOpen(): TerminalNode { return this.getToken(XcoreParser.CurlyBraceOpen, 0); }
	public CurlyBraceClose(): TerminalNode { return this.getToken(XcoreParser.CurlyBraceClose, 0); }
	public Interface(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Interface, 0); }
	public AngleBraceOpen(): TerminalNode[];
	public AngleBraceOpen(i: number): TerminalNode;
	public AngleBraceOpen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XcoreParser.AngleBraceOpen);
		} else {
			return this.getToken(XcoreParser.AngleBraceOpen, i);
		}
	}
	public xtypeparameter(): XtypeparameterContext[];
	public xtypeparameter(i: number): XtypeparameterContext;
	public xtypeparameter(i?: number): XtypeparameterContext | XtypeparameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(XtypeparameterContext);
		} else {
			return this.getRuleContext(i, XtypeparameterContext);
		}
	}
	public Extends(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Extends, 0); }
	public xgenerictype(): XgenerictypeContext[];
	public xgenerictype(i: number): XgenerictypeContext;
	public xgenerictype(i?: number): XgenerictypeContext | XgenerictypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(XgenerictypeContext);
		} else {
			return this.getRuleContext(i, XgenerictypeContext);
		}
	}
	public xmember(): XmemberContext[];
	public xmember(i: number): XmemberContext;
	public xmember(i?: number): XmemberContext | XmemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(XmemberContext);
		} else {
			return this.getRuleContext(i, XmemberContext);
		}
	}
	public Class(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Class, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XcoreParser.Comma);
		} else {
			return this.getToken(XcoreParser.Comma, i);
		}
	}
	public Abstract(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Abstract, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XcoreParser.RULE_xclass; }
	// @Override
	public enterRule(listener: XcoreParserListener): void {
		if (listener.enterXclass) {
			listener.enterXclass(this);
		}
	}
	// @Override
	public exitRule(listener: XcoreParserListener): void {
		if (listener.exitXclass) {
			listener.exitXclass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XcoreParserVisitor<Result>): Result {
		if (visitor.visitXclass) {
			return visitor.visitXclass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XmemberContext extends ParserRuleContext {
	public xoperation(): XoperationContext | undefined {
		return this.tryGetRuleContext(0, XoperationContext);
	}
	public xattribute(): XattributeContext | undefined {
		return this.tryGetRuleContext(0, XattributeContext);
	}
	public xreference(): XreferenceContext | undefined {
		return this.tryGetRuleContext(0, XreferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XcoreParser.RULE_xmember; }
	// @Override
	public enterRule(listener: XcoreParserListener): void {
		if (listener.enterXmember) {
			listener.enterXmember(this);
		}
	}
	// @Override
	public exitRule(listener: XcoreParserListener): void {
		if (listener.exitXmember) {
			listener.exitXmember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XcoreParserVisitor<Result>): Result {
		if (visitor.visitXmember) {
			return visitor.visitXmember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XattributeContext extends ParserRuleContext {
	public xgenerictype(): XgenerictypeContext {
		return this.getRuleContext(0, XgenerictypeContext);
	}
	public ID(): TerminalNode { return this.getToken(XcoreParser.ID, 0); }
	public xmultiplicity(): XmultiplicityContext | undefined {
		return this.tryGetRuleContext(0, XmultiplicityContext);
	}
	public Unordered(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Unordered, 0); }
	public Unique(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Unique, 0); }
	public Readonly(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Readonly, 0); }
	public Transient(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Transient, 0); }
	public Volatile(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Volatile, 0); }
	public Unsettable(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Unsettable, 0); }
	public Derived(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Derived, 0); }
	public Idattr(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Idattr, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XcoreParser.RULE_xattribute; }
	// @Override
	public enterRule(listener: XcoreParserListener): void {
		if (listener.enterXattribute) {
			listener.enterXattribute(this);
		}
	}
	// @Override
	public exitRule(listener: XcoreParserListener): void {
		if (listener.exitXattribute) {
			listener.exitXattribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XcoreParserVisitor<Result>): Result {
		if (visitor.visitXattribute) {
			return visitor.visitXattribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XreferenceContext extends ParserRuleContext {
	public xgenerictype(): XgenerictypeContext {
		return this.getRuleContext(0, XgenerictypeContext);
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XcoreParser.ID);
		} else {
			return this.getToken(XcoreParser.ID, i);
		}
	}
	public xmultiplicity(): XmultiplicityContext | undefined {
		return this.tryGetRuleContext(0, XmultiplicityContext);
	}
	public Opposite(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Opposite, 0); }
	public Contains(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Contains, 0); }
	public Unordered(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Unordered, 0); }
	public Unique(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Unique, 0); }
	public Readonly(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Readonly, 0); }
	public Transient(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Transient, 0); }
	public Volatile(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Volatile, 0); }
	public Unsettable(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Unsettable, 0); }
	public Derived(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Derived, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XcoreParser.RULE_xreference; }
	// @Override
	public enterRule(listener: XcoreParserListener): void {
		if (listener.enterXreference) {
			listener.enterXreference(this);
		}
	}
	// @Override
	public exitRule(listener: XcoreParserListener): void {
		if (listener.exitXreference) {
			listener.exitXreference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XcoreParserVisitor<Result>): Result {
		if (visitor.visitXreference) {
			return visitor.visitXreference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XoperationContext extends ParserRuleContext {
	public Operation(): TerminalNode { return this.getToken(XcoreParser.Operation, 0); }
	public ID(): TerminalNode { return this.getToken(XcoreParser.ID, 0); }
	public BraceOpen(): TerminalNode { return this.getToken(XcoreParser.BraceOpen, 0); }
	public BraceClose(): TerminalNode { return this.getToken(XcoreParser.BraceClose, 0); }
	public xgenerictype(): XgenerictypeContext[];
	public xgenerictype(i: number): XgenerictypeContext;
	public xgenerictype(i?: number): XgenerictypeContext | XgenerictypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(XgenerictypeContext);
		} else {
			return this.getRuleContext(i, XgenerictypeContext);
		}
	}
	public Void(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Void, 0); }
	public Unordered(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Unordered, 0); }
	public Unique(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Unique, 0); }
	public AngleBraceOpen(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.AngleBraceOpen, 0); }
	public xtypeparameter(): XtypeparameterContext[];
	public xtypeparameter(i: number): XtypeparameterContext;
	public xtypeparameter(i?: number): XtypeparameterContext | XtypeparameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(XtypeparameterContext);
		} else {
			return this.getRuleContext(i, XtypeparameterContext);
		}
	}
	public AngleBraceClose(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.AngleBraceClose, 0); }
	public xmultiplicity(): XmultiplicityContext | undefined {
		return this.tryGetRuleContext(0, XmultiplicityContext);
	}
	public xparameter(): XparameterContext[];
	public xparameter(i: number): XparameterContext;
	public xparameter(i?: number): XparameterContext | XparameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(XparameterContext);
		} else {
			return this.getRuleContext(i, XparameterContext);
		}
	}
	public Throws(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Throws, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XcoreParser.Comma);
		} else {
			return this.getToken(XcoreParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XcoreParser.RULE_xoperation; }
	// @Override
	public enterRule(listener: XcoreParserListener): void {
		if (listener.enterXoperation) {
			listener.enterXoperation(this);
		}
	}
	// @Override
	public exitRule(listener: XcoreParserListener): void {
		if (listener.exitXoperation) {
			listener.exitXoperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XcoreParserVisitor<Result>): Result {
		if (visitor.visitXoperation) {
			return visitor.visitXoperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XparameterContext extends ParserRuleContext {
	public xgenerictype(): XgenerictypeContext {
		return this.getRuleContext(0, XgenerictypeContext);
	}
	public ID(): TerminalNode { return this.getToken(XcoreParser.ID, 0); }
	public Unordered(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Unordered, 0); }
	public Unique(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Unique, 0); }
	public xmultiplicity(): XmultiplicityContext | undefined {
		return this.tryGetRuleContext(0, XmultiplicityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XcoreParser.RULE_xparameter; }
	// @Override
	public enterRule(listener: XcoreParserListener): void {
		if (listener.enterXparameter) {
			listener.enterXparameter(this);
		}
	}
	// @Override
	public exitRule(listener: XcoreParserListener): void {
		if (listener.exitXparameter) {
			listener.exitXparameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XcoreParserVisitor<Result>): Result {
		if (visitor.visitXparameter) {
			return visitor.visitXparameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XtypeparameterContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(XcoreParser.ID, 0); }
	public Extends(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Extends, 0); }
	public xgenerictype(): XgenerictypeContext[];
	public xgenerictype(i: number): XgenerictypeContext;
	public xgenerictype(i?: number): XgenerictypeContext | XgenerictypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(XgenerictypeContext);
		} else {
			return this.getRuleContext(i, XgenerictypeContext);
		}
	}
	public Ampersand(): TerminalNode[];
	public Ampersand(i: number): TerminalNode;
	public Ampersand(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XcoreParser.Ampersand);
		} else {
			return this.getToken(XcoreParser.Ampersand, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XcoreParser.RULE_xtypeparameter; }
	// @Override
	public enterRule(listener: XcoreParserListener): void {
		if (listener.enterXtypeparameter) {
			listener.enterXtypeparameter(this);
		}
	}
	// @Override
	public exitRule(listener: XcoreParserListener): void {
		if (listener.exitXtypeparameter) {
			listener.exitXtypeparameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XcoreParserVisitor<Result>): Result {
		if (visitor.visitXtypeparameter) {
			return visitor.visitXtypeparameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XmultiplicityContext extends ParserRuleContext {
	public SquareBraceOpen(): TerminalNode { return this.getToken(XcoreParser.SquareBraceOpen, 0); }
	public SquareBraceClose(): TerminalNode { return this.getToken(XcoreParser.SquareBraceClose, 0); }
	public Questionmark(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Questionmark, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Star, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Plus, 0); }
	public xrange(): XrangeContext | undefined {
		return this.tryGetRuleContext(0, XrangeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XcoreParser.RULE_xmultiplicity; }
	// @Override
	public enterRule(listener: XcoreParserListener): void {
		if (listener.enterXmultiplicity) {
			listener.enterXmultiplicity(this);
		}
	}
	// @Override
	public exitRule(listener: XcoreParserListener): void {
		if (listener.exitXmultiplicity) {
			listener.exitXmultiplicity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XcoreParserVisitor<Result>): Result {
		if (visitor.visitXmultiplicity) {
			return visitor.visitXmultiplicity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XrangeContext extends ParserRuleContext {
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XcoreParser.INT);
		} else {
			return this.getToken(XcoreParser.INT, i);
		}
	}
	public Dotdot(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Dotdot, 0); }
	public Questionmark(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Questionmark, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(XcoreParser.Star, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XcoreParser.RULE_xrange; }
	// @Override
	public enterRule(listener: XcoreParserListener): void {
		if (listener.enterXrange) {
			listener.enterXrange(this);
		}
	}
	// @Override
	public exitRule(listener: XcoreParserListener): void {
		if (listener.exitXrange) {
			listener.exitXrange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XcoreParserVisitor<Result>): Result {
		if (visitor.visitXrange) {
			return visitor.visitXrange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XgenerictypeContext extends ParserRuleContext {
	public qualifiedname(): QualifiednameContext {
		return this.getRuleContext(0, QualifiednameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XcoreParser.RULE_xgenerictype; }
	// @Override
	public enterRule(listener: XcoreParserListener): void {
		if (listener.enterXgenerictype) {
			listener.enterXgenerictype(this);
		}
	}
	// @Override
	public exitRule(listener: XcoreParserListener): void {
		if (listener.exitXgenerictype) {
			listener.exitXgenerictype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XcoreParserVisitor<Result>): Result {
		if (visitor.visitXgenerictype) {
			return visitor.visitXgenerictype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


