const nodeMailer=require('nodemailer')
const path = require('path');



require('dotenv').config()

function Mailer(email,title,message,attachment){
    console.log(email)
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
    subject:title,
    text:message,
    attachments:[attachment.map((attach)=>(

        {
            filename:attach.originalName,
            content:attach.data,
            path:file.path
        
        }
    ))
        
    ],


}

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error)}
    else(console.log("Message sent: " +info.reponse))
})
return("Mesage sent successfully")


}
module.exports= {Mailer}