let sharePster_model=require("../../model/postes-model/shareOnPostes-model");

module.exports=(socket)=>{
    socket.on("createSharePost",async(data)=>{
        const createShare=await sharePster_model.create(data)
      })
    
}