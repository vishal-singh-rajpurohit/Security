

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
    // User Routes /Api/v1/ 0 - 4
    "/register",
    "/login",
    "/logout",
    "/addinfo",
    "/addid",
    // Common Routes /Api/v1/main
    // Modification 5 , 6
    "/modify/change-password",
    "/modify/change-user-type",
    // Delete 7
    "/main/danger/delete-account",
    // Otp 8, 9
    "/main/otp/send-otp-signup",
    "/main/otp/send-otp-login",
    // Reports 10 , 11 , 12
    "/main/report/new-report",
    "/main/report/set-satisfied",
    "/main/report/get-reviews",
    // Cart 13 , 14 , 15 
    "/main/cart/add-to-cart",
    "/main/cart/serve-cart",
    "/main/cart/remove-from-cart",
    // Order Routes 
    // ENTRY AUTH 16
    "/main/auth/login"
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
    // {
    //     name : "Premium",
    //     attributes: [
    //         ""
    //         "all"
    //     ]
    // },
]