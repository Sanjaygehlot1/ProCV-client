import { configureStore } from "@reduxjs/toolkit";
import ResumeSlice from "../Slices/ResumeSlice.js"
import AuthSlice from "../Slices/AuthSlice.js"
const Store = configureStore({
    reducer:{
        Resume : ResumeSlice,
        Auth : AuthSlice
    }
})

export {Store}