const mongoose = require("mongoose");

const newSchema = new mongoose.Schema(
    {
        UserId: {
            type: mongoose.Schema.Types.ObjectId,
            required: "User" || "Dealer" || "Installer"
        },
        CameraType: {
            type: String,
            enum: ["IP", "HD"],
            required: true
        },
        MegaPixels: {
            type: Number,
            required: true
        },
        IndoorCam: {
            type: Number,
            required: true
        },
        OutdoorCam: {
            type: Number,
            required: true
        },
        Channels: {
            type: Number,
            required: true
        },
        HardDisk: {
            type: Number,
            required: true
        },
        Area: {
            type: String,
            enum: ["SMALL", "MEDIUM", "LARGE"],
            required: true
        },
        STATUS: {
            type: String,
            enum: ["PENDING", "REVIEWING", "CONFORMED", "CANCELLED"],
            default: "PENDING",
            required: true
        }

    },
    {
        timeseries: true,
        timestamps: true
    }
);

const Custom = mongoose.model("customOrders", newSchema);
module.exports = Custom;