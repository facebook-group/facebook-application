const { TEXT } = require("sequelize")
const { STRING } = require("sequelize")
const database=require("../../database/database")

const  postes_model=database.define("posts",{
    postId:{
        type:TEXT,
        allowNull:false,
        primaryKey:true
    },
    publisherName:{
        type:STRING,
    },
    publisherImage:{
      type:TEXT,
    },
    text:{
        type:STRING,
    },
    image:{
        type:TEXT,
    },
    personDoPostId:{
        type:STRING,
    }
})


//---------------------------------------------all relation on postes ------------------------------------//

const commentOnPost_model=require("../postes-model/commentOnPostes-model")
const shareOnPostes_model=require("../postes-model/shareOnPostes-model")
const likeOnPostes_model=require("../postes-model/likeOnPsotes-model")

postes_model.hasMany(commentOnPost_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"commentOnPostId",
    sourceKey:"postId"
  })
  commentOnPost_model.belongsTo(postes_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"commentOnPostId",
    targetKey:"postId"
  })


  postes_model.hasMany(shareOnPostes_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"sharePostId",
    sourceKey:"postId"
  })
  shareOnPostes_model.belongsTo(postes_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"sharePostId",
    targetKey:"postId"
  })
  postes_model.hasMany(likeOnPostes_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"post_liked_id",
    sourceKey:"postId"
  })
  likeOnPostes_model.belongsTo(postes_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"post_liked_id",
    targetKey:"postId"
  })

  





module.exports=postes_model