const {STRING,TEXT}=require("sequelize")

const database=require("../../database/database")

const reguster = database.define('updateroles', {

    regusterid:{
      type:STRING,
    },
    fullName: {
      type:STRING,
    },
    updateRole:{
        type:STRING
    },
    image: {
      type: TEXT,
      defaultValue:"https://thumbs.dreamstime.com/z/user-icon-vector-male-person-symbol-profile-circle-avatar-sign-user-icon-vector-male-person-symbol-profile-circle-avatar-sign-115922533.jpg",
  
    },
  }, {
    timestamps: false
  });



module.exports=reguster