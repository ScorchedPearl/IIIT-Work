"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskHandler = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const tasksFile = path_1.default.join(__dirname, "tasks.json");
function loadTasks() {
    if (!fs_1.default.existsSync(tasksFile))
        return [];
    const data = fs_1.default.readFileSync(tasksFile);
    return JSON.parse(data.toString());
}
function saveTasks(tasks) {
    fs_1.default.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
}
function addTask(task) {
    const tasks = loadTasks();
    tasks.push({ id: Date.now(), task });
    saveTasks(tasks);
}
function listTasks() {
    return loadTasks();
}
function deleteTask(id) {
    let tasks = loadTasks();
    const initialLength = tasks.length;
    tasks = tasks.filter((t) => t.id !== id);
    saveTasks(tasks);
    return tasks.length < initialLength;
}
exports.taskHandler = { addTask, listTasks, deleteTask };
