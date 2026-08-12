import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// 2. Interface Task
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// 3. Arreglo principal y contador global para IDs
const tasks: Task[] = [];
let idCounter = 1;

const rl = readline.createInterface({ input, output });

// 4. Arrow functions para cada acción del menú
const addTask = (title: string): void => {
  const newTask: Task = {
    id: idCounter++,
    title: title.trim(),
    completed: false
  };
  tasks.push(newTask);
  console.log(`\nTask "${newTask.title}" added with ID: ${newTask.id}`);
};

const listTasks = (): void => {
  if (tasks.length === 0) {
    console.log('\nNo tasks available.');
    return;
  }

  console.log('\n--- Task List ---');
  tasks.forEach((task) => {
    const status = task.completed ? 'completed' : 'pending';
    console.log(`[${task.id}] ${task.title} - ${status}`);
  });
};

const removeTask = (): void => {
  const removedTask = tasks.pop();
  if (removedTask) {
    console.log(`\nRemoved task: "${removedTask.title}" (ID: ${removedTask.id})`);
  } else {
    console.log('\nNo tasks to remove.');
  }
};

// Ciclo principal del menú
const main = async () => {
  let running = true;

  while (running) {
    console.log('\n--- MENU ---');
    console.log('1. Add task');
    console.log('2. List tasks');
    console.log('3. Remove last task');
    console.log('4. Exit');

    const option = await rl.question('Select an option: ');

    switch (option.trim()) {
      case '1': {
        const title = await rl.question('Enter task title: ');
        if (title.trim()) {
          addTask(title);
        } else {
          console.log('\nTask title cannot be empty.');
        }
        break;
      }
      case '2':
        listTasks();
        break;
      case '3':
        removeTask();
        break;
      case '4':
        running = false;
        console.log('\nExiting application...');
        break;
      default:
        console.log('\nInvalid option. Please try again.');
    }
  }

  rl.close();
};

main();