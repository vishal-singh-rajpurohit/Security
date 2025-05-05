import { createSlice } from "@reduxjs/toolkit";

//Products = {
//     _id: "",
//     title: "product title",
//     frontImage: "",
//     price: 0,
//     mrp: 0,
//     discount: 0,
//     top: "title"
// }

//Offers = {
//     _id: "",
//     title: "Offer title",
//     frontImage: "",
//     Starting From: "",
// }

//Offers = {
//     _id: "",
//     title: "tranding title",
//     frontImage: "",
//     price: 0,
//     mrp: 0,
//     discount: 0,
//     top: "title"
// }

//Selected Products = {
//     _id: "",
//     title: "product title",
//     frontImage: "",
//     ShowCaseImages: [""],
//     price: 0,
//     mrp: 0,
//     discount: 0,
//     productTitle: [""],
// }

const initialState = {
  products: [],
  offerProducts: [],
  trandingProducts: [],
  selectedProduct: {},
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
  state.products = action.payload.products;
  state.offerProducts = action.payload.offerProducts;
  state.trandingProducts = action.payload.trandingProducts;
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
  },
});

export const {
  fetchProductsError,
  fetchProductsStart,
  fetchProductsSuccess,
  fetchSelectedProductStart,
} = productsSlice.actions;

export default productsSlice.reducer;
