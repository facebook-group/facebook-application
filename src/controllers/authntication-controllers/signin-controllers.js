const reguster_model = require("../../model/reguster_model/reguster_model");

module.exports = async (req, res, next) => {
  const acces_Token = require("../../token/access-token");
  const refresh_token = require("../../token/refresh_token");

  try {
    user = req.basicAuth;

    let accessToken = acces_Token(user);
    let refreshToken = refresh_token(user);

    let addRefreshToken = await reguster_model.update(
      { refreshtoken: refreshToken },
      { where: { email: user.email } }
    );

    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
    });

    res
      .status(200)
      .json({ accessToken: accessToken, refreshToken: refreshToken });
  } catch (error) {
    res.status(403).send("There Is Problem In SignIn");
  }
};
