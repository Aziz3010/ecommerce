import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";

const initialState: IProductsState = {
    records: [],
    loading: "idle",
    error: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productsCleanUp: (state) => {
            state.records = [];
            state.loading = "idle";
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actGetProductsByCatPrefix.pending, (state)=>{
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetProductsByCatPrefix.fulfilled, (state, action)=>{
            state.loading = "succeded";
            state.records = action.payload;
        });
        builder.addCase(actGetProductsByCatPrefix.rejected, (state, action)=>{
            state.loading = "failed";
            if(action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    }
});

export const {productsCleanUp} = productsSlice.actions;
export {actGetProductsByCatPrefix};
export default productsSlice.reducer;