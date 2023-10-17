const bcrypt = require('bcryptjs');
async function hashPassword(password)  {
    console.log(password)
   let hashedPassword=null
    try {
  
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
      return hashedPassword;
    } catch (error) {
      console.error('Error hashing password:', error);
      throw error;
    }
  }
  

    module.exports={hashPassword}