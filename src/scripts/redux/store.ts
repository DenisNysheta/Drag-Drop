import { configureStore } from "@reduxjs/toolkit";
import dropReducer from "./dropSlice"

export default configureStore({
    reducer: {
        dropList: dropReducer
    }
})