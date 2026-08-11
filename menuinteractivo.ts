import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function main() {
  const rl = readline.createInterface({ input, output });

  // 2. Arreglo tipado para las tareas
  const tareas: string[] = [];
  let continuar: boolean = true;

  // 4. Menú interactivo con ciclo
  while (continuar) {
    console.log('\n--- MENÚ DE TAREAS ---');
    console.log('1. Agregar tarea');
    console.log('2. Eliminar última tarea');
    console.log('3. Listar tareas');
    console.log('4. Salir');

    const opcion = await rl.question('Selecciona una opción: ');

    // 5. Opciones con switch
    switch (opcion.trim()) {
      case '1': {
        const nuevaTarea = await rl.question('Ingresa el título de la tarea: ');
        if (nuevaTarea.trim().length > 0) {
          tareas.push(nuevaTarea.trim());
          console.log(`✓ Tarea "${nuevaTarea.trim()}" agregada.`);
        } else {
          console.log('⚠️ El título no puede estar vacío.');
        }
        break;
      }

      case '2': {
        if (tareas.length === 0) {
          console.log('⚠️ No hay tareas para eliminar.');
        } else {
          const tareaEliminada = tareas.pop();
          console.log(`✓ Tarea eliminada: "${tareaEliminada}"`);
        }
        break;
      }

      case '3': {
        if (tareas.length === 0) {
          console.log('ℹ️ La lista de tareas está vacía.');
        } else {
          console.log('\nLista de tareas:');
          for (let i = 0; i < tareas.length; i++) {
            console.log(`${i + 1}. ${tareas[i]}`);
          }
        }
        break;
      }

      case '4': {
        console.log('¡Hasta luego!');
        continuar = false;
        break;
      }

      default: {
        console.log('⚠️ Opción no válida. Intenta de nuevo.');
        break;
      }
    }
  }

  rl.close();
}

main();