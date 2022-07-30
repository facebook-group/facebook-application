'use strict';

module.exports=(socket)=>{
    socket.on("JoinToRoom",(data)=>{
        socket.join(data)
    })
}