import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos: [{id:1, Msg:"Hello-World"}]
}

const TodoSlice = createSlice({
    name:"Todo",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid,
                Msg: action.payload.Msg,
            }

            // State ke andar jo todos hai usme ye vala todo push karo ==> The below statement means this
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            // we are overwriting the state over here
            state.todos = state.todos.filter((todo)=> {
                todo.id !== action.payload.id
            })
        },

        // made by me so dont know is it correct or not
        updateTodo: (state, action) => {
            // we got the id over here of the todo which needs to be updated
            const ID = state.todos.map((todo) => {
                todo.id == action.payload.id
            })

        }

    }
})

export const {addTodo, removeTodo, updateTodo} = TodoSlice.actions

export default TodoSlice.reducer