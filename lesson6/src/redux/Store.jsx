import { configureStore } from "@reduxjs/toolkit";
import { BlogReducer } from "./Reducers/AppReducer";

export const store = configureStore({
    reducer:{
        BlogReducer
    }
})