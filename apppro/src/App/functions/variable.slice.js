import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 1,
    hasNextPage: true,
    errors: {
        loginError: false,
    }
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
    name: 'variable',
    initialState,
    reducers: {
        nextPage: changePage,
        hasLoginError: setLoginError,
        notLoginError: resetLoginError
    }
});

export const { nextPage, hasLoginError, notLoginError} = variableSlice.actions;
export default variableSlice.reducer;