const express = require('express')
const router = express.Router()


//-----------------------------------All User Section ----------------------------------------------------------//

const All_User_Get_Controllers=require("../../controllers/frend-controllers/All-User/All-User-Get-Controllers")
const All_User_Post_Controllers=require("../../controllers/frend-controllers/All-User/All-User-Post-Controllers");
const All_User_Delete_Controllers=require("../../controllers/frend-controllers/All-User/All-User-Delete-Controllers")



router.get("/alluser",All_User_Get_Controllers);
router.post("/allfrend",All_User_Post_Controllers);
router.delete("/allfrend",All_User_Delete_Controllers);



//-------------------------------All Frend Request ----------------------------------------------------------------//
//Frend Request Section
const Frend_Request_Post_Controllers=require("../../controllers/frend-controllers/Frend-Request/Frend-Request-Post-Controllers")
const Frend_Request_Delete_Controllers=require("../../controllers/frend-controllers/Frend-Request/Frend-Request-Delete-Controllers")


//set the frend request 
router.post("/frendrequest",Frend_Request_Post_Controllers);
router.delete("/frendrequest",Frend_Request_Delete_Controllers);



//---------------------------------My Frind Section --------------------------------------------//
const MyFrend_Post_Controllers=require("../../controllers/frend-controllers/My-Frend/MyFrend-Post-Controllers")


router.post("/frend2",MyFrend_Post_Controllers);
router.post("/frind",MyFrend_Post_Controllers);



//------------------------------------Notification section ----------------------------------------//
const Frend_Get_Notification_Controllers=require("../../controllers/Notification-Frend/Frend-Get-Notification-Controllers")

router.post("/notification/:data",Frend_Get_Notification_Controllers)


//------------------------------------Massages Section ---------------------------------------------//
const Massege_Get_Depend_ChatId_Controllers=require("../../controllers/massage-controllers/Massege-Get-Depend-ChatId-Controllers")
router.get("/allmasages/:chatId",Massege_Get_Depend_ChatId_Controllers)


//-------------------------------------Remove From All User -----------------------------------------//
const Remove_From_All_User_Get_Controllers=require("../../controllers/frend-controllers/Remove-all-User/Remove-From-All-User-Get-Controllers")

router.get("/removefromallfrind/:regusterid",Remove_From_All_User_Get_Controllers)



module.exports=router