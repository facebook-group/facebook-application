module.exports=(socket,io)=>{
    socket.on("vedioCallRoom",(data)=>{
        socket.join(data.regusterid)
    })

    //get request from any user want to create vedio call
    socket.on("requestPeerId",(data)=>{
        //send the data for another clinet 
        socket.to(data.accept_Request_Id).emit("get-vedioCall-request",data)
    })

    //the answer for the another clinet 
    socket.on("answer-the-request-vedio-call",(data)=>{
        //the answer send person do the request
        socket.to(data.Send_Request_Id).emit("accept-status-reject-or-accept",data)
    })


    socket.emit("soketio-id", socket.id)

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	})

	socket.on("callUser", (data) => {
        socket.broadcast.emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})



    
}