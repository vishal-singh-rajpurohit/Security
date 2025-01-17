const userAttributes = [
    {
        userType : customer,
        attributes: [
            {
                title: "Enter Your First Name",
                name: "FirstName",
                type: "text"
            },
            {
                title: "Enter Your Last Name",
                name: "LastName",
                type: "text"
            },
            {
                title: "Enter Your Mobile Number",
                name: "MobileNumber",
                type: "number"
            },
            {
                title: "Enter Your Email",
                name: "Email",
                type: "email"
            },
        ]
    },
    {
        userType : dealer,
        attributes: [
            {
                title: "Enter Your Image",
                name: "image",
                type: "file"
            },
            {
                title: "Enter Your First Name",
                name: "FirstName",
                type: "text"
            },
            {
                title: "Enter Your Last Name",
                name: "LastName",
                type: "text"
            },
            {
                title: "Enter Your Mobile Number",
                name: "MobileNumber",
                type: "number"
            },
            {
                title: "Enter Your Email",
                name: "Email",
                type: "email"
            },
        ]
    },
]

export default userAttributes;