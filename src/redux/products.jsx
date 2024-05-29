import { createSlice } from "@reduxjs/toolkit";

const initialState = { product: [], message: null };

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    getAllProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});
export default productSlice.reducer;
