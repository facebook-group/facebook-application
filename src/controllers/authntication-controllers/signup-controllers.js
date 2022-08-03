"use strict";
//required the model will create and bycrebt for hashing
const bcrypt = require("bcrypt");
const reguster_model = require("../../model/reguster_model/reguster_model");

module.exports = async (req, res, next) => {
  const {
    fullName,
    password,
    uploadImage,
    email,
    gender,
    phoneNumber,
    place,
    regusterid,
    role,
  } = req.body.alldata;

  try {
    let hashPassword = await bcrypt.hash(password, 10);

    let user = await reguster_model.findOne({ where: { email: email } });

    if (user) {
      res.json({ status: "Email Is Taken" });
    }

    if (!user) {
      let newRecord = await reguster_model.create({
        fullName: fullName,
        password: hashPassword,
        image: uploadImage,
        email: email,
        gender: gender,
        place: place.country,
        regusterid: regusterid,
        phoneNumber: phoneNumber,
        role: role,
      });

      res.json({ status: "Email Is ok" });
      res.status(201);
    }
  } catch (err) {
    res.status(403).send("There Is Problem In Register");
  }
};
