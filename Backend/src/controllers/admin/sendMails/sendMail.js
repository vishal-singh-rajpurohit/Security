require("dotenv").config();
const nodemailer = require("nodemailer");
const Otp = require("../../../models/otp.model");
const asyncHandler = require("../../../utils/asyncHandler.utils");
const ApiError = require("../../../utils/ApiError.utils");

const {
  verificationTemplate,
  orderVerificationTemplate,
  cancelOrderTemplate,
} = require("./mailTemplates");

const transport = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODE_MAIL_ADDRESS,
    pass: process.env.NODE_MAIL_PASSWORD,
  },
});

const sendOtp = async (email, otp) => {
  const emailHtml = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: #0066cc;">Welcome to Our Data Security</h1>
        <p>Here is your Otp <h1>${otp}</h1></p>
        <ul>
          <li><a href="https://example.com/profile" style="color: #0066cc; text-decoration: none;">Check Our terms and conditions</a></li>
          <li><a href="https://example.com/docs" style="color: #0066cc; text-decoration: none;">Read the documentation</a></li>
          <li><a href="https://example.com/support" style="color: #0066cc; text-decoration: none;">Contact support</a></li>
        </ul>
        <p>Feel free to reach out if you have any questions.</p>
      </div>
`;
  const mailOptions = {
    from: "datasecourity@gmail.com",
    to: email,
    subject: "Your Verification Email :,",
    text: `Your Otp is : ${otp}`,
    html: emailHtml,
  };

  try {
    const sendResult = await transport.sendMail(mailOptions);

    if (!sendResult) {
      console.log("otp not saved ", savedOtp);
      throw new ApiError(400, "error in send result");
    }

    const newOtp = new Otp({
      Otp: otp,
    });

    const savedOtp = await newOtp.save();

    if (!savedOtp) {
      throw new ApiError(400, "otp not saved ");
    }

    return sendResult;
  } catch (e) {
    throw new ApiError(500, "Error While Sharing Email");
  }
};

const sendOtpVerifiaction = async (email, otp) => {
  const emailHtml = `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: #0066cc;">Welcome to Our Data Security</h1>
        <p>Here is your Verification Otp <h1>${otp}</h1></p>
        <ul>
          <li><a href="https://example.com/profile" style="color: #0066cc; text-decoration: none;">Check Our terms and conditions</a></li>
          <li><a href="https://example.com/docs" style="color: #0066cc; text-decoration: none;">Read the documentation</a></li>
          <li><a href="https://example.com/support" style="color: #0066cc; text-decoration: none;">Contact support</a></li>
        </ul>
        <p>Feel free to reach out if you have any questions.</p>
      </div>`;

  const mailOptions = {
    from: "datasecourity@gmail.com",
    to: email,
    subject: "Your Verification Email :,",
    text: `Your Otp is : ${otp}`,
    html: emailHtml,
  };
  try {
    const sendResult = await transport.sendMail(mailOptions);

    if (!sendResult) {
      console.log("otp not saved ", savedOtp);
      throw new ApiError(400, "error in send result");
    }

    const newOtp = new Otp({
      Otp: otp,
    });

    const savedOtp = await newOtp.save();

    console.log("mail saved:", savedOtp);

    if (!savedOtp) {
      console.log("otp not saved ", savedOtp);

      throw new ApiError(400, "otp not saved ");
    }

    return sendResult;
  } catch (e) {
    throw new ApiError(500, "Error While Sharing Email");
  }
};

const sendMail = asyncHandler(async (email, data) => {
  const mailOptions = {
    from: "datasecourity@gmail.com",
    to: email,
    subject: "Your Verification Email :,",
    text: `${data.message}`,
    // html: `data.html`,
  };

  try {
    await transport.sendMail(mailOptions);
    console.log("message Sent Successfully: ", email);
  } catch (e) {
    throw new ApiError(500, "Error While Sharing Email");
  }
});

const sendVerificationMail = async (email, mailCode) => {
  const emailHtml = `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: #0066cc;">Welcome to Our Data Security</h1>
        <p>Click here to Verify <h1><a href=${`http://localhost:3000/verify?token=` + mailCode}>Click here</a></h1></p>
        <ul>
          <li><a href="https://example.com/profile" style="color: #0066cc; text-decoration: none;">Check Our terms and conditions</a></li>
          <li><a href="https://example.com/docs" style="color: #0066cc; text-decoration: none;">Read the documentation</a></li>
          <li><a href="https://example.com/support" style="color: #0066cc; text-decoration: none;">Contact support</a></li>
        </ul>
        <p>Feel free to reach out if you have any questions.</p>
      </div>`;

  const mailOptions = {
    from: "datasecourity@gmail.com",
    to: email,
    subject: "Your Verification Email :,",
    text: `${"http://localhost:3000/verify?token=" + mailCode}`,
    html: emailHtml,
  };
  try {
    const result = await transport.sendMail(mailOptions);

    if (!result) {
      console.log("mail not sent ", result);
      throw new ApiError(400, "mail not sent");
    }

    return result;
  } catch (error) {
    console.log("error in sending verify User ", error);
  }
};

const sendVerificationEmail = async (email, user) => {
  const mailOptions = {
    from: "datasecourity@gmail.com",
    to: email,
    subject: "Verify your Wing's Lens account. :,",
    text: `Verify your Wing's Lens account by clicking the button below:`,
    html: verificationTemplate,
  };

  try {
    const sendResult = await transport.sendMail(mailOptions);

    if (!sendResult) {
      throw new ApiError(400, "Email does not sent successfully");
    }

    return sendResult;
  } catch (error) {
    throw new ApiError(500, "Error While Sharing Email");
  }
};

const orderVerificationEmail = async (email, user) => {
  const mailOptions = {
    from: "datasecourity@gmail.com",
    to: email,
    subject: "Verify your Order on Wing's Lens. :,",
    text: `Conform your Order on Wing's Lens by clicking the button below:`,
    html: orderVerificationTemplate,
  };

  try {
    const sendResult = await transport.sendMail(mailOptions);

    if (!sendResult) {
      throw new ApiError(400, "Email does not sent successfully");
    }

    return sendResult;
  } catch (error) {
    throw new ApiError(500, "Error While Sharing Email");
  }
};

const sendCancellationEmail = async (email, user) => {
  const mailOptions = {
    from: "datasecourity@gmail.com",
    to: email,
    subject: "Cancel your Order on Wing's Lens. :,",
    text: `Conform Order Cancellation on Wing's Lens by clicking the button below:`,
    html: cancelOrderTemplate,
  };

  try {
    const sendResult = await transport.sendMail(mailOptions);

    if (!sendResult) {
      throw new ApiError(400, "Email does not sent successfully");
    }

    return sendResult;
  } catch (error) {
    throw new ApiError(500, "Error While Sharing Email");
  }
};

module.exports = {
  sendVerificationEmail,
  orderVerificationEmail,
  sendCancellationEmail,
};
