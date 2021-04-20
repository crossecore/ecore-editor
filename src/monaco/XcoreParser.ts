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
	public static readonly Dotdot = 34;
	public static readonly Ampersand = 35;
	public static readonly ID = 36;
	public static readonly INT = 37;
	public static readonly RULE_xpackage = 0;
	public static readonly RULE_qualifiedname = 1;
	public static readonly RULE_xclassifier = 2;
	public static readonly RULE_xclass = 3;
	public static readonly RULE_xmember = 4;
	public static readonly RULE_xattribute = 5;
	public static readonly RULE_xreference = 6;
	public static readonly RULE_xoperation = 7;
	public static readonly RULE_xparameter = 8;
	public static readonly RULE_xtypeparameter = 9;
	public static readonly RULE_xmultiplicity = 10;
	public static readonly RULE_xrange = 11;
	public static readonly RULE_xgenerictype = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"xpackage", "qualifiedname", "xclassifier", "xclass", "xmember", "xattribute", 
		"xreference", "xoperation", "xparameter", "xtypeparameter", "xmultiplicity", 
		"xrange", "xgenerictype",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'package'", "'abstract'", "'class'", 
		"'interface'", "'extends'", "','", "'.'", "'{'", "'}'", "'<'", "'>'", 
		"'unordered'", "'unique'", "'readonly'", "'transient'", "'unsettable'", 
		"'volatile'", "'derived'", "'id'", "'contains'", "'opposite'", "'op'", 
		"'void'", "'('", "')'", "'throws'", "'['", "']'", "'?'", "'*'", "'+'", 
		"'..'", "'&'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "NL", "Package", "Abstract", "Class", "Interface", "Extends", 
		"Comma", "Dot", "CurlyBraceOpen", "CurlyBraceClose", "AngleBraceOpen", 
		"AngleBraceClose", "Unordered", "Unique", "Readonly", "Transient", "Unsettable", 
		"Volatile", "Derived", "Idattr", "Contains", "Opposite", "Operation", 
		"Void", "BraceOpen", "BraceClose", "Throws", "SquareBraceOpen", "SquareBraceClose", 
		"Questionmark", "Star", "Plus", "Dotdot", "Ampersand", "ID", "INT",
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
			this.state = 26;
			this.match(XcoreParser.Package);
			this.state = 27;
			this.qualifiedname();
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XcoreParser.Abstract) | (1 << XcoreParser.Class) | (1 << XcoreParser.Interface))) !== 0)) {
				{
				{
				this.state = 28;
				this.xclassifier();
				}
				}
				this.state = 33;
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
			this.state = 34;
			this.match(XcoreParser.ID);
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XcoreParser.Dot) {
				{
				{
				this.state = 35;
				this.match(XcoreParser.Dot);
				this.state = 36;
				this.match(XcoreParser.ID);
				}
				}
				this.state = 41;
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.xclass();
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
		this.enterRule(_localctx, 6, XcoreParser.RULE_xclass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XcoreParser.Abstract:
			case XcoreParser.Class:
				{
				{
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XcoreParser.Abstract) {
					{
					this.state = 44;
					this.match(XcoreParser.Abstract);
					}
				}

				this.state = 47;
				this.match(XcoreParser.Class);
				}
				}
				break;
			case XcoreParser.Interface:
				{
				this.state = 48;
				this.match(XcoreParser.Interface);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 51;
			this.match(XcoreParser.ID);
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.AngleBraceOpen) {
				{
				this.state = 52;
				this.match(XcoreParser.AngleBraceOpen);
				this.state = 53;
				this.xtypeparameter();
				this.state = 58;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XcoreParser.Comma) {
					{
					{
					this.state = 54;
					this.match(XcoreParser.Comma);
					this.state = 55;
					this.xtypeparameter();
					}
					}
					this.state = 60;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 61;
				this.match(XcoreParser.AngleBraceOpen);
				}
			}

			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Extends) {
				{
				this.state = 65;
				this.match(XcoreParser.Extends);
				this.state = 66;
				this.xgenerictype();
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XcoreParser.Comma) {
					{
					{
					this.state = 67;
					this.match(XcoreParser.Comma);
					this.state = 68;
					this.xgenerictype();
					}
					}
					this.state = 73;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 76;
			this.match(XcoreParser.CurlyBraceOpen);
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (XcoreParser.Unordered - 14)) | (1 << (XcoreParser.Unique - 14)) | (1 << (XcoreParser.Readonly - 14)) | (1 << (XcoreParser.Transient - 14)) | (1 << (XcoreParser.Unsettable - 14)) | (1 << (XcoreParser.Volatile - 14)) | (1 << (XcoreParser.Derived - 14)) | (1 << (XcoreParser.Idattr - 14)) | (1 << (XcoreParser.Contains - 14)) | (1 << (XcoreParser.Operation - 14)) | (1 << (XcoreParser.ID - 14)))) !== 0)) {
				{
				{
				this.state = 77;
				this.xmember();
				}
				}
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 83;
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
		this.enterRule(_localctx, 8, XcoreParser.RULE_xmember);
		try {
			this.state = 88;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 85;
				this.xoperation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 86;
				this.xattribute();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 87;
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
		this.enterRule(_localctx, 10, XcoreParser.RULE_xattribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Unordered) {
				{
				this.state = 90;
				this.match(XcoreParser.Unordered);
				}
			}

			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Unique) {
				{
				this.state = 93;
				this.match(XcoreParser.Unique);
				}
			}

			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Readonly) {
				{
				this.state = 96;
				this.match(XcoreParser.Readonly);
				}
			}

			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Transient) {
				{
				this.state = 99;
				this.match(XcoreParser.Transient);
				}
			}

			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Volatile) {
				{
				this.state = 102;
				this.match(XcoreParser.Volatile);
				}
			}

			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Unsettable) {
				{
				this.state = 105;
				this.match(XcoreParser.Unsettable);
				}
			}

			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Derived) {
				{
				this.state = 108;
				this.match(XcoreParser.Derived);
				}
			}

			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Idattr) {
				{
				this.state = 111;
				this.match(XcoreParser.Idattr);
				}
			}

			}
			this.state = 114;
			this.xgenerictype();
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.SquareBraceOpen) {
				{
				this.state = 115;
				this.xmultiplicity();
				}
			}

			this.state = 118;
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
		this.enterRule(_localctx, 12, XcoreParser.RULE_xreference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Contains) {
				{
				this.state = 120;
				this.match(XcoreParser.Contains);
				}
			}

			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Unordered) {
				{
				this.state = 123;
				this.match(XcoreParser.Unordered);
				}
			}

			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Unique) {
				{
				this.state = 126;
				this.match(XcoreParser.Unique);
				}
			}

			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Readonly) {
				{
				this.state = 129;
				this.match(XcoreParser.Readonly);
				}
			}

			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Transient) {
				{
				this.state = 132;
				this.match(XcoreParser.Transient);
				}
			}

			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Volatile) {
				{
				this.state = 135;
				this.match(XcoreParser.Volatile);
				}
			}

			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Unsettable) {
				{
				this.state = 138;
				this.match(XcoreParser.Unsettable);
				}
			}

			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Derived) {
				{
				this.state = 141;
				this.match(XcoreParser.Derived);
				}
			}

			}
			this.state = 144;
			this.xgenerictype();
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.SquareBraceOpen) {
				{
				this.state = 145;
				this.xmultiplicity();
				}
			}

			this.state = 148;
			this.match(XcoreParser.ID);
			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Opposite) {
				{
				this.state = 149;
				this.match(XcoreParser.Opposite);
				this.state = 150;
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
		this.enterRule(_localctx, 14, XcoreParser.RULE_xoperation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.match(XcoreParser.Operation);
			this.state = 162;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XcoreParser.Unordered:
				{
				this.state = 154;
				this.match(XcoreParser.Unordered);
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XcoreParser.Unique) {
					{
					this.state = 155;
					this.match(XcoreParser.Unique);
					}
				}

				}
				break;
			case XcoreParser.Unique:
				{
				this.state = 158;
				this.match(XcoreParser.Unique);
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XcoreParser.Unordered) {
					{
					this.state = 159;
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
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.AngleBraceOpen) {
				{
				this.state = 164;
				this.match(XcoreParser.AngleBraceOpen);
				this.state = 165;
				this.xtypeparameter();
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XcoreParser.Comma) {
					{
					{
					this.state = 166;
					this.match(XcoreParser.Comma);
					this.state = 167;
					this.xtypeparameter();
					}
					}
					this.state = 172;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 173;
				this.match(XcoreParser.AngleBraceClose);
				}
			}

			this.state = 179;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XcoreParser.ID:
				{
				this.state = 177;
				this.xgenerictype();
				}
				break;
			case XcoreParser.Void:
				{
				this.state = 178;
				this.match(XcoreParser.Void);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.SquareBraceOpen) {
				{
				this.state = 181;
				this.xmultiplicity();
				}
			}

			this.state = 184;
			this.match(XcoreParser.ID);
			this.state = 185;
			this.match(XcoreParser.BraceOpen);
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (XcoreParser.Unordered - 14)) | (1 << (XcoreParser.Unique - 14)) | (1 << (XcoreParser.ID - 14)))) !== 0)) {
				{
				this.state = 186;
				this.xparameter();
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XcoreParser.Comma) {
					{
					{
					this.state = 187;
					this.match(XcoreParser.Comma);
					this.state = 188;
					this.xparameter();
					}
					}
					this.state = 193;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 196;
			this.match(XcoreParser.BraceClose);
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Throws) {
				{
				this.state = 197;
				this.match(XcoreParser.Throws);
				this.state = 198;
				this.xgenerictype();
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XcoreParser.Comma) {
					{
					{
					this.state = 199;
					this.match(XcoreParser.Comma);
					this.state = 200;
					this.xgenerictype();
					}
					}
					this.state = 205;
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
		this.enterRule(_localctx, 16, XcoreParser.RULE_xparameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XcoreParser.Unordered:
				{
				this.state = 208;
				this.match(XcoreParser.Unordered);
				this.state = 210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XcoreParser.Unique) {
					{
					this.state = 209;
					this.match(XcoreParser.Unique);
					}
				}

				}
				break;
			case XcoreParser.Unique:
				{
				this.state = 212;
				this.match(XcoreParser.Unique);
				this.state = 214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XcoreParser.Unordered) {
					{
					this.state = 213;
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
			this.state = 218;
			this.xgenerictype();
			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.SquareBraceOpen) {
				{
				this.state = 219;
				this.xmultiplicity();
				}
			}

			this.state = 222;
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
		this.enterRule(_localctx, 18, XcoreParser.RULE_xtypeparameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.match(XcoreParser.ID);
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Extends) {
				{
				this.state = 225;
				this.match(XcoreParser.Extends);
				this.state = 226;
				this.xgenerictype();
				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XcoreParser.Ampersand) {
					{
					{
					this.state = 227;
					this.match(XcoreParser.Ampersand);
					this.state = 228;
					this.xgenerictype();
					}
					}
					this.state = 233;
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
		this.enterRule(_localctx, 20, XcoreParser.RULE_xmultiplicity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(XcoreParser.SquareBraceOpen);
			this.state = 241;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XcoreParser.Questionmark:
				{
				this.state = 237;
				this.match(XcoreParser.Questionmark);
				}
				break;
			case XcoreParser.Star:
				{
				this.state = 238;
				this.match(XcoreParser.Star);
				}
				break;
			case XcoreParser.Plus:
				{
				this.state = 239;
				this.match(XcoreParser.Plus);
				}
				break;
			case XcoreParser.INT:
				{
				this.state = 240;
				this.xrange();
				}
				break;
			case XcoreParser.SquareBraceClose:
				break;
			default:
				break;
			}
			this.state = 243;
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
		this.enterRule(_localctx, 22, XcoreParser.RULE_xrange);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 245;
			this.match(XcoreParser.INT);
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XcoreParser.Dotdot) {
				{
				this.state = 246;
				this.match(XcoreParser.Dotdot);
				this.state = 247;
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
		this.enterRule(_localctx, 24, XcoreParser.RULE_xgenerictype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\'\xFF\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x03\x02\x03\x02\x07\x02 \n\x02\f\x02\x0E\x02#\v\x02" +
		"\x03\x03\x03\x03\x03\x03\x07\x03(\n\x03\f\x03\x0E\x03+\v\x03\x03\x04\x03" +
		"\x04\x03\x05\x05\x050\n\x05\x03\x05\x03\x05\x05\x054\n\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x07\x05;\n\x05\f\x05\x0E\x05>\v\x05\x03\x05" +
		"\x03\x05\x05\x05B\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05H\n\x05" +
		"\f\x05\x0E\x05K\v\x05\x05\x05M\n\x05\x03\x05\x03\x05\x07\x05Q\n\x05\f" +
		"\x05\x0E\x05T\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x05\x06[\n" +
		"\x06\x03\x07\x05\x07^\n\x07\x03\x07\x05\x07a\n\x07\x03\x07\x05\x07d\n" +
		"\x07\x03\x07\x05\x07g\n\x07\x03\x07\x05\x07j\n\x07\x03\x07\x05\x07m\n" +
		"\x07\x03\x07\x05\x07p\n\x07\x03\x07\x05\x07s\n\x07\x03\x07\x03\x07\x05" +
		"\x07w\n\x07\x03\x07\x03\x07\x03\b\x05\b|\n\b\x03\b\x05\b\x7F\n\b\x03\b" +
		"\x05\b\x82\n\b\x03\b\x05\b\x85\n\b\x03\b\x05\b\x88\n\b\x03\b\x05\b\x8B" +
		"\n\b\x03\b\x05\b\x8E\n\b\x03\b\x05\b\x91\n\b\x03\b\x03\b\x05\b\x95\n\b" +
		"\x03\b\x03\b\x03\b\x05\b\x9A\n\b\x03\t\x03\t\x03\t\x05\t\x9F\n\t\x03\t" +
		"\x03\t\x05\t\xA3\n\t\x05\t\xA5\n\t\x03\t\x03\t\x03\t\x03\t\x07\t\xAB\n" +
		"\t\f\t\x0E\t\xAE\v\t\x03\t\x03\t\x05\t\xB2\n\t\x03\t\x03\t\x05\t\xB6\n" +
		"\t\x03\t\x05\t\xB9\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xC0\n\t\f\t" +
		"\x0E\t\xC3\v\t\x05\t\xC5\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xCC\n" +
		"\t\f\t\x0E\t\xCF\v\t\x05\t\xD1\n\t\x03\n\x03\n\x05\n\xD5\n\n\x03\n\x03" +
		"\n\x05\n\xD9\n\n\x05\n\xDB\n\n\x03\n\x03\n\x05\n\xDF\n\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x07\v\xE8\n\v\f\v\x0E\v\xEB\v\v\x05\v\xED\n" +
		"\v\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xF4\n\f\x03\f\x03\f\x03\r\x03\r" +
		"\x03\r\x05\r\xFB\n\r\x03\x0E\x03\x0E\x03\x0E\x02\x02\x02\x0F\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x02\x03\x04\x02!\"\'\'\x02\u0127\x02\x1C\x03\x02\x02" +
		"\x02\x04$\x03\x02\x02\x02\x06,\x03\x02\x02\x02\b3\x03\x02\x02\x02\nZ\x03" +
		"\x02\x02\x02\f]\x03\x02\x02\x02\x0E{\x03\x02\x02\x02\x10\x9B\x03\x02\x02" +
		"\x02\x12\xDA\x03\x02\x02\x02\x14\xE2\x03\x02\x02\x02\x16\xEE\x03\x02\x02" +
		"\x02\x18\xF7\x03\x02\x02\x02\x1A\xFC\x03\x02\x02\x02\x1C\x1D\x07\x05\x02" +
		"\x02\x1D!\x05\x04\x03\x02\x1E \x05\x06\x04\x02\x1F\x1E\x03\x02\x02\x02" +
		" #\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\"\x03\x02\x02\x02\"\x03\x03\x02" +
		"\x02\x02#!\x03\x02\x02\x02$)\x07&\x02\x02%&\x07\v\x02\x02&(\x07&\x02\x02" +
		"\'%\x03\x02\x02\x02(+\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02" +
		"\x02*\x05\x03\x02\x02\x02+)\x03\x02\x02\x02,-\x05\b\x05\x02-\x07\x03\x02" +
		"\x02\x02.0\x07\x06\x02\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03\x02" +
		"\x02\x0214\x07\x07\x02\x0224\x07\b\x02\x023/\x03\x02\x02\x0232\x03\x02" +
		"\x02\x0245\x03\x02\x02\x025A\x07&\x02\x0267\x07\x0E\x02\x027<\x05\x14" +
		"\v\x0289\x07\n\x02\x029;\x05\x14\v\x02:8\x03\x02\x02\x02;>\x03\x02\x02" +
		"\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02=?\x03\x02\x02\x02><\x03\x02\x02" +
		"\x02?@\x07\x0E\x02\x02@B\x03\x02\x02\x02A6\x03\x02\x02\x02AB\x03\x02\x02" +
		"\x02BL\x03\x02\x02\x02CD\x07\t\x02\x02DI\x05\x1A\x0E\x02EF\x07\n\x02\x02" +
		"FH\x05\x1A\x0E\x02GE\x03\x02\x02\x02HK\x03\x02\x02\x02IG\x03\x02\x02\x02" +
		"IJ\x03\x02\x02\x02JM\x03\x02\x02\x02KI\x03\x02\x02\x02LC\x03\x02\x02\x02" +
		"LM\x03\x02\x02\x02MN\x03\x02\x02\x02NR\x07\f\x02\x02OQ\x05\n\x06\x02P" +
		"O\x03\x02\x02\x02QT\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02" +
		"SU\x03\x02\x02\x02TR\x03\x02\x02\x02UV\x07\r\x02\x02V\t\x03\x02\x02\x02" +
		"W[\x05\x10\t\x02X[\x05\f\x07\x02Y[\x05\x0E\b\x02ZW\x03\x02\x02\x02ZX\x03" +
		"\x02\x02\x02ZY\x03\x02\x02\x02[\v\x03\x02\x02\x02\\^\x07\x10\x02\x02]" +
		"\\\x03\x02\x02\x02]^\x03\x02\x02\x02^`\x03\x02\x02\x02_a\x07\x11\x02\x02" +
		"`_\x03\x02\x02\x02`a\x03\x02\x02\x02ac\x03\x02\x02\x02bd\x07\x12\x02\x02" +
		"cb\x03\x02\x02\x02cd\x03\x02\x02\x02df\x03\x02\x02\x02eg\x07\x13\x02\x02" +
		"fe\x03\x02\x02\x02fg\x03\x02\x02\x02gi\x03\x02\x02\x02hj\x07\x15\x02\x02" +
		"ih\x03\x02\x02\x02ij\x03\x02\x02\x02jl\x03\x02\x02\x02km\x07\x14\x02\x02" +
		"lk\x03\x02\x02\x02lm\x03\x02\x02\x02mo\x03\x02\x02\x02np\x07\x16\x02\x02" +
		"on\x03\x02\x02\x02op\x03\x02\x02\x02pr\x03\x02\x02\x02qs\x07\x17\x02\x02" +
		"rq\x03\x02\x02\x02rs\x03\x02\x02\x02st\x03\x02\x02\x02tv\x05\x1A\x0E\x02" +
		"uw\x05\x16\f\x02vu\x03\x02\x02\x02vw\x03\x02\x02\x02wx\x03\x02\x02\x02" +
		"xy\x07&\x02\x02y\r\x03\x02\x02\x02z|\x07\x18\x02\x02{z\x03\x02\x02\x02" +
		"{|\x03\x02\x02\x02|~\x03\x02\x02\x02}\x7F\x07\x10\x02\x02~}\x03\x02\x02" +
		"\x02~\x7F\x03\x02\x02\x02\x7F\x81\x03\x02\x02\x02\x80\x82\x07\x11\x02" +
		"\x02\x81\x80\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x84\x03\x02\x02" +
		"\x02\x83\x85\x07\x12\x02\x02\x84\x83\x03\x02\x02\x02\x84\x85\x03\x02\x02" +
		"\x02\x85\x87\x03\x02\x02\x02\x86\x88\x07\x13\x02\x02\x87\x86\x03\x02\x02" +
		"\x02\x87\x88\x03\x02\x02\x02\x88\x8A\x03\x02\x02\x02\x89\x8B\x07\x15\x02" +
		"\x02\x8A\x89\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8D\x03\x02\x02" +
		"\x02\x8C\x8E\x07\x14\x02\x02\x8D\x8C\x03\x02\x02\x02\x8D\x8E\x03\x02\x02" +
		"\x02\x8E\x90\x03\x02\x02\x02\x8F\x91\x07\x16\x02\x02\x90\x8F\x03\x02\x02" +
		"\x02\x90\x91\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x94\x05\x1A\x0E" +
		"\x02\x93\x95\x05\x16\f\x02\x94\x93\x03\x02\x02\x02\x94\x95\x03\x02\x02" +
		"\x02\x95\x96\x03\x02\x02\x02\x96\x99\x07&\x02\x02\x97\x98\x07\x19\x02" +
		"\x02\x98\x9A\x07&\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02" +
		"\x02\x9A\x0F\x03\x02\x02\x02\x9B\xA4\x07\x1A\x02\x02\x9C\x9E\x07\x10\x02" +
		"\x02\x9D\x9F\x07\x11\x02\x02\x9E\x9D\x03\x02\x02\x02\x9E\x9F\x03\x02\x02" +
		"\x02\x9F\xA5\x03\x02\x02\x02\xA0\xA2\x07\x11\x02\x02\xA1\xA3\x07\x10\x02" +
		"\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA5\x03\x02\x02" +
		"\x02\xA4\x9C\x03\x02\x02\x02\xA4\xA0\x03\x02\x02\x02\xA4\xA5\x03\x02\x02" +
		"\x02\xA5\xB1\x03\x02\x02\x02\xA6\xA7\x07\x0E\x02\x02\xA7\xAC\x05\x14\v" +
		"\x02\xA8\xA9\x07\n\x02\x02\xA9\xAB\x05\x14\v\x02\xAA\xA8\x03\x02\x02\x02" +
		"\xAB\xAE\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02" +
		"\xAD\xAF\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAF\xB0\x07\x0F\x02\x02" +
		"\xB0\xB2\x03\x02\x02\x02\xB1\xA6\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02" +
		"\xB2\xB5\x03\x02\x02\x02\xB3\xB6\x05\x1A\x0E\x02\xB4\xB6\x07\x1B\x02\x02" +
		"\xB5\xB3\x03\x02\x02\x02\xB5\xB4\x03\x02\x02\x02\xB6\xB8\x03\x02\x02\x02" +
		"\xB7\xB9\x05\x16\f\x02\xB8\xB7\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02" +
		"\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x07&\x02\x02\xBB\xC4\x07\x1C\x02\x02" +
		"\xBC\xC1\x05\x12\n\x02\xBD\xBE\x07\n\x02\x02\xBE\xC0\x05\x12\n\x02\xBF" +
		"\xBD\x03\x02\x02\x02\xC0\xC3\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1" +
		"\xC2\x03\x02\x02\x02\xC2\xC5\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4" +
		"\xBC\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6" +
		"\xD0\x07\x1D\x02\x02\xC7\xC8\x07\x1E\x02\x02\xC8\xCD\x05\x1A\x0E\x02\xC9" +
		"\xCA\x07\n\x02\x02\xCA\xCC\x05\x1A\x0E\x02\xCB\xC9\x03\x02\x02\x02\xCC" +
		"\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE" +
		"\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xC7\x03\x02\x02\x02\xD0" +
		"\xD1\x03\x02\x02\x02\xD1\x11\x03\x02\x02\x02\xD2\xD4\x07\x10\x02\x02\xD3" +
		"\xD5\x07\x11\x02\x02\xD4\xD3\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5" +
		"\xDB\x03\x02\x02\x02\xD6\xD8\x07\x11\x02\x02\xD7\xD9\x07\x10\x02\x02\xD8" +
		"\xD7\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDB\x03\x02\x02\x02\xDA" +
		"\xD2\x03\x02\x02\x02\xDA\xD6\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB" +
		"\xDC\x03\x02\x02\x02\xDC\xDE\x05\x1A\x0E\x02\xDD\xDF\x05\x16\f\x02\xDE" +
		"\xDD\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0" +
		"\xE1\x07&\x02\x02\xE1\x13\x03\x02\x02\x02\xE2\xEC\x07&\x02\x02\xE3\xE4" +
		"\x07\t\x02\x02\xE4\xE9\x05\x1A\x0E\x02\xE5\xE6\x07%\x02\x02\xE6\xE8\x05" +
		"\x1A\x0E\x02\xE7\xE5\x03\x02\x02\x02\xE8\xEB\x03\x02\x02\x02\xE9\xE7\x03" +
		"\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02\xEB\xE9\x03" +
		"\x02\x02\x02\xEC\xE3\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\x15\x03" +
		"\x02\x02\x02\xEE\xF3\x07\x1F\x02\x02\xEF\xF4\x07!\x02\x02\xF0\xF4\x07" +
		"\"\x02\x02\xF1\xF4\x07#\x02\x02\xF2\xF4\x05\x18\r\x02\xF3\xEF\x03\x02" +
		"\x02\x02\xF3\xF0\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF2\x03\x02" +
		"\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF6\x07 " +
		"\x02\x02\xF6\x17\x03\x02\x02\x02\xF7\xFA\x07\'\x02\x02\xF8\xF9\x07$\x02" +
		"\x02\xF9\xFB\t\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02" +
		"\x02\xFB\x19\x03\x02\x02\x02\xFC\xFD\x05\x04\x03\x02\xFD\x1B\x03\x02\x02" +
		"\x022!)/3<AILRZ]`cfilorv{~\x81\x84\x87\x8A\x8D\x90\x94\x99\x9E\xA2\xA4" +
		"\xAC\xB1\xB5\xB8\xC1\xC4\xCD\xD0\xD4\xD8\xDA\xDE\xE9\xEC\xF3\xFA";
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
	public xclass(): XclassContext {
		return this.getRuleContext(0, XclassContext);
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


