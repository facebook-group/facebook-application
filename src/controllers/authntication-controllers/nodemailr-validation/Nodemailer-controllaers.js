const sgMail = require('@sendgrid/mail');
require("dotenv").config();



module.exports=(req,res)=>{
  
    let {email,varificationPass}=req.body.body


    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: email,
      from: process.env.SENDGRID_EMAIl,
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: `<h1>The Verify Code Is ${varificationPass}</h1>`// plain text body
    };
    //ES6
    sgMail
      .send(msg)
      .then((info) => {
        console.log(info.response)
        res.json(info.response);
      }, error => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body)
        }
      });
  }
