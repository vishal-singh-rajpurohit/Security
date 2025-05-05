import { configureStore } from "@reduxjs/toolkit";
import ModalReducre from "../Functions/Ui/modalSlice";
import InterfaceReducer from "../Functions/Ui/interfaceSlice";
import userReducer from "../Functions/User/userSlice";

const store = configureStore({
    reducer: {
        modals: ModalReducre,
        interfaces: InterfaceReducer,
        user: userReducer
    }
});

export default store;