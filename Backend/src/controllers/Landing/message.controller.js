// const MessageLanding = require("../../models/messageLanding.model");
// const asyncHandler = require("../../utils/asyncHandler.utils");
// const ApiError = require("../../utils/ApiError.utils")

// const messagesFromLanding = asyncHandler(async (req, resp) => {
//     const { name, contacts, message } = req.body;

//     if(!name || !contacts || !message){
//         throw new ApiError(400 , "Data Should Provide");
//     }

//     const newMessage = new MessageLanding({
//         name ,
//         contacts,
//         message
//     });

//     await newMessage.save()

//     if(!newMessage){
//         throw new ApiError(400, "unable to save message");
//     }

//     req.status(200)
//     .json(200, {}, "message sent")
// });

// module.exports = messagesFromLanding;