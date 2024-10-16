import InstructionFactory from './InstructionFactory.js';


class biesVM {
    constructor() {
        this.stack = [];
        this.scope = [];
        this.context = {pile: [], pc: 0};
        this.code = [];
        this.functions = {};
        this.instructionFactory = new InstructionFactory();
    }

    execute(instructions) {
        this.code = instructions;

        while (this.context.pc < this.code.length) {
            const currentInstruction = this.code[this.context.pc];
            console.log("Instrucción actual: ",currentInstruction);
            console.log("Pila antes: ", this.stack);
            this.context.pc++;



            if (!Array.isArray(currentInstruction)) {
                throw new Error(`Invalid instruction format: ${currentInstruction}`);
            }

            const [instruction, ...args] = currentInstruction;

           const instructionInstance = this.instructionFactory.createInstruction(instruction);
           instructionInstance.execute(this, args);
           console.log("Pila después: ",this.stack);
           console.log("Contador de programa: ", this.context.pc);
        }
    }
}

export default biesVM;
