import {CommonTokenStream, Token, Recognizer, RecognitionException,  Lexer, ANTLRErrorListener, ANTLRInputStream, DefaultErrorStrategy, Parser, ConsoleErrorListener} from 'antlr4ts'
import {XcoreParser} from "./XcoreParser"
import {XcoreLexer} from "./XcoreLexer"

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
    
    const chars = new ANTLRInputStream(input)

    const lexer = new XcoreLexer(chars);
    

    return lexer;

    
}

export function getTokens(input: string) : Token[] {
    return createLexer(input).getAllTokens()
}

export function createParser(input:string) {
    const lexer = createLexer(input);

    return createParserFromLexer(lexer);
}

function createParserFromLexer(lexer:Lexer) {
    const tokens = new CommonTokenStream(lexer);
    return new XcoreParser(tokens);
}

function parseTree(input:string) {
    const parser = createParser(input);

    console.log(parser.xpackage(), "parser.xpackage")

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
    console.log(tree, "parser.xpackage")

    return tree.toStringTree(parser.ruleNames);
}


class CalcErrorStrategy extends DefaultErrorStrategy {

    reportUnwantedToken(recognizer: Parser) {
        return super.reportUnwantedToken(recognizer);
    }

   singleTokenDeletion(recognizer: Parser) {
       
       var nextTokenType = recognizer.inputStream.LA(2)
       if (recognizer.inputStream.LA(1) == XcoreParser.NL) {
           return undefined;
       }
       var expecting = this.getExpectedTokens(recognizer);
       if (expecting.contains(nextTokenType)) {
           this.reportUnwantedToken(recognizer);
           recognizer.consume(); // simply delete extra token
           // we want to return the token we're actually matching
           var matchedSymbol = recognizer.currentToken;
           this.reportMatch(recognizer); // we know current token is correct
           return matchedSymbol;
       } else {
           return undefined;
       }
   }
   getExpectedTokens = function(recognizer:Parser) {
       return recognizer.getExpectedTokens();
   };

   reportMatch = (recognizer:Parser)=> {
       this.endErrorCondition(recognizer);
   };

}

export function validate(input:string) : Error[] {
   let errors : Error[] = [];

   const lexer = createLexer(input);
   lexer.removeErrorListeners();
   lexer.addErrorListener(new ConsoleErrorListener());

   const parser = createParserFromLexer(lexer);
   parser.removeErrorListeners();
   parser.addErrorListener(new ConsoleErrorListener());
   parser.errorHandler =new CalcErrorStrategy(); 

   const tree = parser.xpackage()
   console.log(tree, "here")
   return errors;
}
