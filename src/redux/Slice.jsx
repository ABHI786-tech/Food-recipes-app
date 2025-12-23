import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import {Api }from "../utility/axios"

// const fetchUserProfile =  createAsyncThunk(
//     "userProfile",
//     async ()=>{
//         const response = await Api.get("/userprofile")
        

// })

 export const getRecipes = createAsyncThunk(
    "Recipes",
 async () => {
    try {
      const response = await Api.get("https://dummyjson.com/recipes")
      return response.recipes

      
    } catch (error) {
      console.log(error, "error")
    }
  }
 )
   



const recipesSlice = createSlice({
   name : "userRecipes",
     initialState : {
        loading:false,
          data:[],
          error: ""
    },
    reducers :{
        startLoading: (state) => { state.loading = true},
        stopLoading: state => { state.loading = false}
    },

    extraReducers: (builder) =>{
        builder.addCase(getRecipes.pending, (state)=>{state.loading = true})
        .addCase(getRecipes.fulfilled, (state, action)=>{state.loading = false, state.data = action.payload })
        .addCase(getRecipes.rejected, (state, action)=>{state.loading = false, state.error = action.payload })
       
    }

}
)

export const {startLoading, stopLoading} = recipesSlice.actions
export default recipesSlice.reducer;