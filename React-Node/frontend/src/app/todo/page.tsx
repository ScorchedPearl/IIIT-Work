"use client"
import { TodoProvider } from "./todocontext"
import TodoList from "./_components/Todolist";
import TodoInput from "./_components/todoInput";
export default function Page() {
 return (
  <TodoProvider>
    <TodoList></TodoList>
    <TodoInput></TodoInput>
  </TodoProvider>
 );
}