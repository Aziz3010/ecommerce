import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../index";

const actGetProductsByItems = createAsyncThunk("cart/actGetProductsByItems", async (_, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsId = Object.keys(cart?.items);
    const allIds = itemsId?.map((id) => `id=${id}`).join("&");

    if (!allIds.length) return fulfillWithValue([]);

    try {
        const URL = `/products?${allIds}`;
        const response = await axios.get<TProduct[]>(URL);
        const data = response?.data;
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("An unexpected error");
        }
    }
});

export default actGetProductsByItems;
