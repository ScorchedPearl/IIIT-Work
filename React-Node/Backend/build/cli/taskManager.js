#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
const action_1 = require("./Controllers/action");
const ora_1 = __importDefault(require("ora"));
commander_1.program
    .name("taskManager")
    .description("to create todos")
    .version("1.0.0");
commander_1.program
    .command("add")
    .description("Add a new task")
    .action(() => __awaiter(void 0, void 0, void 0, function* () {
    const { task } = yield inquirer_1.default.prompt({
        name: "task",
        type: "input",
        message: "Enter task description:",
    });
    const spinner = (0, ora_1.default)("Saving task...").start();
    action_1.taskHandler.addTask(task);
    setTimeout(() => {
        spinner.succeed("Task saved!");
    }, 1000);
}));
commander_1.program
    .command("list")
    .description("Lists All The Tasks")
    .action(() => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield action_1.taskHandler.listTasks();
    if (tasks.length === 0) {
        console.log(chalk_1.default.red("No tasks found!"));
        return;
    }
    console.log(chalk_1.default.blue.bold("\nYour Tasks:"));
    tasks.forEach((t, i) => console.log(`${i + 1}. ${chalk_1.default.green(t.task)} (id: ${t.id})`));
}));
commander_1.program
    .command("delete")
    .description("To Delete a Task")
    .action(() => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = action_1.taskHandler.listTasks();
    if (!tasks.length)
        return console.log(chalk_1.default.red("No tasks to delete."));
    const choices = tasks.map((t) => ({
        name: t.task,
        value: t.id,
    }));
    const { id } = yield inquirer_1.default.prompt({
        name: "id",
        type: "list",
        message: "Select a task to delete:",
        choices,
    });
    const success = action_1.taskHandler.deleteTask(id);
    const spinner = (0, ora_1.default)("Deleting task...").start();
    setTimeout(() => {
        if (success) {
            spinner.succeed("Task deleted successfully!");
        }
        else {
            spinner.fail("Failed to delete task.");
        }
    }, 1000);
}));
commander_1.program.parse(process.argv);
