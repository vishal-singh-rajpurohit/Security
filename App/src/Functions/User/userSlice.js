import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: 91,
  mobileNumber2: 91,
  postCode: "",
};

function SetUserDetails(state, action) {
  state.isLoggedIn = true;
  state.firstName = action.payload.FirstName;
  state.lastName = action.payload.LastName;
  state.email = action.payload.Email;
  state.mobileNumber = action.payload.MobileNumber;
  state.mobileNumber2 = action.payload.MobileNumber2;
  state.postCode = action.payload.PostCode;
}

function ClearUserDetails(state, action) {
  state.isLoggedIn = false;
  state.firstName = "";
  state.lastName = "";
  state.email = "";
  state.mobileNumber = "";
  state.mobileNumber2 = 0;
  state.postCode = 0;
}

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserDetails: SetUserDetails,
    clearUserDetails: ClearUserDetails,
  },
});

export const { setUserDetails, clearUserDetails } = userSlice.actions;

export default userSlice.reducer;
