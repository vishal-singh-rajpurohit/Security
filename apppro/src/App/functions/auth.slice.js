import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: null,
    postCode: "",
    isVerified: false,
  },
  isLoggedIn: false,
};

function setUserData(state, action) {
  console.log("user data in payload: ", action.payload);
  state.user.id = action.payload.user.id;
  state.user.name = action.payload.user.name;
  state.user.email = action.payload.user.email;
  state.user.phone = action.payload.user.phone;
  state.user.address = action.payload.user.Address;
  state.user.city = action.payload.user.City;
  state.user.state = action.payload.user.State;
  state.user.postCode = action.payload.user.PostCode;
  state.user.isVerified = action.payload.user.isVerified;
  state.isLoggedIn = true;
}

function clearUserData(state, action) {
  state.user.id = "";
  state.user.name = "";
  state.user.email = "";
  state.user.phone = "";
  state.user.address = "";
  state.user.city = "";
  state.user.state = "";
  state.user.postCode = null;
  state.user.isVerified = false;
  state.isLoggedIn = false;
}

function setUserVerified(state, action) {
  state.user.isVerified = true;

  console.log("user data in redux: ", initialState);
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logingUser: setUserData,
    logOutUser: clearUserData,
    setVerified: setUserVerified,
  },
});

export const { logingUser, logOutUser, setVerified } = authSlice.actions;

export default authSlice.reducer;
