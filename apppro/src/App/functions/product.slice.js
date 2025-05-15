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
  console.log("Payloads: ", action.payload);
  
  state.loading = false;
  state.error = false;
  state.trandingProducts = action.payload.products;
  state.products = action.payload.mainProducts;
  state.offerProducts = action.payload.offerProducts;
  state.activeOffers = action.payload.activeOffers;
}
function fetchSelectedProductStart2(state, action) {
  state.selectedProduct = action.payload.selectedProduct;
}

function appendCart(state, action) {
  const { productId, quantity } = action.payload;
}
function removeCart(state, action) {
  const { cardId } = action.payload;
}

function clearCart(state) {}

function fetchCart(state) {}

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
