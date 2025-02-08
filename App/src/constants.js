

export const setUserRoutes = (UserType) => {
    switch (UserType) {
        case "CUSTOMER":
            return "user"

        case "DEALER":
            return "dealer"

        case "INSTALLER":
            return "installer"
        default:
            console.log(UserType, "Error in setting");
            break;
    }
}


export const API = [
    // User Routes /Api/v1/ 0 - 5
    "/user/register",
    "/user/login",
    "/user/logout",
    "/user/addinfo",
    "/user/orderInfo",
    "/user/becomeUser",
    // Common Routes /Api/v1/main
    // Modification 6 , 7
    "/modify/change-password",
    "/modify/change-user-type",
    // Delete 8
    "/main/danger/delete-account",
    // Otp 9 , 10
    "/main/otp/send-otp-signup",
    "/main/otp/send-otp-login",
    // Reports  11 , 12 , 13
    "/main/report/new-report",
    "/main/report/set-satisfied",
    "/main/report/get-reviews",
    // Cart 14 , 15 , 16
    "/main/cart/add-to-cart",
    "/main/cart/serve-cart",
    "/main/cart/remove-from-cart",
    // Order Routes 
    // ENTRY AUTH 17
    "/main/auth/login",
    // PREMIUM PRODUCTS 18
    "/main/serve/premium-products",
    // ORDERS 19 20
    "/orders/place-order",
    "/orders/get-my-orders",
    // MAIN PRODUCTS 21
    "/main/serve/products",
    // CANCLE ORDER 22
    "/orders/cancle-orders",
    // VERIFICATION MAIL 23 24
    "/user/verification-mail",
    "/user/validate-user"

]

export const filterAttributes = [
    {
        name : "Price",
        attributes: [
            5000,
            7000,
            10000,
            15000,
            20000,
            25000
        ]
    },
    {
        name : "Brand",
        attributes: [
            "brand 1",
            "brand 2",
            "brand 3",
            "brand 4",
        ]
    },
    {
        name : "NumberOfCameras",
        attributes: [
            3,
            5,
            8,
            10,
            15,
            20
        ]
    },
    {
        name : "CameraType",
        attributes: [
            "DOME",
            "BULLET"
        ]
    },
    {
        name : "CameraQuality",
        attributes: [
            "HD",
            "IP"
        ]
    },
    {
        name : "MegaPixels",
        attributes: [
            8,
            10,
            12
        ]
    },
    {
        name : "AreaSize",
        attributes: [
            "SMALL",
            "MEDIUM",
            "LARGE"
        ]
    },
    {
        name : "IndoorOutdoor",
        attributes: [
           "INDOOR",
           "OUTDOOR",
        ]
    },
]