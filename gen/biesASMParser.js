// Generated from grammar/biesASM.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import biesASMListener from './biesASMListener.js';
const serializedATN = [4,1,14,48,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,4,0,14,8,0,11,0,12,0,15,1,1,1,1,3,1,20,8,1,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,3,4,3,31,8,3,11,3,12,3,32,1,3,1,3,1,3,1,4,1,4,4,4,40,8,4,
11,4,12,4,41,3,4,44,8,4,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,1,2,0,5,8,10,13,
46,0,13,1,0,0,0,2,19,1,0,0,0,4,21,1,0,0,0,6,30,1,0,0,0,8,37,1,0,0,0,10,45,
1,0,0,0,12,14,3,2,1,0,13,12,1,0,0,0,14,15,1,0,0,0,15,13,1,0,0,0,15,16,1,
0,0,0,16,1,1,0,0,0,17,20,3,4,2,0,18,20,3,8,4,0,19,17,1,0,0,0,19,18,1,0,0,
0,20,3,1,0,0,0,21,22,5,1,0,0,22,23,5,10,0,0,23,24,5,2,0,0,24,25,5,12,0,0,
25,26,5,3,0,0,26,27,5,10,0,0,27,28,3,6,3,0,28,5,1,0,0,0,29,31,3,8,4,0,30,
29,1,0,0,0,31,32,1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,34,1,0,0,0,34,35,
5,4,0,0,35,36,5,10,0,0,36,7,1,0,0,0,37,43,5,9,0,0,38,40,3,10,5,0,39,38,1,
0,0,0,40,41,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,44,1,0,0,0,43,39,1,0,
0,0,43,44,1,0,0,0,44,9,1,0,0,0,45,46,7,0,0,0,46,11,1,0,0,0,5,15,19,32,41,
43];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesASMParser extends antlr4.Parser {

    static grammarFileName = "biesASM.g4";
    static literalNames = [ null, "'$FUN'", "'args:'", "'parent:'", "'$END'", 
                            "'[]'", "':'", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "INSTRUCTION", "ARG", "ID", "INT", "STRING", 
                             "WS" ];
    static ruleNames = [ "program", "statement", "functionDeclaration", 
                         "instructionBlock", "instruction", "arg" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesASMParser.ruleNames;
        this.literalNames = biesASMParser.literalNames;
        this.symbolicNames = biesASMParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, biesASMParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 12;
	            this.statement();
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || _la===9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, biesASMParser.RULE_statement);
	    try {
	        this.state = 19;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 17;
	            this.functionDeclaration();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 18;
	            this.instruction();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, biesASMParser.RULE_functionDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(biesASMParser.T__0);
	        this.state = 22;
	        this.match(biesASMParser.ARG);
	        this.state = 23;
	        this.match(biesASMParser.T__1);
	        this.state = 24;
	        this.match(biesASMParser.INT);
	        this.state = 25;
	        this.match(biesASMParser.T__2);
	        this.state = 26;
	        this.match(biesASMParser.ARG);
	        this.state = 27;
	        this.instructionBlock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instructionBlock() {
	    let localctx = new InstructionBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, biesASMParser.RULE_instructionBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 29;
	            this.instruction();
	            this.state = 32; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===9);
	        this.state = 34;
	        this.match(biesASMParser.T__3);
	        this.state = 35;
	        this.match(biesASMParser.ARG);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, biesASMParser.RULE_instruction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(biesASMParser.INSTRUCTION);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 15840) !== 0)) {
	            this.state = 39; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 38;
	                this.arg();
	                this.state = 41; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 15840) !== 0));
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, biesASMParser.RULE_arg);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 15840) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

biesASMParser.EOF = antlr4.Token.EOF;
biesASMParser.T__0 = 1;
biesASMParser.T__1 = 2;
biesASMParser.T__2 = 3;
biesASMParser.T__3 = 4;
biesASMParser.T__4 = 5;
biesASMParser.T__5 = 6;
biesASMParser.T__6 = 7;
biesASMParser.T__7 = 8;
biesASMParser.INSTRUCTION = 9;
biesASMParser.ARG = 10;
biesASMParser.ID = 11;
biesASMParser.INT = 12;
biesASMParser.STRING = 13;
biesASMParser.WS = 14;

biesASMParser.RULE_program = 0;
biesASMParser.RULE_statement = 1;
biesASMParser.RULE_functionDeclaration = 2;
biesASMParser.RULE_instructionBlock = 3;
biesASMParser.RULE_instruction = 4;
biesASMParser.RULE_arg = 5;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesASMParser.RULE_program;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesASMParser.RULE_statement;
    }

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	instruction() {
	    return this.getTypedRuleContext(InstructionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.exitStatement(this);
		}
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesASMParser.RULE_functionDeclaration;
    }

	ARG = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesASMParser.ARG);
	    } else {
	        return this.getToken(biesASMParser.ARG, i);
	    }
	};


	INT() {
	    return this.getToken(biesASMParser.INT, 0);
	};

	instructionBlock() {
	    return this.getTypedRuleContext(InstructionBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}


}



class InstructionBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesASMParser.RULE_instructionBlock;
    }

	ARG() {
	    return this.getToken(biesASMParser.ARG, 0);
	};

	instruction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstructionContext);
	    } else {
	        return this.getTypedRuleContext(InstructionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.enterInstructionBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.exitInstructionBlock(this);
		}
	}


}



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesASMParser.RULE_instruction;
    }

	INSTRUCTION() {
	    return this.getToken(biesASMParser.INSTRUCTION, 0);
	};

	arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgContext);
	    } else {
	        return this.getTypedRuleContext(ArgContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.exitInstruction(this);
		}
	}


}



class ArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesASMParser.RULE_arg;
    }

	INT() {
	    return this.getToken(biesASMParser.INT, 0);
	};

	STRING() {
	    return this.getToken(biesASMParser.STRING, 0);
	};

	ARG() {
	    return this.getToken(biesASMParser.ARG, 0);
	};

	ID() {
	    return this.getToken(biesASMParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.enterArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.exitArg(this);
		}
	}


}




biesASMParser.ProgramContext = ProgramContext; 
biesASMParser.StatementContext = StatementContext; 
biesASMParser.FunctionDeclarationContext = FunctionDeclarationContext; 
biesASMParser.InstructionBlockContext = InstructionBlockContext; 
biesASMParser.InstructionContext = InstructionContext; 
biesASMParser.ArgContext = ArgContext; 
