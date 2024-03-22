import { createSlice } from "@reduxjs/toolkit";

const initialState = [
]

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Shows the action type and payload
      console.log(action);
      state.push(action.payload)
    },
    editTodo: (state, action) => {
      // grab the id, title & details from the action payload 
      const { id, title, details, email, phone } = action.payload
      const existingTodo = state.find(todo => todo.id === id)
      if(existingTodo) {
        existingTodo.title = title
        existingTodo.details = details
        existingTodo.email = email
        existingTodo.phone = phone
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload
      const existingTodo = state.find(todo => todo.id === id)
      if(existingTodo) {
        return state.filter(todo => todo.id !== id)
      }
    }
  }
})

export const selectTodo = (state) => state.todo.value

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer