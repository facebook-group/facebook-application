const { STRING } = require("sequelize");
const { TEXT } = require("sequelize");
const database=require("../../database/database")
  

const frinds = database.define('frinds', {

  myfrindid:{
    type:STRING,
  },
  fullName: {
      type: STRING,
  },
  image: {
      type: TEXT,
  },
  status: {
      type: STRING,
  },
  frindid: {
      type: STRING,
      allowNull:false
  } ,
  chatId:{
    type:TEXT
  }
  }, {

  });

  
  module.exports =frinds

  const massage=require("../massage-section/massage-model")


  frinds.hasMany(massage,{
    constraints: false,
    timestamps: false,
    foreignKey:"chatId",
    sourceKey:"chatId"
  })
  massage.belongsTo(frinds,{
    constraints: false,
    timestamps: false,
    foreignKey:"chatId",
    targetKey:"chatId"
  })


