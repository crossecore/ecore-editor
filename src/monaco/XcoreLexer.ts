// Generated from c:\data\repos\ecore-editor\XcoreLexer.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class XcoreLexer extends Lexer {
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
	public static readonly WS_CHANNEL = 2;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "WS_CHANNEL",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"WS", "NL", "Package", "Abstract", "Class", "Interface", "Extends", "Comma", 
		"Dot", "CurlyBraceOpen", "CurlyBraceClose", "AngleBraceOpen", "AngleBraceClose", 
		"Unordered", "Unique", "Readonly", "Transient", "Unsettable", "Volatile", 
		"Derived", "Idattr", "Contains", "Opposite", "Operation", "Void", "BraceOpen", 
		"BraceClose", "Throws", "SquareBraceOpen", "SquareBraceClose", "Questionmark", 
		"Star", "Plus", "Dotdot", "Ampersand", "ID", "INT",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XcoreLexer._LITERAL_NAMES, XcoreLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XcoreLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(XcoreLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "XcoreLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return XcoreLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return XcoreLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return XcoreLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return XcoreLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\'\u0116\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x06\x02O\n\x02\r\x02\x0E\x02" +
		"P\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03X\n\x03\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03" +
		"\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
		"\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#" +
		"\x03#\x03#\x03$\x03$\x03%\x05%\u0109\n%\x03%\x03%\x07%\u010D\n%\f%\x0E" +
		"%\u0110\v%\x03&\x06&\u0113\n&\r&\x0E&\u0114\x02\x02\x02\'\x03\x02\x03" +
		"\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02" +
		"\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F" +
		"\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18" +
		"/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 " +
		"?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'\x03\x02\x06\x04\x02\"\"v" +
		"v\x04\x02pptt\x05\x02C\\aac|\x06\x022;C\\aac|\x02\u011A\x02\x03\x03\x02" +
		"\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
		"\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
		"\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02" +
		"\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02" +
		"\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02" +
		"\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02" +
		")\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
		"\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02" +
		"\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03" +
		"\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02" +
		"\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02" +
		"K\x03\x02\x02\x02\x03N\x03\x02\x02\x02\x05W\x03\x02\x02\x02\x07[\x03\x02" +
		"\x02\x02\tc\x03\x02\x02\x02\vl\x03\x02\x02\x02\rr\x03\x02\x02\x02\x0F" +
		"|\x03\x02\x02\x02\x11\x84\x03\x02\x02\x02\x13\x86\x03\x02\x02\x02\x15" +
		"\x88\x03\x02\x02\x02\x17\x8A\x03\x02\x02\x02\x19\x8C\x03\x02\x02\x02\x1B" +
		"\x8E\x03\x02\x02\x02\x1D\x90\x03\x02\x02\x02\x1F\x9A\x03\x02\x02\x02!" +
		"\xA1\x03\x02\x02\x02#\xAA\x03\x02\x02\x02%\xB4\x03\x02\x02\x02\'\xBF\x03" +
		"\x02\x02\x02)\xC8\x03\x02\x02\x02+\xD0\x03\x02\x02\x02-\xD3\x03\x02\x02" +
		"\x02/\xDC\x03\x02\x02\x021\xE5\x03\x02\x02\x023\xE8\x03\x02\x02\x025\xED" +
		"\x03\x02\x02\x027\xEF\x03\x02\x02\x029\xF1\x03\x02\x02\x02;\xF8\x03\x02" +
		"\x02\x02=\xFA\x03\x02\x02\x02?\xFC\x03\x02\x02\x02A\xFE\x03\x02\x02\x02" +
		"C\u0100\x03\x02\x02\x02E\u0102\x03\x02\x02\x02G\u0105\x03\x02\x02\x02" +
		"I\u0108\x03\x02\x02\x02K\u0112\x03\x02\x02\x02MO\t\x02\x02\x02NM\x03\x02" +
		"\x02\x02OP\x03\x02\x02\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02QR\x03\x02" +
		"\x02\x02RS\b\x02\x02\x02S\x04\x03\x02\x02\x02TU\x07t\x02\x02UX\x07p\x02" +
		"\x02VX\t\x03\x02\x02WT\x03\x02\x02\x02WV\x03\x02\x02\x02XY\x03\x02\x02" +
		"\x02YZ\b\x03\x02\x02Z\x06\x03\x02\x02\x02[\\\x07r\x02\x02\\]\x07c\x02" +
		"\x02]^\x07e\x02\x02^_\x07m\x02\x02_`\x07c\x02\x02`a\x07i\x02\x02ab\x07" +
		"g\x02\x02b\b\x03\x02\x02\x02cd\x07c\x02\x02de\x07d\x02\x02ef\x07u\x02" +
		"\x02fg\x07v\x02\x02gh\x07t\x02\x02hi\x07c\x02\x02ij\x07e\x02\x02jk\x07" +
		"v\x02\x02k\n\x03\x02\x02\x02lm\x07e\x02\x02mn\x07n\x02\x02no\x07c\x02" +
		"\x02op\x07u\x02\x02pq\x07u\x02\x02q\f\x03\x02\x02\x02rs\x07k\x02\x02s" +
		"t\x07p\x02\x02tu\x07v\x02\x02uv\x07g\x02\x02vw\x07t\x02\x02wx\x07h\x02" +
		"\x02xy\x07c\x02\x02yz\x07e\x02\x02z{\x07g\x02\x02{\x0E\x03\x02\x02\x02" +
		"|}\x07g\x02\x02}~\x07z\x02\x02~\x7F\x07v\x02\x02\x7F\x80\x07g\x02\x02" +
		"\x80\x81\x07p\x02\x02\x81\x82\x07f\x02\x02\x82\x83\x07u\x02\x02\x83\x10" +
		"\x03\x02\x02\x02\x84\x85\x07.\x02\x02\x85\x12\x03\x02\x02\x02\x86\x87" +
		"\x070\x02\x02\x87\x14\x03\x02\x02\x02\x88\x89\x07}\x02\x02\x89\x16\x03" +
		"\x02\x02\x02\x8A\x8B\x07\x7F\x02\x02\x8B\x18\x03\x02\x02\x02\x8C\x8D\x07" +
		">\x02\x02\x8D\x1A\x03\x02\x02\x02\x8E\x8F\x07@\x02\x02\x8F\x1C\x03\x02" +
		"\x02\x02\x90\x91\x07w\x02\x02\x91\x92\x07p\x02\x02\x92\x93\x07q\x02\x02" +
		"\x93\x94\x07t\x02\x02\x94\x95\x07f\x02\x02\x95\x96\x07g\x02\x02\x96\x97" +
		"\x07t\x02\x02\x97\x98\x07g\x02\x02\x98\x99\x07f\x02\x02\x99\x1E\x03\x02" +
		"\x02\x02\x9A\x9B\x07w\x02\x02\x9B\x9C\x07p\x02\x02\x9C\x9D\x07k\x02\x02" +
		"\x9D\x9E\x07s\x02\x02\x9E\x9F\x07w\x02\x02\x9F\xA0\x07g\x02\x02\xA0 \x03" +
		"\x02\x02\x02\xA1\xA2\x07t\x02\x02\xA2\xA3\x07g\x02\x02\xA3\xA4\x07c\x02" +
		"\x02\xA4\xA5\x07f\x02\x02\xA5\xA6\x07q\x02\x02\xA6\xA7\x07p\x02\x02\xA7" +
		"\xA8\x07n\x02\x02\xA8\xA9\x07{\x02\x02\xA9\"\x03\x02\x02\x02\xAA\xAB\x07" +
		"v\x02\x02\xAB\xAC\x07t\x02\x02\xAC\xAD\x07c\x02\x02\xAD\xAE\x07p\x02\x02" +
		"\xAE\xAF\x07u\x02\x02\xAF\xB0\x07k\x02\x02\xB0\xB1\x07g\x02\x02\xB1\xB2" +
		"\x07p\x02\x02\xB2\xB3\x07v\x02\x02\xB3$\x03\x02\x02\x02\xB4\xB5\x07w\x02" +
		"\x02\xB5\xB6\x07p\x02\x02\xB6\xB7\x07u\x02\x02\xB7\xB8\x07g\x02\x02\xB8" +
		"\xB9\x07v\x02\x02\xB9\xBA\x07v\x02\x02\xBA\xBB\x07c\x02\x02\xBB\xBC\x07" +
		"d\x02\x02\xBC\xBD\x07n\x02\x02\xBD\xBE\x07g\x02\x02\xBE&\x03\x02\x02\x02" +
		"\xBF\xC0\x07x\x02\x02\xC0\xC1\x07q\x02\x02\xC1\xC2\x07n\x02\x02\xC2\xC3" +
		"\x07c\x02\x02\xC3\xC4\x07v\x02\x02\xC4\xC5\x07k\x02\x02\xC5\xC6\x07n\x02" +
		"\x02\xC6\xC7\x07g\x02\x02\xC7(\x03\x02\x02\x02\xC8\xC9\x07f\x02\x02\xC9" +
		"\xCA\x07g\x02\x02\xCA\xCB\x07t\x02\x02\xCB\xCC\x07k\x02\x02\xCC\xCD\x07" +
		"x\x02\x02\xCD\xCE\x07g\x02\x02\xCE\xCF\x07f\x02\x02\xCF*\x03\x02\x02\x02" +
		"\xD0\xD1\x07k\x02\x02\xD1\xD2\x07f\x02\x02\xD2,\x03\x02\x02\x02\xD3\xD4" +
		"\x07e\x02\x02\xD4\xD5\x07q\x02\x02\xD5\xD6\x07p\x02\x02\xD6\xD7\x07v\x02" +
		"\x02\xD7\xD8\x07c\x02\x02\xD8\xD9\x07k\x02\x02\xD9\xDA\x07p\x02\x02\xDA" +
		"\xDB\x07u\x02\x02\xDB.\x03\x02\x02\x02\xDC\xDD\x07q\x02\x02\xDD\xDE\x07" +
		"r\x02\x02\xDE\xDF\x07r\x02\x02\xDF\xE0\x07q\x02\x02\xE0\xE1\x07u\x02\x02" +
		"\xE1\xE2\x07k\x02\x02\xE2\xE3\x07v\x02\x02\xE3\xE4\x07g\x02\x02\xE40\x03" +
		"\x02\x02\x02\xE5\xE6\x07q\x02\x02\xE6\xE7\x07r\x02\x02\xE72\x03\x02\x02" +
		"\x02\xE8\xE9\x07x\x02\x02\xE9\xEA\x07q\x02\x02\xEA\xEB\x07k\x02\x02\xEB" +
		"\xEC\x07f\x02\x02\xEC4\x03\x02\x02\x02\xED\xEE\x07*\x02\x02\xEE6\x03\x02" +
		"\x02\x02\xEF\xF0\x07+\x02\x02\xF08\x03\x02\x02\x02\xF1\xF2\x07v\x02\x02" +
		"\xF2\xF3\x07j\x02\x02\xF3\xF4\x07t\x02\x02\xF4\xF5\x07q\x02\x02\xF5\xF6" +
		"\x07y\x02\x02\xF6\xF7\x07u\x02\x02\xF7:\x03\x02\x02\x02\xF8\xF9\x07]\x02" +
		"\x02\xF9<\x03\x02\x02\x02\xFA\xFB\x07_\x02\x02\xFB>\x03\x02\x02\x02\xFC" +
		"\xFD\x07A\x02\x02\xFD@\x03\x02\x02\x02\xFE\xFF\x07,\x02\x02\xFFB\x03\x02" +
		"\x02\x02\u0100\u0101\x07-\x02\x02\u0101D\x03\x02\x02\x02\u0102\u0103\x07" +
		"0\x02\x02\u0103\u0104\x070\x02\x02\u0104F\x03\x02\x02\x02\u0105\u0106" +
		"\x07(\x02\x02\u0106H\x03\x02\x02\x02\u0107\u0109\x07`\x02\x02\u0108\u0107" +
		"\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02" +
		"\u010A\u010E\t\x04\x02\x02\u010B\u010D\t\x05\x02\x02\u010C\u010B\x03\x02" +
		"\x02\x02\u010D\u0110\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010E" +
		"\u010F\x03\x02\x02\x02\u010FJ\x03\x02\x02\x02\u0110\u010E\x03\x02\x02" +
		"\x02\u0111\u0113\x042;\x02\u0112\u0111\x03\x02\x02\x02\u0113\u0114\x03" +
		"\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115" +
		"L\x03\x02\x02\x02\b\x02PW\u0108\u010E\u0114\x03\x02\x04\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XcoreLexer.__ATN) {
			XcoreLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XcoreLexer._serializedATN));
		}

		return XcoreLexer.__ATN;
	}

}

