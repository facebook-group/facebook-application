module.exports = (socket, io) => {
  //to every clinet join to room some with his id
  socket.on("vedio-call-personid-room", (data) => {
    socket.join(data.regusterid);
  });

  //get request from user want to create vedio call
  socket.on("Vedio-Call-Request", (data) => {
    //send the data for the another clinet
    socket.to(data.accept_Request_Id).emit("get-vedioCall-request", data);
  });

  socket.on("join-chat-room", (data) => {
    socket.join(data.chatId);
  });

  //-------------------------get peer id for accepter and sender -----------------------------------//
  socket.on("peerid-accepter", (data) => {
    socket.to(data.chatId).emit("get-peerid-accepter", data);
  });
};
