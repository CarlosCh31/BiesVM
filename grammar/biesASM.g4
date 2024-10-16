grammar biesASM;

// Reglas sintácticas (Parser rules)
program             : statement+ ;
statement           : functionDeclaration
                    | instruction ;

functionDeclaration : '$FUN' ARG 'args:' INT 'parent:' ARG instructionBlock ;

instructionBlock    : instruction+ '$END' ARG ;

instruction         : INSTRUCTION (arg+)? ;

arg                 : INT
                    | STRING
                    | ARG               // Reconoce argumentos que comienzan con $
                    | ID
                    | '[]'              // Reconoce listas vacías
                    | ':'               // Reconoce el carácter ':'
                    | '[' | ']'         // Reconoce corchetes
                    ;

// Reglas léxicas (Lexer rules)
INSTRUCTION         : 'INI'
                    | 'HLT'
                    | 'POP'
                    | 'SWP'
                    | 'LDV'
                    | 'BST'
                    | 'BLD'
                    | 'ADD'
                    | 'SUB'
                    | 'MUL'
                    | 'DIV'
                    | 'NEG'
                    | 'SGN'
                    | 'EQ'
                    | 'GT'
                    | 'GTE'
                    | 'LT'
                    | 'LTE'
                    | 'AND'
                    | 'OR'
                    | 'XOR'
                    | 'NOT'
                    | 'SNT'
                    | 'STK'
                    | 'SRK'
                    | 'CAT'
                    | 'TOS'
                    | 'LNT'
                    | 'LIN'
                    | 'LTK'
                    | 'LRK'
                    | 'TOL'
                    | 'NOP'
                    | 'BR'
                    | 'BT'
                    | 'BF'
                    | 'LDF'
                    | 'APP'
                    | 'RET'
                    | 'CST'
                    | 'INO'
                    | 'PRN' ;

ARG                 : '$' INT | '$' ID ;  // Reconoce $ seguido de INT o ID

ID                  : [a-zA-Z_][a-zA-Z_0-9]* ;
INT                 : '-'?[0-9]+ ;
STRING              : '"' .*? '"' ;
WS                  : [ \t\r\n]+ -> skip ;
