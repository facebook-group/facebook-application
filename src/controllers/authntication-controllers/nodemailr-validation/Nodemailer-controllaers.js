const nodeMailer=require("nodemailer")
require("dotenv").config();


module.exports=(req,res)=>{
  
    let {email,varificationPass}=req.body.body
    const transporter = nodeMailer.createTransport({
      service: 'outlook',
      auth: {
          user: process.env.NODEMAILER_EMAIL,
          pass:  process.env.NODEMAILER_PASSWORD 
      }
    });
    
    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL, // sender address
      to: email, // list of receivers
      subject: 'verify code', // Subject line
      html: `<h1>The Verify Code Is ${varificationPass}</h1>`// plain text body
    };
    
    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
          console.log(err)
      else
          res.json(info.response);
    })  
  }