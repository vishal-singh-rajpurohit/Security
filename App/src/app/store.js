import { configureStore } from "@reduxjs/toolkit";
import ModalReducre from "../Functions/Ui/modalSlice";
import InterfaceReducer from "../Functions/Ui/interfaceSlice";
import AuthFormReducer from "../Functions/Auth/formSlice";
import userReducer from "../Functions/User/userSlice";

const store = configureStore({
    reducer: {
        modals: ModalReducre,
        interfaces: InterfaceReducer,
        authform: AuthFormReducer,
        user: userReducer
    }
});

export default store;