

lexer grammar XcoreLexer;

channels { WS_CHANNEL }
WS:[t]+ -> channel(WS_CHANNEL);
NL:('rn' | 'r' | 'n');
Package:'package';
Abstract:'abstract';
Class:'class';
Interface:'interface';
Extends:'extends';
Comma:',';
Dot:'.';
CurlyBraceOpen:'{';
CurlyBraceClose:'}';
AngleBraceOpen:'<';
AngleBraceClose:'>';
Unordered:'unordered';
Unique:'unique';
Readonly:'readonly';
Transient:'transient';
Unsettable:'unsettable';
Volatile:'volatile';
Derived:'derived';
Idattr:'id';
Contains:'contains';
Refers:'refers';
Opposite:'opposite';
Operation:'op';
Void:'void';
BraceOpen:'(';
BraceClose:')';
Throws:'throws';
SquareBraceOpen:'[';
SquareBraceClose:']';
Questionmark:'?';
Star:'*';
Plus:'+';
Minus:'-';
Dotdot:'..';
Ampersand:'&';
Enum:'enum';
As:'as';
Equal:'=';



ID:'^'?('a'..'z'|'A'..'Z'|'_')('a'..'z'|'A'..'Z'|'_'|'0'..'9')*;

INT:('0'..'9')+;

STRING:'"' ( '\\'('b'|'t'|'n'|'f'|'r'|'u'|'"'|'\\') | ~('\\'|'"') )* '"';
    //"'" ( '\\'('b'|'t'|'n'|'f'|'r'|'u'|'"'|"'"|'\\') | !('\\'|"'") )* "'";


