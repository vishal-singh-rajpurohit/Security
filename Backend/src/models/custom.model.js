const mongoose = require("mongoose");

const newSchema = new mongoose.Schema(
    {
        UserId: {
            type: mongoose.Schema.Types.ObjectId,
            require: "User" || "Dealer" || "Installer"
        },
        CameraType: {
            type: String,
            enum: ["IP", "HD"],
            require: true
        },
        MegaPixels: {
            type: Number,
            require: true
        },
        IndoorCam: {
            type: Number,
            require: true
        },
        OutdoorCam: {
            type: Number,
            require: true
        },
        Channels: {
            type: Number,
            require: true
        },
        HardDisk: {
            type: Number,
            require: true
        },
        Area: {
            type: String,
            enum: ["SMALL", "MEDIUM", "LARGE"],
            require: true
        },
        STATUS: {
            type: String,
            enum: ["PENDING", "REVIEWING", "CONFORMED", "CANCELLED"],
            default: "PENDING",
            require: true
        }

    },
    {
        timeseries: true,
        timestamps: true
    }
);

const Custom = mongoose.model("customOrders", newSchema);
module.exports = Custom;