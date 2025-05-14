import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
    phone: "",
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
  state.user.isVerified = action.payload.user.isVerified;
  state.isLoggedIn = true;
}

function clearUserData(state, action) {
  state.user.id = "";
  state.user.name = "";
  state.user.email = "";
  state.user.phone = "";
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
