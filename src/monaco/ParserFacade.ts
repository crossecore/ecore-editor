import {CommonTokenStream, CharStream, Token, Recognizer, RecognitionException,  CharStreams, Lexer, ANTLRErrorListener} from 'antlr4ts'
import {xcoreParser} from "xcore"
import {xcoreLexer} from "xcore"

class ParserErrorListener implements ANTLRErrorListener<Token> {
    syntaxError(recognizer:Recognizer<Token, any>, offendingSymbol:Token|undefined, line:number, charPositionInLine:number, msg:string, e:RecognitionException | undefined) {
        console.log("ERROR " + msg);
    }

}
class LexerErrorListener implements ANTLRErrorListener<number> {
    syntaxError(recognizer:Recognizer<number, any>, offendingSymbol:number|undefined, line:number, charPositionInLine:number, msg:string, e:RecognitionException | undefined) {
        console.log("ERROR " + msg);
    }

}

export function createLexer(input: string) {
    const chars = CharStreams.fromString(input)
    const lexer = new xcoreLexer(chars);

    return lexer;
}

export function getTokens(input: string) : Token[] {
    return createLexer(input).getAllTokens()
}

function createParser(input:string) {
    const lexer = createLexer(input);

    return createParserFromLexer(lexer);
}

function createParserFromLexer(lexer:Lexer) {
    const tokens = new CommonTokenStream(lexer);
    return new xcoreParser(tokens);
}

function parseTree(input:string) {
    const parser = createParser(input);

    return parser.xpackage()
}

export function parseTreeStr(input:string) {
    const lexer = createLexer(input);
    lexer.removeErrorListeners();
    lexer.addErrorListener(new LexerErrorListener());

    const parser = createParserFromLexer(lexer);
    parser.removeErrorListeners();
    parser.addErrorListener(new ParserErrorListener());

    const tree = parser.xpackage();

    return tree.toStringTree(parser.ruleNames);
}