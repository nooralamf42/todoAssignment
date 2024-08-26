import React, { useEffect, useState } from "react";
import { TodoForm, TodoItem } from "./components";
import { TodoContextProvider } from "./contexts/Todo";

function App() {
  
  const [todos, setTodos] = useState([])
  
  const createTodo = (todo) =>{
    setTodos(prevTodos => [...prevTodos, {
      id: Date.now(),
      todo,
      completed: false
    }])
  }

  const updateTodo = (updatedTodo, todoID) =>{
    setTodos(
      prevTodos => prevTodos.map(
        prevTodo => prevTodo.id === todoID ? updatedTodo : prevTodo
        )
    )
  }

  const deleteTodo = (todoID) =>{
    setTodos(
      prevTodos => prevTodos.filter(prevTodo => prevTodo.id !== todoID)
    )
  }

  const toggleCompleted = (todoID) =>{
    setTodos(
      prevTodos => prevTodos.map(
        prevTodo => prevTodo.id === todoID ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
      )
    )
  }

  // getting data from localStorage on load

  useEffect(()=>{
    let lsTodos = localStorage.getItem("todos")
    if(lsTodos&&lsTodos.length>0)
      setTodos(JSON.parse(lsTodos))
  },[])

  // setting data to localStorage on saving todo

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContextProvider
      value={{ todos, createTodo, deleteTodo, updateTodo, toggleCompleted}}
    >
      <div className="bg-[#172b42] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-lg px-4 py-3 text-white font-mono">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo}/>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
