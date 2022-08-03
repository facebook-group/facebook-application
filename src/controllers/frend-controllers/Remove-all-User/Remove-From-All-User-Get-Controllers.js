const reguster_modle=require("../../../model/reguster_model/reguster_model");
const AllFrindStatus_model=require("../../../model/frrind-section/allfrind-model");



module.exports=async(req,res)=>{

    const data=await reguster_modle.findAll(
        {
            include:[
                {model:AllFrindStatus_model,attributes:["idfreand"]},
            ]
            ,where:{regusterid: req.params.regusterid }
        }
    )


    //we will push all idfrend in the array of all delete element in all user
    let Data_Will_Send=[]
    data[0]. dataValues.allfrinds.forEach((a)=>{
        Data_Will_Send.push(Object.values(a.dataValues)[0])
    })

    res.json(Data_Will_Send)
}