import { Button } from "@/components/ui/button";
import { useTodos } from "../todocontext";

export default function TodoList() {
 const {todos,checkTodo,deleteTodo}=useTodos()
 return (
  <div>
     {
      todos.map((todo,index)=>{
       return (
        <div key={index} className="p-4 mb-4 border rounded-lg shadow-md bg-gray-50">
           <div className={`font-semibold ${todo.check ? "text-amber-600 line-through" : "text-gray-800"}`}>
              Name: {todo.name}
           </div>
           <div className={`text-sm ${todo.check ? "text-amber-600 line-through" : "text-gray-600"}`}>
              Time: {todo.time}
           </div>
           <div className="mt-2 flex space-x-2">
              <Button 
         onClick={() => checkTodo(index)} 
         type="button" 
         className={`px-4 py-2 text-sm font-medium rounded ${todo.check ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"}`}
              >
         {todo.check ? "Uncheck" : "Check"}
              </Button>
              <Button 
         onClick={() => deleteTodo(index)} 
         type="button" 
         className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
              >
         Delete
              </Button>
           </div>
        </div>
       )
      })
     }
    </div>
 );
}