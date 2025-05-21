require("dotenv").config();
const { Resend } = require('resend');
const nodemailer = require("nodemailer");
const ApiError = require("../../../utils/ApiError.utils");

const {
  verificationTemplate,
  orderVerificationTemplate,
  cancelOrderTemplate,
} = require("./mailTemplates");



const resend = new Resend(process.env.RESEND_API_KEY);

const transport = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODE_MAIL_ADDRESS,
    pass: process.env.NODE_MAIL_PASSWORD,
  },
});

const sendVerificationEmail = async (email, refreshToken) => {
  const mailOptions = {
    from: 'Wing’s Lens Verification <noreply@wingslens.shop>',
    to: email,
    subject: "Verify your Wing's Lens account. :,",
    text: `Verify your Wing's Lens account by clicking the button below:`,
    html: verificationTemplate(refreshToken),
  };

  try {
    const sendResult = await resend.emails.send(mailOptions);

    if (!sendResult) {
      throw new ApiError(400, "Email does not sent successfully");
    }

    console.log("Email sent successfully");
    return sendResult;
  } catch (error) {
    throw new ApiError(500, "Error While Sharing Email");
  }
};

const orderVerificationEmail = async (
  email,
  orderId,
  productTitle,
  qunatity = 1,
  price,
  Location
) => {
  const mailOptions = {
    from: "datasecourity@gmail.com",
    to: email,
    subject: "Verify your Order on Wing's Lens. :,",
    text: `Conform your Order on Wing's Lens by clicking the button below:`,
    html: orderVerificationTemplate(
      orderId,
      productTitle,
      qunatity,
      price,
      Location
    ),
  };

  try {
    const sendResult = await transport.sendMail(mailOptions);

    if (!sendResult) {
      throw new ApiError(400, "Email does not sent successfully");
    }

    console.log("Email sent successfully");
    return sendResult;
  } catch (error) {
    throw new ApiError(500, "Error While Sharing Email");
  }
};

const sendCancellationEmail = async (
  email,
  orderId,
  productTitle,
  qunatity = 1,
  price,
  Location
) => {
  
  const mailOptions = {
    from: "datasecourity@gmail.com",
    to: email,
    subject: "Cancel your Order on Wing's Lens. :,",
    text: `Conform Order Cancellation on Wing's Lens by clicking the button below:`,
    html: cancelOrderTemplate(orderId, productTitle, qunatity, price, Location),
  };

  try {
    const sendResult = await transport.sendMail(mailOptions);

    if (!sendResult) {
      throw new ApiError(400, "Email does not sent successfully");
    }

    console.log("Email sent successfully");

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
