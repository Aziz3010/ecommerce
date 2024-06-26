import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetCategories = createAsyncThunk("categories/actGetCategories", async (_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    const URL = `/categories`;
    try {
        const response = await axios.get<TCategory[]>(URL);
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

export default actGetCategories;