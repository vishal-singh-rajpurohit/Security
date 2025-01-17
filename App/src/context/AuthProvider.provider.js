import { useState } from "react";

import AuthContext from "./AuthContext.context";
import { useDispatch, useSelector } from "react-redux";
import { openWarning } from "../Functions/Ui/modalSlice";
import axios from "axios";
import { API, setUserRoutes } from "../constants";
import { clearFormStates } from "../Functions/Auth/formSlice";
import { useNavigate } from "react-router-dom";
import { clearUserDetails, setUserDetails } from "../Functions/User/userSlice";

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setFormError = (status) => dispatch(openWarning({ status: status }));

    // TEPERORY ATTRIBUTES
    const [tempUserType, setTempUserType] = useState("CUSTOMER");
    const [isFilterOn, setIsFilterOn] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const [filters, setFilters] = useState({});

    // PRODUCTS
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState();

    // LOGGED IN STATE
    let loggedIn = useSelector((state) => state.user.isLoggedIn);

    // TEMP FORM DATA
    const authImage = useSelector((state) => state.authform.image)
    const authFirstName = useSelector((state) => state.authform.firstName);
    const authLastName = useSelector((state) => state.authform.lastName);
    const authMail = useSelector((state) => state.authform.email);
    const authMobileNumber = useSelector((state) => state.authform.mobileNumber);
    const authPass = useSelector((state) => state.authform.password);
    const authConformPass = useSelector((state) => state.authform.conformPassword);

    // TEMP USER DATA AFTER LOGIN
    const userFirstName = useSelector((state) => state.user.firstName);
    const userLastName = useSelector((state) => state.user.lastName);
    const userEmail = useSelector((state) => state.user.email);
    const userMobileNumber = useSelector((state) => state.user.mobileNumber);
    const userMobileNumber2 = useSelector((state) => state.user.mobileNumber2);
    const userAvater = useSelector((state) => state.user.avatar);
    const userType = useSelector((state) => state.user.userType);
    const userAddress = useSelector((state) => state.user.Address);
    const userCity = useSelector((state) => state.user.city);
    const userPostCode = useSelector((state) => state.user.postCode);
    const userVerificationStatus = useSelector((state) => state.user.verificationStatus);
    const userUpiNumber = useSelector((state) => state.user.upiMobileNumber);
    const userTotalOrders = useSelector((state) => state.user.totalOrders);
    const userPendingOrders = useSelector((state) => state.user.pendingOrders);
    const userTotalEarnings = useSelector((state) => state.user.totalEarnings);
    const userCraditPayments = useSelector((state) => state.user.craditPayments)
    const userActiveOrders = useSelector((state) => state.user.activeOrders);

    const requestUserType = setUserRoutes(tempUserType);

    // first time while app is loading
    // useEffect(async () => {
    //     await axios.post(`/api/v1${API[16]}`, {})
    //         .then((resp) => {
    //             console.log("User Logged in Successfully", resp);
    //             const {
    //                 FirstName,
    //                 LastName,
    //                 Email,
    //                 MobileNumber,
    //                 MobileNumber2,
    //                 UserType,
    //                 TotalOrders,
    //                 Avatar,
    //                 Address,
    //                 City,
    //                 PostCode,
    //                 VerificationStatus,
    //                 UpiMobileNumber,
    //                 TotalEarnings,
    //                 PendingOrders,
    //                 CraditPayments,
    //             } = resp.data.data.User;

    //             dispatch(
    //                 setUserDetails({
    //                     FirstName: FirstName,
    //                     LastName: LastName,
    //                     Email: Email,
    //                     MobileNumber: MobileNumber,
    //                     Avatar: Avatar || "",
    //                     MobileNumber2: MobileNumber2 || 91,
    //                     UserType: UserType,
    //                     Address: Address || "",
    //                     City: City || "",
    //                     PostCode: PostCode || 0,
    //                     VerificationStatus: VerificationStatus,
    //                     UpiMobileNumber: UpiMobileNumber || 0,
    //                     TotalOrders: TotalOrders || 0,
    //                     TotalEarnings: TotalEarnings || 0,
    //                     PendingOrders: PendingOrders || 0,
    //                     CraditPayments: CraditPayments || 0,
    //                 })
    //             );
    //             navigate("/");
    //         }).catch((e) => {
    //             console.log("Auautharized User ", e);
    //         })
    // }, [])

    const sendRegistrationOtp = async () => {
        console.log(authMail, authPass);
        try {
            await axios
                .post(`/api/v1/main/otp/send-otp-signup`, {
                    Email: authMail,
                    UserType: tempUserType,
                    Password: authPass,
                })
                .then((resp) => {
                    console.log("otp sent Successfully ", resp);
                    navigate("/verify/otp");
                });
        } catch (error) {
            console.log("got error while hitting register otp ", error);
        }
    };

    const sendLoginOtp = async () => {
        try {
            await axios
                .post(`/api/v1/main/otp/send-otp-login`, {
                    Email: authMail,
                    UserType: tempUserType,
                    Password: authPass,
                })
                .then((resp) => {
                    console.log("otp sent Successfully for Login", resp);
                    navigate("/verify/login-otp");
                });
        } catch (error) {
            console.log("got error while hitting Login otp ", error);
        }
    };

    const register = async (Otp) => {
        console.log("first Name auth: ", authFirstName);
        try {
            await axios.post(`/api/v1/${requestUserType}${API[0]}`,
                {
                    image: authImage,
                    Otp: Otp,
                    FirstName: authFirstName,
                    LastName: authLastName,
                    Email: authMail,
                    MobileNumber: authMobileNumber,
                    UserType: tempUserType,
                    Password: authPass,
                    ConformPassword: authConformPass,
                },
                {
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                }
            )
                .then((resp) => {
                    console.log("Login Successful successful", resp);

                    const { FirstName, LastName, Email, MobileNumber, MobileNumber2, UserType, TotalOrders, Avatar, Address, City, PostCode, VerificationStatus, UpiMobileNumber, TotalEarnings, PendingOrders, CraditPayments } = resp.data.data.User;

                    console.log("user NAme ", FirstName, LastName);

                    dispatch(
                        setUserDetails({
                            isLoggedIn: true,
                            fullName: FirstName,
                            lastName: LastName,
                            email: Email,
                            mobileNumber: MobileNumber || 91,
                            avatar: Avatar || "",
                            mobileNumber2: MobileNumber2 || 91,
                            userType: UserType,
                            address: Address || "",
                            city: City || "",
                            postCode: PostCode || 0,
                            verificationStatus: VerificationStatus,
                            upiMobileNumber: UpiMobileNumber || 0,
                            totalOrders: TotalOrders || 0,
                            totalEarnings: TotalEarnings || 0,
                            pendingOrders: PendingOrders || 0,
                            craditPayments: CraditPayments || 0,
                        })
                    );

                    dispatch(clearFormStates());
                    // navigate("/");
                });
        } catch (error) {
            console.log("error while submitting otp in registration function ", error)
        }
    };

    const login = async (Otp) => {
        try {
            await axios
                .post(`/api/v1/${requestUserType}${API[1]}`, {
                    Otp: Otp,
                    Email: authMail,
                    Password: authPass,
                })
                .then((resp) => {
                    console.log("user detail ", resp.data.data.User);

                    const {
                        FirstName,
                        LastName,
                        Email,
                        MobileNumber,
                        MobileNumber2,
                        UserType,
                        TotalOrders,
                        Avatar,
                        Address,
                        City,
                        PostCode,
                        VerificationStatus,
                        UpiMobileNumber,
                        TotalEarnings,
                        PendingOrders,
                        CraditPayments,
                    } = resp.data.data.User;


                    dispatch(
                        setUserDetails({
                            FirstName: FirstName,
                            LastName: LastName,
                            Email: Email,
                            MobileNumber: MobileNumber,
                            Avatar: Avatar || "",
                            MobileNumber2: MobileNumber2 || 91,
                            UserType: UserType,
                            Address: Address || "",
                            City: City || "",
                            PostCode: PostCode || 0,
                            VerificationStatus: VerificationStatus,
                            UpiMobileNumber: UpiMobileNumber || 0,
                            TotalOrders: TotalOrders || 0,
                            TotalEarnings: TotalEarnings || 0,
                            PendingOrders: PendingOrders || 0,
                            CraditPayments: CraditPayments || 0,
                        })
                    );

                    dispatch(clearFormStates());

                    navigate("/");
                });
        } catch (error) {
            console.log("error while submitting login otp");
        }
    };

    const logout = async () => {
        try {
            await axios.post(`/api/v1/${requestUserType}${API[2]}`, {})
                .then((resp) => {
                    dispatch(clearUserDetails())
                    navigate("/");
                });
        } catch (error) {
            console.log("Error in Logout");
        }
    };

    const deleteAccount = async () => {

    }

    const addToCart = async () => {
        try {
            console.log("add to cart called");

        } catch (error) {
            console.log("error while add to cart the product :", error);
        }
    }

    const placeOrder = async () => {
        try {
            console.log("place orders called");
        } catch (error) {
            console.log("error while add to cart the product :", error);
        }
    }

    const cancleOrder = async () => {
        try {
            console.log("cancel order called")
        } catch (error) {
            console.log("error in order cancellation ", error);
        }
    }

    const shareProduct = async () => {

    }

    const serveProducts = async (pageNumber, isFilterOn, filters) => {
        await axios.post(`/api/v1/main/serve/products?page=${pageNumber}&filteron=${isFilterOn}`, {})
            .then((resp) => {
                setProducts((prev) => [...prev, resp.data.data.Products])
            }).catch((error) => {
                console.log("error while hitting serve products ", error);
            })
    }

    const selectProduct = async (productId) => {
        try {
            await axios.post(`/api/v1/main/serve/selected-product`, {
                productId: productId
            }).then((resp) => {
                // console.log("Selected Product :", resp.data.data.Product);
                // setProduct(resp.data.data.Product);

                navigate("/user/profile");
            })
        } catch (error) {
            console.log("Error While Selecting :", error);
        }
    }

    const data = {
        loggedIn,
        tempUserType,
        setTempUserType,
        isFilterOn,
        setIsFilterOn,
        pageNumber,
        setPageNumber,
        product,
        setProduct,
        filters,
        setFilters,
        products,
        setProducts,
        setFormError,
        sendRegistrationOtp,
        sendLoginOtp,
        register,
        login,
        logout,
        userFirstName,
        userLastName,
        userEmail,
        userMobileNumber,
        userMobileNumber2,
        userAvater,
        userType,
        userAddress,
        userCity,
        userPostCode,
        userVerificationStatus,
        userUpiNumber,
        userTotalOrders,
        userActiveOrders,
        userPendingOrders,
        userTotalEarnings,
        userCraditPayments,
        serveProducts,
        deleteAccount,
        addToCart,
        placeOrder,
        cancleOrder,
        shareProduct,
        selectProduct
    };
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
