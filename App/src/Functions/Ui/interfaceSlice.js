import { createSlice } from "@reduxjs/toolkit"

const interfaceStates = {
    isLoggedin : false
}

function setLoginStatus(state , action){
    state.isLoggedin = action.payload.status;
}

export const interfaceSlice = createSlice({
    name: 'handelInterface',
    initialState: interfaceStates,
    reducers: {
        reverseLogin: setLoginStatus
    }
})

export const {reverseLogin} = interfaceSlice.actions;

export default interfaceSlice.reducer;