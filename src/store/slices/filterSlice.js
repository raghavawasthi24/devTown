import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../constants";

const initialState = {
  productList: products,
  filteredProductList: products,
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    applyFilter: (state, action) => {
    console.log(action.payload)
      state.filteredProductList= state.productList.filter((product)=>
      product.price >= action.payload.range[0] && product.price <= action.payload.range[1]
      )
      if (action.payload.categories.length == 0) {
        state.filteredProductList = state.filteredProductList;
      } else {
         state.filteredProductList = state.filteredProductList.filter(
          (product) => action.payload.categories.includes(product.category)
        );
      }
      console.log(state.filteredProductList)
    },
  },
});

export default FilterSlice.reducer;
export const { applyFilter } = FilterSlice.actions;
