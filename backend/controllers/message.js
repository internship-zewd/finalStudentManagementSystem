const {Mailer}=require('./Mailer')
const {manager,student,accountant,instructor,admin}=require("../models")



const allEmployees=async(req,res)=>{
    let sendEmployees=[]
    let employeeEmail=[]


    const {title,message}=req.body.messageInfo
    const attachment=req.attachment
    let members=[]
members.push(await manager.findAll())
members.push(await accountant.findAll()) 
members.push(await instructor.findAll())
members.push(await admin.findAll())

Promise.all(members)
.then((employees)=>{
  
    employees.forEach((array1)=>{
        array1.forEach((employee)=>{
    sendEmployees.push(employee)
    employeeEmail.push(employee.email)
    
        })
    })
    console.log(employeeEmail)
    console.log(attachment)

console.log(sendEmployees)
let path;
console.log("this is ittttttttttt"+ path)

// upload((req,res,function(err){
//     if(err){
//         console.log(err)
//     }else{
//         path=req.file.path
//     }
// }))



Mailer(employeeEmail,title,message,attachment,path)
}).catch((err)=>{if(err){console.log(err)}})

}




const getAllMembers=async(req,res)=>{

    let members=[]
    members.push(await manager.findAll())
    members.push(await student.findAll())
    members.push(await admin.findAll())
    members.push(await accountant.findAll())
    members.push(await instructor.findAll())

    Promise.all(members)
    .then((allMembers)=>{
        let member =[]
        allMembers.forEach((array1)=>{
            array1.forEach((memberInfo)=>{
                
                tableName=memberInfo.constructor.getTableName()
                memberInfo.dataValues.member_type=tableName
                console.log("this is the table name :"+ tableName)
                member.push(memberInfo)
            })

        })

        res.send(allMembers)
        console.log(allMembers)
    })
    .catch((err)=>{
        if(err){console.log(err)}
    })

}



const allMembers=async(req,res)=>{
    

    multerFunction()
    console.log(req.body)
    const {title,message}=req.body.messageInfo
    const attachment=req.attachment
    let members=[]
members.push(await manager.findAll())
members.push(await accountant.findAll()) 
members.push(await manager.findAll())
members.push(await admin.findAll())
members.push(await student.findAll())

Promise.all(members)
.then((employees)=>{
    let sendEmployees=[]
    let employeeEmail=[]
    employees.forEach((array1)=>{
        array1.forEach((employee)=>{
    sendEmployees.push(employee)
    employeeEmail.push(employee.email)
    
        })
    })
    console.log(employeeEmail)
    console.log(attachment)

console.log(sendEmployees)
Mailer(employeeEmail,title,message,attachment)
}).catch((err)=>{if(err){console.log(err)}


})}



const allInstructors=async(req,res)=>{
    multerFunction()

    const {title,message}=req.body.messageInfo
    const attachment=req.attachment
    await instructor.findAll()
    .then((instructors)=>{
        let emails=[]
        instructors.forEach((instructor)=>{
           emails.push(instructors.dataValues.email)
            
        })
        console.log(emails)

        Mailer(emails,title,message,attachment)
    })
    .catch((err)=>{if(err){res.send(err)}})}








    const allManagers=async(req,res)=>{
        multerFunction()

        const {title,message}=req.body.messageInfo
        const attachment=req.attachment
        await manager.findAll()
        .then((managers)=>{
            let emails=[]
            managers.forEach((manager)=>{
               emails.push( manager.dataValues.email)
                
            })
            console.log(emails)
    
            Mailer(emails,title,message,attachment)
        })
        .catch((err)=>{if(err){res.send(err)}})}





        const allStudents=async(req,res)=>{
            multerFunction()

            const {title,message}=req.body.messageInfo
            const attachment=req.attachment
            await student.findAll()
            .then((students)=>{
                let emails=[]
                students.forEach((student)=>{
                   emails.push( student.dataValues.email)
                    
                })
                console.log(emails)
        
                Mailer(emails,title,message,attachment)
            })
            .catch((err)=>{if(err){res.send(err)}})}







            const allAccountants=async(req,res)=>{

                multerFunction()
                const {title,message}=req.body.messageInfo
                const attachment=req.attachment
                await accountant.findAll()
                .then((accountants)=>{
                    let emails=[]
                    accountants.forEach((accountant)=>{
                       emails.push(accountant.dataValues.email)
                        
                    })
                    console.log(emails)
            
                    Mailer(emails,title,message,attachment)
                })
                .catch((err)=>{if(err){res.send(err)}})}











                const allAdmins=async(req,res)=>{

                    multerFunction()
                    const {title,message}=req.body.messageInfo
                    const attachment=req.attachment
                    await admin.findAll()
                    .then((admins)=>{
                        let emails=[]
                        admins.forEach((admin)=>{
                           emails.push(admin.dataValues.email)
                            
                        })
                        console.log(emails)
                
                        Mailer(emails,title,message,attachment)
                    })
                    .catch((err)=>{if(err){res.send(err)}})}
    

        


        







