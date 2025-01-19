import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: 91,
    avatar: '',
    mobileNumber2: 91,
    userType: '',
    address: '',
    city: '',
    postCode: '',
    verificationStatus: '',
    upiMobileNumber: 91,
    totalOrders: 0,
    totalEarnings: 0,
    pendingOrders: 0,
    craditPayments: 0,
    activeOrders: 0
}

function SetUserDetails(state, action) {
    state.isLoggedIn = true
    state.firstName = action.payload.FirstName
    state.lastName = action.payload.LastName
    state.email = action.payload.Email
    state.mobileNumber = action.payload.MobileNumber
    state.avatar = action.payload.Avatar
    state.verificationStatus = action.payload.VerificationStatus
    if (action.payload?.Verified === "APPROVED") {
        state.mobileNumber2 = action.payload.MobileNumber2
        state.userType = action.payload.UserType
        state.address = action.payload.Address
        state.city = action.payload.City
        state.postCode = action.payload.PostCode
        state.UpiMobileNumber = action.payload.UpiMobileNumber
        state.totalOrders = action.payload.TotalOrders
        state.totalEarnings = action.payload.TotalEarnings
        state.pendingOrders = action.payload.PendingOrders
        state.craditPayments = action.payload.CraditPayments
    }
    console.log("first name ",state.firstName);
}

function ClearUserDetails(state, action) {
    state.isLoggedIn = false
    state.firstName = ""
    state.lastName = ""
    state.email = ""
    state.mobileNumber = ""
    state.avatar = ""
    state.mobileNumber2 = 0
    state.userType = ""
    state.address = ""
    state.city = ""
    state.postCode = 0
    state.verificationStatus = ""
    state.UpiMobileNumber = 0
    state.totalOrders = 0
    state.totalEarnings = 0
    state.pendingOrders = 0
    state.craditPayments = 0

}

export const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUserDetails: SetUserDetails,
        clearUserDetails: ClearUserDetails
    }
});

export const { setUserDetails, clearUserDetails} = userSlice.actions

export default userSlice.reducer