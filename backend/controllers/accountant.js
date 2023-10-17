const {accountant}=require('../models')
const {employeeMailer}=require('./employeeMailer')
const {generatePassword}=require('./generatePassword')
const {hashPassword}=require('./hashPassword')
   

const getAllAccountant=(req,res)=>{
    
    
    accountant.findAll()
    .then((accountants)=>{

let accountantValues=[]

        accountants.map((accountant)=>{
            let values=accountant.dataValues
            values.employee_type='accountant'
            accountantValues.push(values)
        })
        
        
        
        res.send(accountantValues)
       
    console.log(accountantValues)})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
   

}

const getOneAccountant=(req,res)=>{
   
    const acc_id=req.params.id
    accountant.findOne({where:{id:acc_id}})
    .then((accountant)=>{
        

        value=accountant.dataValues
        const name=value.full_name.split(" ")
        value.first_name=name[0]
        value.middle_name=name[1]
        value.last_name=name[2]
        value.employee_type="accountant"

        console.log(accountant)
    res.send(value)

})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    });}

const createAccountant=async (req,res)=>{
    const userEmail=req.body.email
    const {firstName,middleName,lastName,email,phone,salary}=req.body
    const previousId=await accountant.max('id');
    const idTag=previousId!==null?`ACC${1000+previousId}`:`ACC${1000}`
    const fullName=firstName+" "+middleName+" "+lastName
    const fullIdentification=idTag+" "+fullName
    const emailSplited=email.split("@") 
    const password=await generatePassword()
    const hashedPassword=await hashPassword(password)
 const username=emailSplited[0]
    
    accountant.create({

        id_tag:idTag,
        full_name:fullName,
        username:username,
        full_identification:fullIdentification,
        email:email,
        password:hashedPassword,
        phone:phone,
        salary:salary,

    })
    .then(res.send()
    )

    .catch((err)=>{
        if(err){
            console.log(err)
        }})
        employeeMailer(email,username,password)
       
}

const updateAccountant=async (req,res)=>{
    const {firstName,middleName,lastName,email,phone,salary,fullIdentification}=req.body;
    const identification=fullIdentification.split(" ")
    const fullName=firstName+" "+middleName+" "+lastName
    const full_identification=identification[0]+" "+fullName

    
    accountant.update(
        {
            
            full_name:fullName,
            full_identification:full_identification,
            email:email,
            phone:phone,
            salary:salary,
    },

       { where:{id:req.params.id}})
    .then((accountants)=>{
        console.log(accountants)
        console.log(req.params.id)
    })
    .catch(err=>{
        if(err)
        {console.log(err)}
    })}


    const deleteAccountant=(req,res)=>{
    
        const acc_id=req.params.id
        accountant.destroy({where:{id:acc_id}})       
        .then(res.send("Deleted successfully!"))
        .catch((err)=>{
            if(err){
                console.log(err)
            }
        })

        
    
    }

module.exports={
    getAllAccountant,
    getOneAccountant,
    createAccountant,
    updateAccountant,
    deleteAccountant
}


