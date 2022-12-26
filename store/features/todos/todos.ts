import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        todosAdded(state: any, action) {
            state.push({
                id: state.length + 1,
                text: action.payload.text,
                completed: false
            })
        },
        todosToggled(state, action) {
            const todo = state.find((todo: any) => todo.id === action.payload.id);
            todo.completed = !todo.completed
        }
    }
})

export const { todosAdded, todosToggled } = todosSlice.actions
export default todosSlice.reducer