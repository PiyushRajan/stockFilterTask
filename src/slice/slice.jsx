import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const stockSlice = createSlice({
  name: "Stocks",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    },
    toggleSelect: (state, action) => {
      const { id } = action.payload;
      const selectedProduct = state.products.find((item) => item.id === id);
      if (selectedProduct) {
        selectedProduct.isSelected = !selectedProduct.isSelected;
      }
    },
  },
});

export default stockSlice.reducer;
export const { setProduct, toggleSelect } = stockSlice.actions;
