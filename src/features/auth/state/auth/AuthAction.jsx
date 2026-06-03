import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosinstance } from "../../../../config/AxiosInstance";


export let loginEmployee  = createAsyncThunk('/auth/login',async(credentials,thunkApi)=>{

    try {
       let res = await axiosinstance.post('/auth/login',credentials)
       
       return res.data.data
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }

})
export let currentLoggedEmployee = createAsyncThunk(
  "auth/me",
  async (_, thunkApi) => {
    try {
      let res = await axiosinstance.get("/auth/me");
      return res.data.user;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);