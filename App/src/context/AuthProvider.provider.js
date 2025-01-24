import { useEffect, useState } from "react";

import AuthContext from "./AuthContext.context";
import { useDispatch, useSelector } from "react-redux";
import { openWarning } from "../Functions/Ui/modalSlice";
import axios from "axios";
import { API, setUserRoutes } from "../constants";
import { clearFormStates } from "../Functions/Auth/formSlice";
import { useNavigate } from "react-router-dom";
import { clearUserDetails, setUserDetails } from "../Functions/User/userSlice";
import { filterAttributes } from '../constants'
import { reverseLogin } from "../Functions/Ui/interfaceSlice";

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formData = new FormData();
    const setFormError = (status) => dispatch(openWarning({ status: status }));

    // TEPERORY ATTRIBUTES
    const [tempUserType, setTempUserType] = useState("CUSTOMER");
    const [isFilterOn, setIsFilterOn] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const [showCaseImage, setShowCaseImage] = useState('');
    const [totalAmmount, setTotalAmmount] = useState(0);

    // PRODUCTS AND FILTER
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState();
    const [cartProducts, setCartProducts] = useState();
    // FILTERS
    const [filterObject, setFilterObject] = useState({
        Price: null,
        Brand: null,
        NumberOfCameras: null,
        CameraType: null,
        CameraQuality: null,
        IndoorOutdoor: null,
        MegaPixels: null,
        // area_size: null,
        // premium: false
    });

    const [filters, setFilters] = useState(filterObject);
    const [filterKeys, setFilterKeys] = useState("NumberOfCameras");
    const [filterAts, setFilterAts] = useState([]);


    // LOGGED IN STATE
    let loggedIn = useSelector((state) => state.user.isLoggedIn);

    // TEMP FORM DATA
    const authImage = useSelector((state) => state.authform.image);
    const authFirstName = useSelector((state) => state.authform.firstName);
    const authLastName = useSelector((state) => state.authform.lastName);
    const authMail = useSelector((state) => state.authform.email);
    const authMobileNumber = useSelector((state) => state.authform.mobileNumber);
    const authPass = useSelector((state) => state.authform.password);
    const authConformPass = useSelector(
        (state) => state.authform.conformPassword
    );

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
    const userVerificationStatus = useSelector(
        (state) => state.user.verificationStatus
    );
    const userUpiNumber = useSelector((state) => state.user.upiMobileNumber);
    const userTotalOrders = useSelector((state) => state.user.totalOrders);
    const userPendingOrders = useSelector((state) => state.user.pendingOrders);
    const userTotalEarnings = useSelector((state) => state.user.totalEarnings);
    const userCraditPayments = useSelector((state) => state.user.craditPayments);
    const userActiveOrders = useSelector((state) => state.user.activeOrders);

    const requestUserType = setUserRoutes(tempUserType);

    const checkLoggedIn = async () =>{
        try {
            await axios.post('/api/v1/main/auth/refresh-Tokens', {})
            .then((resp)=>{
                console.log("User is Already logged in :", resp)
            })
        } catch (error) {
            console.log("User is not logged in :", error)
        }
    }

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

        try {
            const formData = new FormData();
            formData.set("Otp", Otp);
            if (authImage) {

            }
            formData.set("image", authImage)
            formData.set("FirstName", authFirstName);
            formData.set("LastName", authLastName);
            formData.set("Email", authMail);
            formData.set("MobileNumber", authMobileNumber);
            formData.set("UserType", tempUserType);
            formData.set("Password", authPass);
            formData.set("ConformPassword", authConformPass);


            await axios.post(`/api/v1/${requestUserType}${API[0]}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data", // Axios handles boundaries automatically
                    },
                }
            )
                .then((resp) => {
                    const {
                        FirstName,
                        LastName,
                        Email,
                        MobileNumber,
                        UserType,
                        TotalOrders,
                        Avatar,
                        VerificationStatus,
                        UpiMobileNumber,
                        TotalEarnings,
                        PendingOrders,
                        CraditPayments,
                    } = resp.data.data.User;

                    console.log("user NAme ", FirstName, LastName);

                    dispatch(
                        clearFormStates()
                    );
                    dispatch(setUserDetails({
                        isLoggedIn: true,
                        FirstName,
                        LastName,
                        Email,
                        MobileNumber,
                        UserType,
                        TotalOrders,
                        Avatar,
                        VerificationStatus,
                        UpiMobileNumber,
                        TotalEarnings,
                        PendingOrders,
                        CraditPayments
                    }));
                    dispatch(reverseLogin({
                        status: true
                    }))
                    navigate("/");
                });
        } catch (error) {
            console.log(
                "error while submitting otp in registration function ",
                error
            );
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
                    dispatch(reverseLogin({
                        status: true
                    }))

                    dispatch(clearFormStates());

                    navigate("/");
                });
        } catch (error) {
            console.log("error while submitting login otp");
        }
    };

    const logout = async () => {
        try {
            await axios
                .post(`/api/v1/${requestUserType}${API[2]}`, {})
                .then((resp) => {
                    dispatch(clearUserDetails());
                    dispatch(reverseLogin({
                        status: false
                    }))
                    navigate("/");
                });
        } catch (error) {
            console.log("Error in Logout");
        }
    };

    const deleteAccount = async () => {
        try {
            await axios.post(`/api/v1${API[7]}`, {})
                .then((resp) => {
                    dispatch(
                        clearUserDetails()
                    );
                    console.log("Account Deleted Successfully ", resp);

                })
        } catch (error) {
            console.log("Somthing Went Wrong While Deleting :", error);
        }
    };

    const addToCart = async (productId) => {
        if (loggedIn) {
            try {
                await axios.post(`/api/v1${API[13]}`, { ProdcutId: productId })
                    .then((resp) => {
                        console.log("added to cart");
                    })
            } catch (error) {
                console.log("error while add to cart the product :", error);
            }
        }else{
            navigate("/user/login")
        }
    };

    const removeFromCart = async (cartID) => {
        console.log("cart Product Id: ", cartID)
        try {
            await axios.delete(`/api/v1${API[15]}?id=${cartID}`)
                .then((resp) => {
                    setCartProducts(resp.data.data.ProductsInCart);
                    setTotalAmmount(resp.data.data.TotalAmmount);
                })
        } catch (error) {
            console.log("Error While Removing Form Cart ", error);

        }
    }

    const serveCart = async () => {
        try {
            await axios.post(`/api/v1${API[14]}`, { UserType: (tempUserType || userType) })
                .then((resp) => {
                    setCartProducts(resp.data.data.ProductsInCart);
                    setTotalAmmount(resp.data.data.TotalAmmount);
                    console.log("resp.data.data.ProductsInCart ", resp.data.data.ProductsInCart);
                })
        } catch (error) {
            console.log("Error While Serving From Carts", error);
        }
    }

    const placeOrder = async () => {
        if (loggedIn) {
            try {
            } catch (error) {
            }
        }else{
            navigate("/user/login")
        }
    };

    const cancleOrder = async () => {
        try {
            console.log("cancel order called");
        } catch (error) {
            console.log("error in order cancellation ", error);
        }
    };

    const shareProduct = async () => { };

    const serveProducts = async (pageNumber, filters, UserType) => {
        await axios
            .post(
                `/api/v1/main/serve/products?page=${pageNumber}`,
                { UserType, Filters: filters }
            )
            .then((resp) => {
                console.log("Product is :", resp.data.data.Products)
                setProducts((prev) => [...prev, ...resp.data.data.Products]);
            })
            .catch((error) => {
                console.log("error while hitting serve products ", error);
            });
    };

    const serveFilterProducts = async (pageNumber, filters, UserType) => {
        setPageNumber(0);

        await axios
            .post(
                `/api/v1/main/serve/products?page=${pageNumber}`,
                { UserType, Filters: filters }
            )
            .then((resp) => {
                console.log("Product is :", resp.data.data.Products)
                setProducts(resp.data.data.Products);
            })
            .catch((error) => {
                console.log("error while hitting serve products ", error);
            });
    }

    const selectProduct = async (productId, UserType) => {
        console.log("product id: ", productId);
        try {
            await axios
                .post(`/api/v1/main/serve/selected-product`, {
                    ProductId: productId,
                    UserType: UserType,
                })
                .then((resp) => {
                    setProduct(resp.data.data.Product[0]);
                    setShowCaseImage(resp.data.data.Product[0].FrontImage);
                    navigate("/shop");
                });
        } catch (error) {
            console.log("Error While Selecting :", error);
        }
    };

    const setFilterItems = (attributeName) => {
        setFilterKeys(attributeName)
        filterAttributes?.map((filter) => {
            if (filter.name === attributeName) {
                setFilterAts(filter.attributes);
                // return;
            }
        })
    }

    const setFilterValues = (attributeName, value) => {
        if (attributeName === "Price") {
            filterObject.Price === value ?
                setFilterObject((prev) => ({
                    ...prev,
                    ["Price"]: null
                })) :
                setFilterObject((prev) => ({
                    ...prev,
                    ["Price"]: value
                }))
            return;
        }
        else if (attributeName === "Brand") {
            filterObject.Brand === value ?
                setFilterObject((prev) => ({
                    ...prev,
                    ["Brand"]: null
                })) :
                setFilterObject((prev) => ({
                    ...prev,
                    ["Brand"]: value
                }))

            return;
        }
        else if (attributeName === "NumberOfCameras") {
            filterObject.NumberOfCameras === value ?
                setFilterObject((prev) => ({
                    ...prev,
                    ["NumberOfCameras"]: null
                })) :
                setFilterObject((prev) => ({
                    ...prev,
                    ["NumberOfCameras"]: value
                }))
            return;
        }
        else if (attributeName === "CameraType") {
            filterObject.CameraType === value ?
                setFilterObject((prev) => ({
                    ...prev,
                    ["CameraType"]: null
                })) :
                setFilterObject((prev) => ({
                    ...prev,
                    ["CameraType"]: value
                }))
            return;
        }
        else if (attributeName === "CameraQuality") {
            filterObject.CameraQuality === value ?
                setFilterObject((prev) => ({
                    ...prev,
                    ["CameraQuality"]: null
                })) :
                setFilterObject((prev) => ({
                    ...prev,
                    ["CameraQuality"]: value
                }))
            return;
        }
        else if (attributeName === "MegaPixels") {
            filterObject.MegaPixels === value ?
                setFilterObject((prev) => ({
                    ...prev,
                    ["MegaPixels"]: null
                })) :
                setFilterObject((prev) => ({
                    ...prev,
                    ["MegaPixels"]: value
                }))
            return;
        }
        else if (attributeName === "AreaSize") {
            filterObject.AreaSize === value ?
                setFilterObject((prev) => ({
                    ...prev,
                    ["AreaSize"]: null
                })) :
                setFilterObject((prev) => ({
                    ...prev,
                    ["AreaSize"]: value
                }))
            return;
        }
        else if (attributeName === "IndoorOutdoor") {
            filterObject.IndoorOutdoor === value ?
                setFilterObject((prev) => ({
                    ...prev,
                    ["IndoorOutdoor"]: null
                })) :
                setFilterObject((prev) => ({
                    ...prev,
                    ["IndoorOutdoor"]: value
                }))
            return;
        }

    }

    // FOR MAKE SURE IF USER IS ALREADY AUTHERIZED
    useEffect(()=>{
        checkLoggedIn();
    }, [])

    const data = {
        loggedIn,
        tempUserType,
        setTempUserType,
        showCaseImage,
        setShowCaseImage,
        isFilterOn,
        setIsFilterOn,
        filterObject,
        totalAmmount,
        pageNumber,
        setPageNumber,
        product,
        setProduct,
        cartProducts,
        setCartProducts,
        filters,
        setFilters,
        filterKeys,
        setFilterKeys,
        filterAts,
        setFilterAts,
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
        removeFromCart,
        serveCart,
        placeOrder,
        cancleOrder,
        shareProduct,
        selectProduct,
        serveFilterProducts,
        setFilterValues,
        setFilterItems,
        formData,
    };
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
