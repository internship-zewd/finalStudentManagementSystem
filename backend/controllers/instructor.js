const {instructor}=require('../models')
const Mailer=require('../controllers/Mailer')

const getAllInstructor=(req,res)=>{
    
    
    instructor.findAll()
    .then((instructors)=>{

let instructorValues=[]

        instructors.map((instructor)=>{
            let values=instructor.dataValues
            values.employee_type='instructor'
            instructorValues.push(values)
        })
        
        
        
        res.send(instructorValues)
       
    console.log(instructorValues)})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
   

}

const getOneInstructor=(req,res)=>{
   
    const ins_id=req.params.id
    instructor.findOne({where:{id:ins_id}})
    .then((instructor)=>{
        

        value=instructor.dataValues
        const name=value.full_name.split(" ")
        value.first_name=name[0]
        value.middle_name=name[1]
        value.last_name=name[2]
        value.employee_type="instructor"

        console.log(instructor)
    res.send(value)

})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    });}

const createInstructor=async (req,res)=>{
    const userEmail=req.body.email
    const {firstName,middleName,lastName,email,password,phone,salary,date}=req.body
    const previousId=await instructor.max('id');
    const idTag=previousId!==null?`INS${1000+previousId}`:`INS${1000}`
    const fullName=firstName+" "+middleName+" "+lastName
    const fullIdentification=idTag+" "+fullName
    const emailSplited=email.split("@")
const username=emailSplited[0]

       
    instructor.create({

        id_tag:idTag,
        full_name:fullName,
        full_identification:fullIdentification,
        email:email,
        password:password,
        phone:phone,
        salary:salary,
        username:username,

    })
    .then(res.send()
        // ()=>{if(res.status===200){console.log(Mailer(userEmail))}}
    )

    .catch((err)=>{
        if(err){
            console.log(err)
        }})
       
}

const updateInstructor=async (req,res)=>{
    const {firstName,middleName,lastName,email,password,phone,salary,fullIdentification,username}=req.body;
    const identification=fullIdentification.split(" ")
    const fullName=firstName+" "+middleName+" "+lastName
    const full_identification=identification[0]+" "+fullName

 
    


    
    instructor.update(
        {

        full_name:fullName,
        username:username,
        full_identification:full_identification,
        email:email,
        password:password,
        phone:phone,
        salary:salary,
    },

       { where:{id:req.params.id}})
    .then((instructors)=>{
        console.log(instructors)
        console.log(req.params.id)
    })
    .catch(err=>{
        if(err)
        {console.log(err)}
    })}


    const deleteInstructor=(req,res)=>{
    
        const ins_id=req.params.id
        instructor.destroy({where:{id:ins_id}})       
        .then((res)=>{console.log(res)})
        .catch((err)=>{
            if(err){
                console.log(err)
            }
        })
        
    
    }

module.exports={
    getAllInstructor,
    getOneInstructor,
    createInstructor,
    updateInstructor,
    deleteInstructor,
}


