import { configureStore } from "@reduxjs/toolkit";

import authReducer from  '../features/auth/state/auth/AuthSlice'
import themeReducer  from "../shared/state/ThemeSlice.jsx";


export const store = configureStore({
    reducer:{
        auth:authReducer,
        theme:themeReducer ,

    },

})