import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByItems from "./act/actGetProductsByItems";

const initialState: TCartInitialState = {
    items: {},
    productsFullInfo: [],
    loading: "idle",
    error: null
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
        cartItemChangeQuantity: (state, action) => {
            state.items[action.payload.id] = action.payload.quantity;
        },
        cartItemRemove: (state, action) => {
            delete state.items[action.payload];
            state.productsFullInfo = state.productsFullInfo.filter((product) => product.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(actGetProductsByItems.pending, (state) => {
            state.loading = "pending"
            state.error = null
        });
        builder.addCase(actGetProductsByItems.fulfilled, (state, action) => {
            state.loading = "succeded"
            state.productsFullInfo = action.payload;
        });
        builder.addCase(actGetProductsByItems.rejected, (state, action) => {
            state.loading = "failed"
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    }
});

export const { addToCart, cartItemChangeQuantity, cartItemRemove } = cartSlice.actions;
export default cartSlice.reducer;