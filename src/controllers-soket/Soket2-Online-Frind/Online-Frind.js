
let onlineFrind={}//object to save all online frend 

module.exports=(socket,io)=>{
    //use to select all online user when do connect 
    socket.on("isonline",async(id)=>{
        onlineFrind[id]=true;
        io.emit("online-frend",onlineFrind)
        socket.on("disconnect",async () => {
          delete onlineFrind[id] 
          io.emit("online-frend",onlineFrind) 
        })
    
      })
  }