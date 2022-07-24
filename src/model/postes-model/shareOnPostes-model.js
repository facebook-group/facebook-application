const { TEXT } = require("sequelize")
const { STRING } = require("sequelize")
const database=require("../../database/database")

module.exports=database.define("sahreOnPostes",{
    shareId:{
        type:TEXT,
        allowNull:false,
        primaryKey:true
    },
    personShareName:{
        type:STRING,
    },
    personShareImage:{
        type:TEXT,
    },
    text:{
        type:STRING,
    },
    sharePostId:{
        type:STRING,
    }
})


