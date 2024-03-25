import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id:1,
        msg:"Hello",
        checked: false
    }],
    addTodo: (todo)=> {},
    removeTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {}

})

export const TodoProvider = TodoContext.Provider

export default function useTodo() {
    return useContext(TodoContext)
}

