const { TEXT } = require("sequelize")
const { STRING } = require("sequelize")
const database=require("../../database/database")

module.exports=database.define("likeOnPostes",{
    person_do_like_id:{
        type:TEXT,
    },
    person_do_like_name:{
        type:STRING,
    },
    person_do_like_image:{
        type:TEXT,
    },
    post_liked_id:{
        type:STRING,
    }
})


