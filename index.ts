import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇

let systemName: string = "Panel de Control";
let version: number = 3.0;
let userName: string = "David Salinas";


console.log("=================================================");
console.log(systemName + " V " + version + "..1.2." );
console.log("Bienvenido al Nuevo Sistema " + userName + "!!!!");
console.log("================================================");



// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();