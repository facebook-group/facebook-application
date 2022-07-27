const express = require('express')
const router = express.Router()


//ALL MEDILWARE FUNCTION ARE USE
const signin_controllers=require("../../controllers/authntication-controllers/signin-controllers");
const signup_controllers=require("../../controllers/authntication-controllers/signup-controllers");
const refresh_token=require("../../controllers/authntication-controllers/refresh-token-controllers")

const signout_controllers=require("../../controllers/authntication-controllers/logout-controllers")

//BASIQ AUTH REQUIRE
const basic_auth=require("../../middelware/authintication/basic_auth")
const bearer_auth=require("../../middelware/authintication/barear_auth")


const getAllData_user_controllers=require("../../controllers/authntication-controllers/getalldata-user-controlles")
//ALL ROUTES ARE USED
router.post("/signin",basic_auth,signin_controllers)
router.post("/signup",signup_controllers);
router.post("/signout",signout_controllers)

//get all information for the user
router.get("/user/:data",getAllData_user_controllers);
//create The Refresh Token
router.post("/refreshtoken",refresh_token)




module.exports=router
