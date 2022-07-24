const { STRING } = require("sequelize");
const { TEXT } = require("sequelize");
const database=require("../../database/database")
  

const frinds = database.define('frinds', {
  //IF YOU UPDATE ARRAY IN THE MODEL IN THE TIME YOU CREATE CREATE THE ID DIRECTLY
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
    // Other model options go here
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


