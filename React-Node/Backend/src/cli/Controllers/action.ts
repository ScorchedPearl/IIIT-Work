import fs from "fs";
import path from "path";

const tasksFile = path.join(__dirname, "tasks.json");

function loadTasks() {
  if (!fs.existsSync(tasksFile)) return [];     
  const data = fs.readFileSync(tasksFile);
  return JSON.parse(data.toString());
}

function saveTasks(tasks:any) {
  fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
}

function addTask(task:any) {
  const tasks = loadTasks();
  tasks.push({ id: Date.now(), task });
  saveTasks(tasks);
}

function listTasks() {
  return loadTasks();
}

function deleteTask(id:any) {
  let tasks = loadTasks();
  const initialLength = tasks.length;
  tasks = tasks.filter((t:any) => t.id !== id);
  saveTasks(tasks);
  return tasks.length < initialLength; 
}

export const taskHandler={addTask,listTasks,deleteTask};