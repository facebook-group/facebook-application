'use strict';
// used to join a room
module.exports=(socket)=>{
    socket.on("JoinToRoom",(data)=>{
        socket.join(data)
    })
}