import { createSlice } from "@reduxjs/toolkit";
// import actGetCart from "./act/actGetCart";

const initialState: TCartInitialState = {
    items: {},
    productFullInfo: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const id = action.payload;
            if (state.items[id]) {
                state.items[id]++;
            } else {
                state.items[id] = 1;
            }
        },
    },
    // extraReducers: (builder)=>{
    // builder.addCase(actGetCart.pending, ()=>{
    //     // state.loading = "pending"
    //     // state.error = null
    // });
    // builder.addCase(actGetCart.fulfilled, (state, action)=>{
    //     // state.loading = "succeded"
    //     // state.records = action.payload;
    // });
    // builder.addCase(actGetCart.rejected, (state, action)=>{
    //     // state.loading = "failed"
    //     if(action.payload && typeof action.payload === "string") {
    //         // state.error = action.payload;
    //     }
    // });
    // }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;