
const Notification_model=require("../../model/frrind-section/notification-model")

module.exports=(socket)=>{
  socket.on("delete-notofication",async(data)=>{
        const notification_delete=await Notification_model.destroy({
          where:{PersonAcceptFrendRequest:data.regusterid,id:data.state[1]}
        })
        const datasend=await Notification_model.findAll()
        socket.to(data.regusterid).emit("notification",datasend)
      })
    
}