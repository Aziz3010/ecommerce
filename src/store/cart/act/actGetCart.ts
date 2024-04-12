import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetCart = createAsyncThunk("cart/actGetCart", async (_, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    const URL = `${import.meta.env.VITE_BASE_BACKEND_URL}/cart`;
    try {
        const response = await axios.get<TProduct[]>(URL);
        const data = response?.data;
        return data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("An unexpected error");
        }
    }
});

export default actGetCart;
