import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTodos } from "../todocontext";
import {useRef} from "react"
export default function TodoInput() {
 const inputRef=useRef<HTMLInputElement>(null);
 const dateRef=useRef<HTMLInputElement>(null);
 const {addTodo}=useTodos();
 return (
  <div>
    <Input ref={inputRef} className="" type="text" ></Input>
    <Input ref={dateRef} className="" type="datetime-local"></Input>
    <Button type="submit" onClick={()=>{
     addTodo({
      name:inputRef.current?.value||"",
      time:dateRef.current?.value||"",
      check:false
     })
    }}
    >Add Todo</Button>
    </div>
 );
}