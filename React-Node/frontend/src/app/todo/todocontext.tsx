import React, { createContext, useContext, useMemo, useState } from "react";
interface Todo {
  name: string;
  time: string;
  check: boolean;
}
interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (index: number) => void;
  checkTodo: (index: number) => void;
}

const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  checkTodo: () => {},
});
export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
 
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useMemo(
    () => (todo: Todo) => {
      setTodos((prevTodos) => [...prevTodos, todo]);
    },
    []
  );

  const deleteTodo = useMemo(
    () => (index: number) => {
      setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    },
    []
  );

  const checkTodo = useMemo(
    () => (index: number) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo, i) =>
          i === index ? { ...todo, check: !todo.check } : todo
        )
      );
    },
    []
  );

  const contextValue = useMemo(
    () => ({ todos, addTodo, deleteTodo, checkTodo }),
    [todos, addTodo, deleteTodo, checkTodo]
  );

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
