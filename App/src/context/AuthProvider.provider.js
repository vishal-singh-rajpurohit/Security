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
    const [profileOptions, setProfileOptions] = useState(true);
    const [openSignup, setOpenSignup] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)

    // PRODUCTS AND FILTER
    const [products, setProducts] = useState([]);
    const [proProducts, setProProducts] = useState([]);
    const [product, setProduct] = useState();
    const [cartProducts, setCartProducts] = useState();
    const [orders, setOrders] = useState([]);
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
    const userState = useSelector((state) => state.user.state)
    const userUpiNumber = useSelector((state) => state.user.upiMobileNumber);
    const userTotalOrders = useSelector((state) => state.user.totalOrders);
    const userPendingOrders = useSelector((state) => state.user.pendingOrders);
    const userTotalEarnings = useSelector((state) => state.user.totalEarnings);
    const userCraditPayments = useSelector((state) => state.user.craditPayments);
    const userActiveOrders = useSelector((state) => state.user.activeOrders);

    const requestUserType = setUserRoutes(tempUserType);

    const checkLoggedIn = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_API}/main/auth/refresh-Tokens`, {})
                .then((resp) => {
                    console.log("User is Already logged in :", resp)
                })
        } catch (error) {
            // console.log("User is not logged in :", error)
        }
    }

    const sendRegistrationOtp = async (Email, Password) => {

        try {
            await axios
                .post(`${process.env.REACT_APP_API}${API[9]}`, {
                    Email: Email,
                    Password: Password,
                })
                .then((resp) => {

                });
        } catch (error) {
            console.log("got error while hitting register otp ", error);
        }
    };

    const sendLoginOtp = async (Email, Password) => {
        try {
            await axios
                .post(`${process.env.REACT_APP_API}${API[10]}`, {
                    Email: Email,
                    Password: Password,
                })
                .then((resp) => {
                    console.log("otp sent Successfully for Login", resp);
                });
        } catch (error) {
            console.log("got error while hitting Login otp ", error);
        }
    };

    const register = async (Otp, FirstName, LastName, Email, Password, ConformPassword) => {
        try {
            await axios.post(`${process.env.REACT_APP_API}${API[0]}`,
                {
                    Otp: Otp,
                    FirstName: FirstName,
                    LastName: LastName,
                    Email: Email,
                    UserType: tempUserType,
                    Password: Password,
                    ConformPassword: ConformPassword,
                },
                {
                    headers: {
                        "Content-Type": "application/json" // Axios handles boundaries automatically
                    },
                    withCredentials: true
                },
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
                    setOpenSignup(false);
                    setOpenLogin(false);
                });
        } catch (error) {
            console.log("error while submitting otp in registration function ", error);
        }
    };

    const login = async (Otp, Email, Password) => {
        try {
            await axios
                .post(`${process.env.REACT_APP_API}${API[1]}`, {
                    Otp: Otp,
                    Email: Email,
                    Password: Password,
                }, { withCredentials: true })
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
                        State,
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
                            userState: State || '',
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

                    setOpenLogin(false);
                    setOpenSignup(false);

                });
        } catch (error) {
            console.log("error while submitting login otp", error);
        }
    };

    const logout = async () => {
        try {
            await axios
                .post(`${process.env.REACT_APP_API}${API[2]}`, {}, { withCredentials: true })
                .then((resp) => {
                    dispatch(clearUserDetails());
                    dispatch(reverseLogin({
                        status: false
                    }))
                    setOpenLogin(false);
                    setOpenSignup(false);
                    navigate("/");
                });
        } catch (error) {
            console.log("Error in Logout", error);
        }
    };

    const deleteAccount = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_API}${API[8]}`, {})
                .then((resp) => {
                    dispatch(
                        clearUserDetails()
                    );
                })
        } catch (error) {
            console.log("Somthing Went Wrong While Deleting :", error);
        }
    };

    const addToCart = async (productId) => {
        if (loggedIn) {
            try {
                await axios.post(`${process.env.REACT_APP_API}${API[14]}`,
                    { ProdcutId: productId },
                    {
                        withCredentials: true,
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                    .then((resp) => {
                        console.log("added to cart");
                    })
            } catch (error) {
                console.log("error while add to cart the product :", error);
            }
        } else {
            setOpenSignup(true)
        }
    };

    const removeFromCart = async (cartID) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API}${API[16]}?id=${cartID}`)
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
            await axios.post(`${process.env.REACT_APP_API}${API[15]}`, { UserType: (tempUserType || userType) }, {
                withCredentials: true
            })
                .then((resp) => {
                    setCartProducts(resp.data.data.ProductsInCart);
                    setTotalAmmount(resp.data.data.TotalAmmount);
                    console.log("resp.data.data.ProductsInCart ", resp.data.data.ProductsInCart);
                })
        } catch (error) {
            console.log("Error While Serving From Carts", error);
        }
    }

    const placeOrder = async (ProductId) => {
        if (loggedIn) {
            try {
                await axios.post(`${process.env.REACT_APP_API}${API[19]}`, {
                    ProductId: ProductId
                }, {
                    withCredentials: true
                }).then((resp) => {
                    console.log("Order Placed Successfully ", resp);
                })
            } catch (error) {
                console.log("Errir While Placing Orders ", error);

            }
        } else {
            setOpenSignup(true);
        }
    };

    const getOrders = async () => {
        if (!loggedIn) {
            setOpenSignup(true)
        } else {
            try {
                await axios.post(`${process.env.REACT_APP_API}${API[20]}`, {}, {
                    withCredentials: true
                })
                    .then((resp) => {
                        console.log("Here are All Orders ", resp.data.data.Orders);
                        setOrders(resp.data.data.Orders);
                        navigate("/user/Orders")
                    })
            } catch (error) {
                console.log("error while getting orders ", error);
            }
        }

    }

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
                `${process.env.REACT_APP_API}/main/serve/products?page=${pageNumber}`,
                { UserType, Filters: filters }
            )
            .then((resp) => {
                console.log("Product is :", resp.data.data.Products);
                console.log("resp.data.data.Products[resp.data.data.Products.length - 1]._id :", resp.data.data.Products[resp.data.data.Products.length - 1]);

                if (products.length !== 0 && products[products.length - 1]._id === resp.data.data.Products[resp.data.data.Products.length - 1]._id) {
                    console.log("Product Over")
                } else {
                    setProducts((prev) => [...prev, ...resp.data.data.Products]);
                    console.log("Product Updated")
                }
            })
            .catch((error) => {
                console.log("error while hitting serve products ", error);
            });
    };

    const servePremium = async (UserType) => {
        try {
            await axios
                .post(`${process.env.REACT_APP_API}${API[18]}`, { UserType })
                .then((resp) => {
                    console.log("Product Premium resp is :", resp.data.data.Products);
                    setProProducts(resp.data.data.Products)
                    console.log("Product Premium is :", proProducts)
                })
        } catch (error) {
            console.log("premium Products route ", `${process.env.REACT_APP_API}${API[17]}`)
            console.log("error while hitting serve Premium products ", error);
        }
    };

    const serveFilterProducts = async (pageNumber, filters, UserType) => {
        setPageNumber(0);

        await axios
            .post(
                `${process.env.REACT_APP_API}/main/serve/products?page=${pageNumber}`,
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
        try {
            await axios
                .post(`${process.env.REACT_APP_API}/main/serve/selected-product`, {
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
    useEffect(() => {
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
        openSignup,
        setOpenSignup,
        openLogin,
        setOpenLogin,
        pageNumber,
        setPageNumber,
        product,
        setProduct,
        proProducts,
        setProProducts,
        cartProducts,
        setCartProducts,
        filters,
        setFilters,
        filterKeys,
        profileOptions,
        setProfileOptions,
        setFilterKeys,
        filterAts,
        setFilterAts,
        products,
        orders,
        setOrders,
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
        userState,
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
        getOrders,
        cancleOrder,
        shareProduct,
        selectProduct,
        serveFilterProducts,
        setFilterValues,
        setFilterItems,
        servePremium,
        formData,
    };
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
