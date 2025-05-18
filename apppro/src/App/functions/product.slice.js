import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trandingProducts: [],
  products: [],
  offerProducts: [],
  activeOffers: [],
  selectedProduct: null,
  cart: [],
  loading: false,
  error: null,
};

function fetchProductsStart2(state) {
  state.loading = true;
  state.error = null;
}
function fetchProductsError2(state) {
  state.loading = false;
  state.error = true;
}
function fetchProductsSuccess2(state, action) {

  state.loading = false;
  state.error = false;
  state.trandingProducts = action.payload.products;
  state.products = action.payload.mainProducts;
  state.offerProducts = action.payload.offerProducts;
  state.activeOffers = action.payload.activeOffers;
}
function fetchByPageSuccess2(state, action) {
  console.log("Fetched: ", action.payload);
  state.products = [...state.products, ...action.payload];
  console.log("state.products: ", state.products, state.products.length);
}

function fetchSelectedProductStart2(state, action) {
  state.selectedProduct = action.payload.selectedProduct;
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStart: fetchProductsStart2,
    fetchProductsError: fetchProductsError2,
    fetchProductsSuccess: fetchProductsSuccess2,
    fetchSelectedProductStart: fetchSelectedProductStart2,
    fetchByPageSuccess: fetchByPageSuccess2
  },
});

export const {
  fetchProductsError,
  fetchProductsStart,
  fetchProductsSuccess,
  fetchSelectedProductStart,
  fetchByPageSuccess
} = productsSlice.actions;

export default productsSlice.reducer;
