import {configureStore} from "@reduxjs/toolkit"
import TodoReducer from "../Features/Todo/TodoSlice"

const Store = configureStore({
    reducer: TodoReducer
})

export default Store