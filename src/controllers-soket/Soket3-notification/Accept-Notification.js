
const Notification_model=require("../../model/frrind-section/notification-model")

module.exports=(socket)=>{
    socket.on("Send Frend Request To Accepter",async(data)=>{
        const Notification=await Notification_model.create(data)
        const datasend=await Notification_model.findAll()
        //send all notification to the uuser
        socket.to(data.PersonAcceptFrendRequest).emit("notification",datasend)
    })  
}