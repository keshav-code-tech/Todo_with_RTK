import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addtodo : (state,action) => {
            const todo = {
                id: nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
            localStorage.setItem("todos",JSON.stringify(state.todos));
        },
        removetodo: (state,action) => {
            state.todos = state.todos.filter((todo) => 
                todo.id != action.payload
            )
            localStorage.setItem("todos",JSON.stringify(state.todos));
        },
        updatetodo: (state,action) => {
            state.todos = state.todos.map((todo) => (
                todo.id == action.payload.id ? todo.text = action.payload.text : ""
            ))
            localStorage.setItem("todos",JSON.stringify(state.todos));
        },
    }
})

export const {addtodo,removetodo,updatetodo} = todoSlice.actions
export const todoreducer = todoSlice.reducer