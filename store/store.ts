import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import todosReducer from "./features/todos/todos";

// creating store
export const store = configureStore({
    reducer: {
        todosReducer: todosReducer
    },
});

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);