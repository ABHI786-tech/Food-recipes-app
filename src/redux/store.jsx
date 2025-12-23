import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./Slice"

 const store = configureStore({
    reducer: {userRecipes: recipesSlice},
    devTools: false,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false})
})

export default  store