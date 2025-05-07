import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 1,
    hasNextPage: true,
};

function changePage(state, action) {
    state.page += 1;
    state.hasNextPage = action.payload?.hasNextPage || true;
}

const variableSlice = createSlice({
    name: 'variable',
    initialState,
    reducers: {
        nextPage: changePage,
    }
});

export const { nextPage } = variableSlice.actions;
export default variableSlice.reducer;