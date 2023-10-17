async function generatePassword() {    
    
    // let password = null
    // const generateRandomToken = (length = 10) => {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let token = '';
        for (let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          token += characters[randomIndex];
        }
      
    //     return token;
    //   }
      
 return token
    }
  
//   const password = generatePassword(8);


  module.exports={generatePassword}