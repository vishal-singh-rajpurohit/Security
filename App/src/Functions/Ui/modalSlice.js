import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openMessageBox : false,
    openReport: false,
    openReportSuccess: false,
    openBottomFilter: false,
    openBottomNav: false,
    openFormError: false,
}

function OpenMessages(state, action){
    state.openMessageBox = !state.openMessageBox;
}

function OpenReportBox(state, action){
    state.openReport = true;
}

function CloseReportBox(state, action){
    state.openReport = false;
}

function OpenSuccess(state, action){
    state.openReportSuccess = true;
}

function CloseSuccess(state, action){
    state.openReportSuccess = false;
}

function OpenFilter(state, action){
    state.openBottomFilter = !state.openBottomFilter;
}

function OpenNav(state, action){
    state.openBottomNav = !state.openBottomNav
}

function OpenWarning(state, action){
    state.OpenWarning = action.payload.status
}

export const modalSlice = createSlice({
    name : 'handelModal',
    initialState,
    reducers: {
        openMessages: OpenMessages,
        openReportBox: OpenReportBox,
        closeReportBox: CloseReportBox,
        openSuccess: OpenSuccess,
        closeSuccess: CloseSuccess,
        setOpenFilter: OpenFilter,
        setBottomNav: OpenNav,
        openWarning: OpenWarning
    }
});

export const {openMessages, openReportBox, closeReportBox, openSuccess, closeSuccess, setOpenFilter, setBottomNav, openWarning} = modalSlice.actions;

export default modalSlice.reducer;