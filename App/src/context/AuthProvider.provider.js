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
        price: null,
        brand: null,
        number_of_cameras: null,
        camera_type: null,
        camera_quality: null,
        indoor_outdoor: null,
        mp: null,
        area_size: null,
        premium: false
    });

    const [filters, setFilters] = useState(filterObject);
    const [filterKeys, setFilterKeys] = useState("");
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
            await axios
                .post(`/api/v1/${requestUserType}${API[2]}`, {})
                .then((resp) => {
                    dispatch(clearUserDetails());
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
        try {
            await axios.post(`/api/v1${API[13]}`, { ProdcutId: productId })
                .then((resp) => {
                    console.log("added to cart");
                })
        } catch (error) {
            console.log("error while add to cart the product :", error);
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
        try {
            console.log("place orders called");
        } catch (error) {
            console.log("error while add to cart the product :", error);
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

    const serveProducts = async (pageNumber, isFilterOn, filters, UserType) => {
        await axios
            .post(
                `/api/v1/main/serve/products?page=${pageNumber}&filteron=${isFilterOn}`,
                { UserType }
            )
            .then((resp) => {
                console.log("Product is :", resp.data.data.Products)
                setProducts((prev) => [...prev, ...resp.data.data.Products]);
            })
            .catch((error) => {
                console.log("error while hitting serve products ", error);
            });
    };

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
                return;
            }
        })
    }

    const setFilterValues = (attributeName, value) => {
        if (attributeName === "price") {
            filterObject.price === value ?
                setFilterObject((prev) => ({
                    ...prev,
                    ["price"]: null
                })) :
                setFilterObject((prev) => ({
                    ...prev,
                    ["price"]: value
                }))
            return;
        }
        else if (attributeName === "brand") {
            filterObject.brand === value ?
                setFilterObject((prev) => ({
                    ...prev,
                    ["brand"]: null
                })) :
                setFilterObject((prev) => ({
                    ...prev,
                    ["brand"]: value
                }))

            return;
        }
        else if (attributeName === "number_of_cameras") {
            filterObject.number_of_cameras === value ?
                setFilterObject((prev) => ({
                    ...prev,
                    ["number_of_cameras"]: null
                })) :
                setFilterObject((prev) => ({
                    ...prev,
                    ["number_of_cameras"]: value
                }))
            return;
        }
        else if (attributeName === "camera_type") {
            filterObject.camera_type === value ?
                setFilterObject((prev) => ({
                    ...prev,
                    ["camera_type"]: null
                })) :
                setFilterObject((prev) => ({
                    ...prev,
                    ["camera_type"]: value
                }))
            return;
        }
        else if (attributeName === "camera_quality") {
            filterObject.camera_quality === value ?
                setFilterObject((prev) => ({
                    ...prev,
                    ["camera_quality"]: null
                })) :
                setFilterObject((prev) => ({
                    ...prev,
                    ["camera_quality"]: value
                }))
            return;
        }
        else if (attributeName === "mp") {
            filterObject.mp === value ?
                setFilterObject((prev) => ({
                    ...prev,
                    ["mp"]: null
                })) :
                setFilterObject((prev) => ({
                    ...prev,
                    ["mp"]: value
                }))
            return;
        }
        else if (attributeName === "area_size") {
            filterObject.area_size === value ?
                setFilterObject((prev) => ({
                    ...prev,
                    ["area_size"]: null
                })) :
                setFilterObject((prev) => ({
                    ...prev,
                    ["area_size"]: value
                }))
            return;
        }
        else if (attributeName === "indoor_outdoor") {
            filterObject.indoor_outdoor === value ?
                setFilterObject((prev) => ({
                    ...prev,
                    ["indoor_outdoor"]: null
                })) :
                setFilterObject((prev) => ({
                    ...prev,
                    ["indoor_outdoor"]: value
                }))
            return;
        }
        else if (attributeName === "premium") {
            filterObject.premium === value ?
                setFilterObject((prev) => ({
                    ...prev,
                    ["premium"]: null
                })) :
                setFilterObject((prev) => ({
                    ...prev,
                    ["premium"]: value
                }))
            return;
        }

    }

    const submitFilter = async () =>{

    }

    
    useEffect(()=>{
        console.log("product_id ");
        products.map((item , index)=>{
            console.log("item: ", item, " index ", index);
        })
    })


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
        setFilterValues,
        setFilterItems,
        formData,
    };
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
