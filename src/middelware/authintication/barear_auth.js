"use strict";
require("dotenv").config();
const jwt = require("jsonwebtoken");
const reguster_model = require("../../model/reguster_model/reguster_model");

module.exports = async (req, res, next) => {
  try {
    if (!req.body.headers.authorization) {
      return res.send("You are not authorized  please set the barear ");
    }

    if (req.body.headers.authorization) {
      var token = req.body.headers.authorization.split(" ")[1];

      const parsedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      const user = await reguster_model.findOne({
        where: { email: parsedToken.email },
      });

      req.baererUser = user;
      next();
    }
  } catch (e) {
    res.status(403);
    res.send("Invalid Authrization");
  }
};
