import { useState } from "react";
import useTodo from "../contexts/Todo";

function TodoForm() {
  const {createTodo} = useTodo()
  const [todoText, setTodoText] = useState('')
  const formHandler = (e) =>{
    e.preventDefault()
    if(!todoText.length>0)
      return
    setTodoText('')
    createTodo(todoText)
  }
  
  return (
    <form className="flex" onSubmit={formHandler}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e)=>setTodoText(e.target.value)}
        value={todoText}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
