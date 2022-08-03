const express = require('express')
const router = express.Router()

//BASIQ AUTH REQUIRE
const basic_auth=require("../../middelware/authintication/basic_auth")
const bearer_auth=require("../../middelware/authintication/barear_auth")



//ALL MEDILWARE FUNCTION ARE USE
const signin_controllers=require("../../controllers/authntication-controllers/signin-signout-signup/signin-controllers");
const signup_controllers=require("../../controllers/authntication-controllers/signin-signout-signup/signup-controllers");
const signout_controllers=require("../../controllers/authntication-controllers/signin-signout-signup/logout-controllers")

//ALL ROUTES ARE USED
router.post("/signin",basic_auth,signin_controllers)
router.post("/signup",signup_controllers);
router.post("/signout",signout_controllers)



//create The Refresh Token
const refresh_token=require("../../controllers/authntication-controllers/refresh-token-controllers")
router.post("/refreshtoken",refresh_token)


//get all information for the user
const getAllData_user_controllers=require("../../controllers/authntication-controllers/getalldata-user-controlles")
router.get("/user/:data",getAllData_user_controllers);


//validation check 
const ModemailerControllers=require("../../controllers/authntication-controllers/nodemailr-validation/Nodemailer-controllaers")
const ValidationCheck=require("../../controllers/authntication-controllers/nodemailr-validation/validationCheck")
router.post('/Nodemailer',ModemailerControllers)
router.post("/validationcheck",ValidationCheck)




const Get_allupdate_role=require("../../controllers/authntication-controllers/update-data-user/get-all-update-role-controlles")
router.get("/getallupdaterole",Get_allupdate_role)





module.exports=router