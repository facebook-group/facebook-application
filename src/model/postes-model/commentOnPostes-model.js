const { TEXT } = require("sequelize")
const { STRING } = require("sequelize")
const database=require("../../database/database")

module.exports=database.define("commentOnPostes",{
    commentId:{
        type:TEXT,
        allowNull:false,
        primaryKey:true
    },
    commenterName:{
        type:STRING,
    },
    commenterImage:{
        type:TEXT,
    },
    text:{
        type:STRING,
    },
    commentOnPostId:{
        type:STRING,
    }
})


