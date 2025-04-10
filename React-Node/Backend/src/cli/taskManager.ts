#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import { taskHandler } from "./Controllers/action";
import ora from "ora";
interface Task{
 id:any;
 task:string;
}

program
.name("taskManager")
.description("to create todos")
.version("1.0.0")

program
.command("add")
.description("Add a new task")
.action(async () => {
 const { task } = await inquirer.prompt<{
 task: string;
 }>({
 name: "task",
 type: "input",
 message: "Enter task description:",
 });
 const spinner = ora("Saving task...").start();
 taskHandler.addTask(task);
 setTimeout(() => {
 spinner.succeed("Task saved!");
 }, 1000);
});


program
.command("list")
.description("Lists All The Tasks")
.action(async()=>{
 const tasks=await taskHandler.listTasks();
 if(tasks.length===0){
   console.log(chalk.red("No tasks found!"));
   return;
 }
 console.log(chalk.blue.bold("\nYour Tasks:"));
 tasks.forEach((t:Task, i:number) =>
   console.log(`${i + 1}. ${chalk.green(t.task)} (id: ${t.id})`)
 );
})


program
.command("delete")
.description("To Delete a Task")
.action(async()=>{
 const tasks = taskHandler.listTasks();
 if (!tasks.length) return console.log(chalk.red("No tasks to delete."));
   const choices = tasks.map((t:Task) => ({
    name: t.task,
    value: t.id,
   }));
   const {id} = await inquirer.prompt({
    name: "id",
    type: "list",
    message: "Select a task to delete:",
    choices,
  });

  const success = taskHandler.deleteTask(id);
  const spinner = ora("Deleting task...").start();
  setTimeout(()=>{
    if(success){
      spinner.succeed("Task deleted successfully!");
    }
    else{
      spinner.fail("Failed to delete task.");
    }
  },1000)
 })

 program.parse(process.argv);