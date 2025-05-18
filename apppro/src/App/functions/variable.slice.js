import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  hasNextPage: true,
  scrolled: false,
  loading: false,
  errors: {
    loginError: false,
  },
};

function changePage(state, action) {
  state.page += 1;
  state.hasNextPage = action.payload?.hasNextPage || true;
}

function setLoginError(state, action) {
  state.errors.loginError = true;
}

function resetLoginError(state, action) {
  state.errors.loginError = false;
}

const variableSlice = createSlice({
  name: "variable",
  initialState,
  reducers: {
    nextPage: changePage,
    hasLoginError: setLoginError,
    notLoginError: resetLoginError,
    notScrolled: function (state) {
      state.scrolled = false;
    },
    setScrolled: function (state) {
      state.scrolled = true;
    },
    loading: function (state) {
      state.loading = true;
      console.log("Loading: ", state.loading);
    },
    loaded: function (state) {
      state.loading = false;
      console.log("Loading: ", state.loading);
    },
  },
});

export const {
  nextPage,
  hasLoginError,
  notLoginError,
  notScrolled,
  setScrolled,
  loaded,
  loading,
} = variableSlice.actions;
export default variableSlice.reducer;
