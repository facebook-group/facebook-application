module.exports=(io)=>{
    //---------------------------------------------io section--------------------------------------------------//
    
   io.on("connection",(socket)=>{

    //when clinet connect with the server the server but clinet in the room have the same id of the clinet to easyer connection
      const Join_To_Room_controllers=require("../../controllers-soket/Soket1-Join-To-Room/Join-To-Room")
      Join_To_Room_controllers(socket)
  
  
    //----------------------------------------Online Frend Section ------------------------------------------//
      //use to select all online user when do connect
      const Online_User_Controllers=require("../../controllers-soket/Soket2-Online-Frind/Online-Frind")
      Online_User_Controllers(socket,io)

    //----------------------------------------Notification Frend--------------------------------------------//
    const Accept_Notification_Controllers=require("../../controllers-soket/Soket3-notification/Accept-Notification")
    Accept_Notification_Controllers(socket)
  
    const Delete_Notification_controlles=require("../../controllers-soket/Soket3-notification/Remove-Notification")
    Delete_Notification_controlles(socket)

    const Masseges_Controllers=require("../../controllers-soket/soket4-massages/Massage-Send-Controllers")
    Masseges_Controllers(socket,io)

    
  })
  

}