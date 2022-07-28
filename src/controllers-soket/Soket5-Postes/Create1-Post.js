
let Post_model=require("../../model/postes-model/post-model");


module.exports=(socket,io)=>{
    socket.on("create_postes",async(data)=>{
        const createPost=await Post_model.create(data);
        io.emit("display_postes",createPost)
      })
    
}