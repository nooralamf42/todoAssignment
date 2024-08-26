import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos : [],
    toggleCompleted : (id)=>{},
    createTodo : (todo)=>{},
    updateTodo : (todo, id)=>{},
    deleteTodo : (id)=>{},
})

export const TodoContextProvider = TodoContext.Provider

export default function useTodo(){
    return useContext(TodoContext)
}
