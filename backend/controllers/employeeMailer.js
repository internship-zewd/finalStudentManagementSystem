const nodeMailer=require('nodemailer')
const path = require('path');



require('dotenv').config()

function employeeMailer(email,username,password){
    console.log(email)
    const message=`This is your username and password.<br?/> Username:${username}<br/>Password:${password}`
    const subject="Your login info to zewd academy"
   const transporter=nodeMailer.createTransport({
    service:'gmail',
    secure:true,
    port:465,
    auth:{
        user:process.env.USER,
        pass:process.env.PASS,
    }
})

const mailOptions={
    from:`Zewd Academy <jayaddisu@gmail.com>`,
    to:email,
    subject:subject,
    text:message,


}

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error)}
    else(console.log("Message sent: " +info.reponse))
})
return("Mesage sent successfully")


}
module.exports= {employeeMailer}