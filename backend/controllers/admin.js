const {admin}=require('../models')
const employeeMailer=require('../controllers/employeeMailer')


const getAllAdmins=async(req, res) => {
    let adminValues=[]
    await admin.findAll()
      .then((admins) => {
             admins.map((admin)=>{
             let values=admin.dataValues
             values.employee_type="admin"
             adminValues.push(values)
        })
        console.log(adminValues)
        res.send(adminValues)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getOneAdmin=async (req,res)=>{
    const admin_id=req.params.id
    admin.findOne({where:{id:admin_id}})

    .then((admin)=>{

        let value=admin.dataValues
        const name=value.full_name.split(" ")
        value.first_name=name[0]
        value.middle_name=name[1]
        value.last_name=name[2]
        value.employee_type="admin"

        
console.log(value)
    res.send(value)})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
   

}
const createAdmin=async (req,res)=>{
    const {firstName,middleName,lastName,email,password,phone,salary,date}=req.body
    const fullName=firstName+" "+middleName+" "+lastName
  
    const previousId= await admin.max('id')
const idTagValue= previousId!==null? `ADM${1000+previousId}`:`ADM${1000}`
const fullIdentification=idTagValue+" "+fullName
const emailSplited=email.split("@")
const username=emailSplited[0]


    admin.create({
        

        id_tag:idTagValue,
        username:username,
        full_name:fullName,
        full_identification:fullIdentification,
        email:email,
        password:password,
        phone:phone,
        salary:salary,   
        
    })
    .then(
        res.send()      

    )

    .catch((err)=>{
        if(err){
            console.log(err)
        }})
        employeeMailer(email,username,password)
}

const updateAdmin=async(req,res)=>{
    console.log("im in admin put")
    const {firstName,middleName,lastName,email,password,phone,salary,fullIdentification,username}=req.body;
    const identification=fullIdentification.split(" ")
    const fullName=firstName+" "+middleName+" "+lastName
    const full_identification=identification[0]+" "+fullName


    await admin.update(
        {     
            
            full_name:fullName,
            full_identification:full_identification,
            email:email,
            password:password,
            phone:phone,
            salary:salary,
            username:username,
        
        },

       { where:{id:req.params.id}})
    .then(res.send())
    .catch(err=>{
        if(err){console.log(err)}
})
employeeMailer(email,username,password)
}

const deleteAdmin=async(req,res)=>{
    
    const admin_id=req.params.id
    await admin.destroy({where:{id:admin_id}})       
    .then(res.send())
    .catch((err)=>{

        if(err){
            console.log(err)
        }
    })}

    module.exports={
        getAllAdmins,
        createAdmin,
        updateAdmin,
        deleteAdmin,
        getOneAdmin
    }

