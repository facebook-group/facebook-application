const Update_role_model=require("../../../model/reguster_model/Update-role-model")

module.exports=async(req,res)=>{
    const updateRole=await Update_role_model.findAll()
    res.json(updateRole)
}