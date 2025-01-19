const Installer = require("./models/installer.model");
const User = require("./models/user.model");
const Dealer = require("./models/dealer.model");
const ApiError = require("./utils/ApiError.utils");

const limit = 15;
const Options = {
  httpOnly: true,
  secure: false, // turn true in production
  sameSite: 'lax',
  path: '/'
};

const genreateId = () => {
  const id = Math.round(
    Math.random() * 10000000000 + Math.random() * 10000000000
  );
  return id;
};

const paginate = (pageNumber, limit) => {
  if (pageNumber === 0 || pageNumber === null) {
    let skipped = 0;
    return skipped;
  } else {
    let skipped = (pageNumber - 1) * limit;
    return skipped;
  }
};

const genreateOtp = () => {
  const otp = Math.round(Math.random() * 1000000);
  return otp;
};
const checkUserType = (userType) => {
  let Model;

  switch (userType) {
    case "CUSTOMER":
      Model = User;
      break;

    case "DEALER":
      Model = Dealer;
      break;

    case "INSTALLER":
      Model = Installer;
      break;

    default:
      throw new ApiError(400, "Wrong Type Of User");
  }

  return Model;
};

module.exports = { genreateId, checkUserType, Options, limit, genreateOtp, paginate };
