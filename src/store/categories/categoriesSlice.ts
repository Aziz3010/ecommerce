import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";

type TCategory = {
    id: number,
    title: string,
    perfix: string,
    img: string,
};

interface ICategoriesState {
    records: TCategory[],
    loading: "idle" | "pending" | "succeded" | "failed",
    error: string | null
};

const initialState: ICategoriesState = {
    records: [],
    loading: "idle",
    error: null
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actGetCategories.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetCategories.fulfilled, (state, action) => {
            state.loading = "succeded";
            state.records = action.payload;
        });
        builder.addCase(actGetCategories.rejected, (state, action) => {
            state.loading = "failed";
            if(action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    }
});

export {actGetCategories};
export default categoriesSlice.reducer;