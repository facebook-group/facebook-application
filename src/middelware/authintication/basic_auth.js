"use strict";

//requre element section
const base64 = require("base-64");
const reguster_model = require("../../model/reguster_model/reguster_model");
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
  let basicHeaderParts = req.body.headers.authorization.split(" ");
  let encodedString = basicHeaderParts.pop();
  let decodedString = base64.decode(encodedString);
  let [email, password] = decodedString.split(":");

  try {
    const user = await reguster_model.findOne({ where: { email: email } });

    const valid = await bcrypt.compare(password, user.password);

    if (user.verification !== "done") {
      return res.json({
        varification: "You Are Not Verify",
        email: user.email,
        varificationPass: user.verification,
      });
    }
    if (valid) {
      req.basicAuth = user;
      next();
    } else {
      res.json({ accessToken: "Error Email Or Password" });
    }
  } catch (error) {
    res.status(403);
    res.send("Error Email Or Password");
  }
};
