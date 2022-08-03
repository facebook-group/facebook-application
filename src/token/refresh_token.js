const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = createRefreshToken = (user) =>
  jwt.sign(
    {
      fullName: user.fullName,
      image: user.image,
      regusterid: user.regusterid,
      role: user.role,
    },

    process.env.REFRESH_TOKEN_SECRET,

    { expiresIn: "7d" }
  );