const sendSpecific=(req,res)=>{
    
    // multerFunction()
    const {emails,attachment}=req.body
    const {title,message}=req.body.messageInfo

    try{
      Mailer(emails,title,message,attachment)
      window.alert("message sent successfuly")
    }
    catch{(err)=>{
      if(err){
        window.alert("message is not sent")
        console.log(err)
      }
    }
    }
    
   
}







module.exports={
    allEmployees,
    getAllMembers,
    sendSpecific,
    allInstructors,
    allManagers,
    allStudents,
    allAccountants,
    allAdmins,
    allMembers,
}


// const { Mailer } = require('./Mailer');
// const { manager, student, accountant, instructor, admin } = require('../models');
// const multer = require('multer');
// const path = require('path');

// const Storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, '../uploads'));
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname);
//   },
// });

// const upload = multer({ storage: Storage }).single('attachment');

// const allEmployees = async (req, res) => {
//   let sendEmployees = [];
//   let employeeEmail = [];

//   const { title, message } = req.body.messageInfo;
//   const attachment = req.attachment;
//   let members = [];
//   members.push(manager.findAll());
//   members.push(accountant.findAll());
//   members.push(instructor.findAll());
//   members.push(admin.findAll());

//   Promise.all(members)
//     .then((employees) => {
//       employees.forEach((array1) => {
//         array1.forEach((employee) => {
//           sendEmployees.push(employee);
//           employeeEmail.push(employee.email);
//         });
//       });
//       console.log(employeeEmail);
//       console.log(attachment);

//       console.log(sendEmployees);
//       let filePath;
//       console.log('this is ittttttttttt' + filePath);
//       upload(req, res, function (err) {
//         if (err) {
//           console.log(err);
//         } else {
//           filePath = req.file.path;
//         }
//       });

//       Mailer(employeeEmail, title, message, attachment, filePath);
//     })
//     .catch((err) => {
//       if (err) {
//         console.log(err);
//       }
//     });
// };

// const getAllMembers = async (req, res) => {
//   let members = [];
//   members.push(manager.findAll());
//   members.push(student.findAll());
//   members.push(admin.findAll());
//   members.push(accountant.findAll());
//   members.push(instructor.findAll());

//   Promise.all(members)
//     .then((allMembers) => {
//       let member = [];
//       allMembers.forEach((array1) => {
//         array1.forEach((memberInfo) => {
//           tableName = memberInfo.constructor.getTableName();
//           memberInfo.dataValues.member_type = tableName;
//           console.log('this is the table name :' + tableName);
//           member.push(memberInfo);
//         });
//       });

//       res.send(allMembers);
//       console.log(allMembers);
//     })
//     .catch((err) => {
//       if (err) {
//         console.log(err);
//       }
//     });
// };

// const allMembers = async (req, res) => {
//   upload(req, res, function (err) {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     const { title, message } = req.body.messageInfo;
//     const attachment = req.attachment;
//     let members = [];
//     members.push(manager.findAll());
//     members.push(accountant.findAll());
//     members.push(manager.findAll());
//     members.push(admin.findAll());
//     members.push(student.findAll());

//     Promise.all(members)
//       .then((employees) => {
//         let sendEmployees = [];
//         let employeeEmail = [];
//         employees.forEach((array1) => {
//           array1.forEach((employee) => {
//             sendEmployees.push(employee);
//             employeeEmail.push(employee.email);
//           });
//         });
//         console.log(employeeEmail);
//         console.log(attachment);

//         console.log(sendEmployees);
//         Mailer(employeeEmail, title, message, attachment);
//       })
//       .catch((err) => {
//         if (err) {
//           console.log(err);
//         }
//       });
//   });
// };

// const allInstructors = async (req, res) => {
//   upload(req, res, function (err) {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     const { title, message } = req.body.messageInfo;
//     const attachment = req.attachment;
//     instructor
//       .findAll()
//       .then((instructors) => {
//         let emails = [];
//         instructors.forEach((instructor) => {
//           emails.push(instructors.dataValues.email);
//         });
//         console.log(emails);

//         Mailer(emails, title, message, attachment);
//       })
//       .catch((err) => {
//         if (err) {
//           res.send(err);
//         }
//       });
//   });
// };

// const sendSpecific = (req, res) => {
//   upload(req, res, function (err) {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     const { emails, attachment } = req.body;
//     const { title, message } = req.body.messageInfo;
//     Mailer(emails, title, message, attachment);
//   });
// };

// module.exports = {
//   allEmployees,
//   getAllMembers,
//  allMembers,
//   allInstructors,
//   sendSpecific,
// };