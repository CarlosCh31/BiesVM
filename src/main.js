#!/usr/bin/env node

import antlr4 from 'antlr4';
import BiesASMLexer from '../gen/biesASMLexer.js';
import BiesASMParser from '../gen/biesASMParser.js';
import biesVM from './BiesVM.js'; // Máquina virtual
import fs from 'fs';

const filePath = process.argv[2];  // Archivo .basm como input

if (!filePath) {
    console.error('Provea un archivo .basm para correr.');
    process.exit(1);
}

function parseFile(filePath) {

    const content = fs.readFileSync(filePath, 'utf-8');

    const chars = new antlr4.InputStream(content);
    const lexer = new BiesASMLexer(chars);

    // Depurar los tokens generados por el lexer
    const tokens = new antlr4.CommonTokenStream(lexer);

    const parser = new BiesASMParser(tokens);
    parser.buildParseTrees = true;

    // Agregar mensaje de depuración para los errores en el parser
    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
            console.error(`Error de sintaxis en línea ${line}:${column}: ${msg}`);
        }
    });

    const tree = parser.program();

    return extractInstructions(tree);
}


function extractInstructions(tree) {
    const instructions = [];
    const functions = {};

    console.log("Recorriendo árbol...");

    if (tree.children) {
        tree.children.forEach(child => {
            console.log(`Tipo de nodo: ${child.constructor.name}`);

            if (child.constructor.name === 'StatementContext') {
                if (child.functionDeclaration()) {
                    const functionDecl = child.functionDeclaration();
                    const functionName = functionDecl.children[1].getText();
                    const body = [];
                    functionDecl.instructionBlock().instruction().forEach(instr => {
                        const command = instr.INSTRUCTION().getText();
                        const args = instr.arg().map(arg => {
                            const argText = arg.getText();
                            return isNaN(argText) ? argText : Number(argText);  // Convertir a número si es posible
                        });
                        console.log(`Instrucción en función ${functionName}: ${command}, args: ${args}`);
                        body.push([command, ...args]);
                    });
                    functions[functionName] = { body };
                } else if (child.instruction()) {
                    const instr = child.instruction();
                    const command = instr.INSTRUCTION().getText();
                    const args = instr.arg().map(arg => {
                        const argText = arg.getText();
                        return isNaN(argText) ? argText : Number(argText);  // Convertir a número si es posible
                    });
                    console.log(`Instrucción global: ${command}, args: ${args}`);
                    instructions.push([command, ...args]);
                }
            }
        });
    }

    return { instructions, functions };
}



const { instructions, functions } = parseFile(filePath);

const vm = new biesVM();
vm.functions = functions;
vm.execute(instructions);
