

parser grammar XcoreParser;
options { tokenVocab=XcoreLexer; } 
xpackage:
	Package
	qualifiedname
	(xclassifier)*
;
qualifiedname: ID (Dot ID)*;

xclassifier:
	xclass 
;


xclass:
	((Abstract? Class) | Interface) ID
	(AngleBraceOpen xtypeparameter (Comma xtypeparameter)* AngleBraceOpen)?
	(Extends xgenerictype (Comma xgenerictype)*)?
	CurlyBraceOpen
	   (xmember)*
	CurlyBraceClose
;

xmember:
	xoperation |
	xattribute |
	xreference
;


xattribute:
	(
	  Unordered?
	  Unique?
	  Readonly?
	  Transient?
	  Volatile?
	  Unsettable?
	  Derived?
	  Idattr?
	)
    xgenerictype xmultiplicity?
    ID
;
xreference:
	(
	  Contains?
	  Unordered?
	  Unique? 
	  Readonly? 
	  Transient?
	  Volatile?
	  Unsettable?
	  Derived?
	)
	xgenerictype
	xmultiplicity?
    ID
    (
      Opposite ID
    )?
;

xoperation:
	Operation
	(
	  Unordered Unique? |
	  Unique Unordered?
	)?
	(AngleBraceOpen xtypeparameter (Comma xtypeparameter)* AngleBraceClose)?
	(xgenerictype | Void)
	xmultiplicity?
	ID
	BraceOpen (xparameter (Comma xparameter)*)? BraceClose
	(Throws xgenerictype (Comma xgenerictype)*)?
	
;

xparameter:
	(
	  Unordered Unique? |
	  Unique Unordered?
	)?
    xgenerictype
    xmultiplicity?
    ID
;

xtypeparameter :
	ID (Extends xgenerictype (Ampersand xgenerictype)*)?
;

xmultiplicity:
	SquareBraceOpen
	(Questionmark | Star | Plus | xrange)?
	SquareBraceClose
;

xrange:
	(INT (Dotdot (INT | Questionmark | Star))?)
;

xgenerictype:
  qualifiedname
;
