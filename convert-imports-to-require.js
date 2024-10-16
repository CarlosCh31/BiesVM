const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'gen');

// Leer todos los archivos en el directorio
fs.readdir(directory, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        const filePath = path.join(directory, file);

        // Leer el contenido del archivo
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file ${filePath}:`, err);
                return;
            }

            // Reemplazar 'import antlr4 from' con un solo require
            let modifiedData = data.replace(/import antlr4 from 'antlr4';/g, `
const antlr4 = require('antlr4');
`);

            // Buscar la declaración de la clase y las asignaciones a la clase
            const classMatch = modifiedData.match(/class\s+([a-zA-Z0-9_]+)\s+extends\s+antlr4\.Lexer\s*{/);
            const className = classMatch ? classMatch[1] : null;

            if (className) {
                // Buscar las líneas que asignan propiedades a la clase
                const classAssignmentsRegex = new RegExp(`(${className}\\.[a-zA-Z0-9_]+\\s*=\\s*[^;]+;\\s*)`, 'g');
                const assignments = modifiedData.match(classAssignmentsRegex);

                if (assignments) {
                    // Eliminar las asignaciones de su posición original
                    modifiedData = modifiedData.replace(classAssignmentsRegex, '');

                    // Colocar las asignaciones al final del archivo
                    modifiedData += '\n' + assignments.join('\n');
                }

                // Reemplazar 'export default' con 'module.exports ='
                modifiedData = modifiedData.replace(/export default class ([a-zA-Z0-9_]+)/g, "module.exports = class $1");

                // Escribir el contenido modificado de nuevo en el archivo
                fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
                    if (err) {
                        console.error(`Error writing file ${filePath}:`, err);
                    } else {
                        console.log(`Successfully processed imports/exports and class assignments in ${file}`);
                    }
                });
            } else {
                console.log(`No class declaration found in ${file}`);
            }
        });
    });
});
