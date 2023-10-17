
const { createToken } = require('../JWT');
const { admin } = require ('../models');
const { passwordReset } = require ('../models');
const { instructor } = require ('../models');
const { manager }= require ('../models');
const { accountant } = require ('../models');
const bcrypt = require('bcryptjs')

const crypto = require('crypto');
const nodemailer = require('nodemailer')



const loginController = async (req, res) => {
    const body = req.body;
    const name = body.username;
    const password = body.password;
    const role = body.signInAs;
    let hashedPassword = null
    try {
        let user = null;

        if(role === "Admin"){

            hashedPassword = await admin.findOne({
                where:{
                    username: name
                },
                attributes: ['password', 'username', 'id', 'id_tag']
            })
        }
        if(role === "Manager"){

            hashedPassword = await manager.findOne({
                where:{
                    username: name
                },
                attributes: ['password', 'username', 'id', 'id_tag']
            })
        }
        if(role === "Accountant"){
           
            hashedPassword = await accountant.findOne({
                where:{
                    username: name
                },
                attributes: ['password', 'username', 'id', 'id_tag']
            })
        }
        if(role === "Instructor"){
           
            hashedPassword = await instructor.findOne({
                where:{
                    username: name
                },
                attributes: ['password', 'username', 'id_tag', 'id']
            })
        }

        const comparePasswords = async (password, hashedPassword) => {
            try {
              const isMatch = await bcrypt.compare(password, hashedPassword);
              return isMatch;
            } catch (error) {
              console.error('Error comparing passwords:', error);
              throw error;
            }
          }
          
        if( !hashedPassword.username ){
            res.json({success: false, msg: "Username doesn't exist"});
        } else{
            comparePasswords(password, hashedPassword.password)
            .then(isMatch => {
              if (isMatch) {
                const accessToken = createToken(hashedPassword) 
                res.json({success: true, msg: "User found", accessToken: accessToken, user:hashedPassword.id_tag});
              } else {
                console.log('Password does not match!');
              }
            })
            .catch(error => {
              console.error('Error:', error);
            });   
        }
    } catch (error) {
        res.json({msg: "Error in selection", error});
        console.log(error, 500);
    }
}


const generateToken = () => {
    return crypto.randomBytes(20).toString('hex');
  };


const sendEmail = async (email, token) => {

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_password',
    },
  });

  // Send email with the token
  let info = await transporter.sendMail({
    from: 'your_email@gmail.com',
    to: email,
    subject: 'Password Reset',
    text: `Click on the following link to reset your password: http://localhost:4000/reset-password?token=${token}`,
  });

  console.log('Email sent:', info.messageId);
};

const forgotPassword = async(req, res) =>{
    const {email} = req.body;
    const {role} = req.body;
    try{
        const user = null;

        if(role == "Admin"){
            user = await admin.findOne({where: {email}});
        }
        if(role == "Manager"){
            user = await manager.findOne({where: {email}});
        }
        if(role == "Accountant"){
            user = await accountant.findOne({where: {email}});
        }
        if(role == "Instructor"){
            user = await instructor.findOne({where: {email}});
        }
        
        if(!user){
            res.json({msg: "User doesn't exist"})
        }

        const token = generateToken();

        await passwordReset.create({
            // userId: user.id,
            role: role,
            email: email,
            token: token
        })

        await sendEmail(email, token)
        res.json({msg: "Email was sent successfully"});
    } catch(error){
        res.json({success: false, msg: "Email wasn't sent."})
    }
};

const resetPassword = async (req, res) => {
    const {token} = req.body;
    const {newPassword} = req.body;
    
    try{
        const user = null;
        const resetRow = await passwordReset.findOne({ where: { token }});
        if(!resetRow){
            res.json({msg: "Invalid token"});
        }

        const tokenExpirationTime = 60 * 60 * 1000;
        const currentTime = new Date();
        const resetTime = resetRow.createdAt;
        if(currentTime - resetTime > tokenExpirationTime) {
            res.json({msg: "Token has expired"});
        }

        const email = resetRow.email;
        const userRole = resetRow.role;
        if(userRole == "Admin"){
            user = await admin.findOne({where: {email}});
        }
        if(userRole == "Manager"){
            user = await manager.findOne({where: {email}});
        }
        if(userRole == "Accountant"){
            user = await accountant.findOne({where: {email}});
        }
        if(userRole == "Instructor"){
            user = await instructor.findOne({where: {email}});
        }
        if (!user) {
            res.json({msg: "User not found"});
        }

        user.password = newPassword;
        await user.save();
        req.json({msg: "Password reset successfully"})
    } catch(error){
        res.json({msg: "Error in resetting password", error})
    }
}

  
  module.exports = {
    forgotPassword,
    loginController,
    resetPassword
  }
  