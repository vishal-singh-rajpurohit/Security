import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    otp: 0,
    image: null,
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: 0,
    address: '',
    password: '',
    conformPassword: '',
    // address2: '',
    // adharNumber: '',
    // panNumber: '',

}

function ClearFormStates(state, action) {
    state.otp = 0
    state.Image = null
    state.firstName = ''
    state.lastName = ''
    state.email = ''
    state.mobileNumber = 0
    state.address = ''
    state.password = ''
    state.conformPassword = ''
}

function SetFormStates(state, action) {
    state.image = action.payload.image
    state.firstName = action.payload.FirstName
    state.lastName = action.payload.LastName
    state.email = action.payload.Email
    state.mobileNumber = action.payload.MobileNumber
    state.password = action.payload.Password
    state.conformPassword = action.payload.ConformPassword
}

function SetFormLoginStates(state, action){
    state.email = action.payload.Email
    state.password = action.payload.Password
}
function SetOtp(state , action){
    state.otp = action.payload.otp
}
export const formSlice = createSlice({
    name: 'handleforms',
    initialState,
    reducers: {
        clearFormStates: ClearFormStates,
        setFormStates: SetFormStates,
        setFormLoginStates: SetFormLoginStates,
        setOtp: SetOtp
    }
})

export const { clearFormStates, setFormStates, setFormLoginStates, setOtp } = formSlice.actions

export default formSlice.reducer