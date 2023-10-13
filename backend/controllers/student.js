const {student,class_room}=require('../models')

const getAllStudent=(req,res)=>{
    student.findAll()
    .then(( student)=>{res.send(student)
       
    console.log( student)})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
   

}

const getOneStudent=async(req,res)=>{
    const id=req.params.id
    await student.findOne({where:{id:id}})
    .then((student)=>{res.send(student)})
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })}

const getStudentByClass=async(req,res)=>{
    const class_id=req.params.class_id
    await student.findAll({where:{class_id:class_id}})
    .then((students)=>{
        res.send(students)
        console.log(students)

    })
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })}


const createStudent=async(req,res)=>{
    const {firstName,middleName,lastName,email,phonenumber,gender,course,class_room,paymentStatus,dob}=req.body
    const fullName=firstName+" "+middleName+" "+lastName
    
    const previousId= await student.max('id')
    const idTag= previousId!==null? `STU${1000+previousId}`:`STU${1000}`
    const fullIdentification=idTag+" "+fullName
    // Mailer(email)
    student.create({
        
    
        id_tag:idTag,
        full_name:fullName,
        full_identification:fullIdentification,
        email:email,
        phonenumber :phonenumber,
        gender : gender,
        course : course,
        paymentStatus : paymentStatus,
        dob : dob,
        course_id:course,
        class_id:class_room
        
            
        })
        .then(console.log(res)
            )
        .catch((err)=>{
            if(err){
                console.log(err)
            }})
            res.send('insert');
    }


const updateStudent=async(req,res)=>{
    const {firstName,middleName,lastName,email,phonenumber,gender,course,class_room,paymentStatus,dob,fullIdentification}=req.body   
    const fullName=firstName+" "+middleName+" "+lastName


    fullIdentification=idTag+" "+fullName
    
    student.update(
        {
            full_name:fullName,
            class_id:class_room,
            email : email,
            phonenumber : phonenumber,
            gender : gender,
            paymentStatus : paymentStatus,
            course_id : course,
            dob : dob,
            full_identification:fullIdentification

        },

       { where:{id:req.params.id}})
    .then(( student)=>{
        console.log( student)
        console.log(req.params.id)
    })
    .catch(err=>{
        if(err)
        {console.log(err)}
    })}

const deleteStudent=(req,res)=>{
    const stud_id=req.params.id
    student.destroy({where:{id:stud_id}})       
    .then(res.send())
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })}


    const getStudentAndClass=(req,res)=>{
        let studentByClass=[]
        student.findAll()
        .then((students)=>{
            const studentsWithClass=[]
            students.forEach((stud)=>{
                let className=""
                let student=stud.dataValues
                const Class=stud.dataValues.class_id
                class_room.findOne({where:{id:Class}})
                .then((classInfo)=>{
                    console.log(classInfo )
                   className= classInfo.dataValues.full_identification
                   student.classFullIdentification=className
                   studentsWithClass.push(stud.dataValues)
               console.log(stud)

                })
                .catch((err)=>{if(err){console.log(err)}})
                
               


            })
            res.send(studentsWithClass)



        })
        .catch((err)=>{if(err){console.log(err)}})

    }

module.exports={
    getAllStudent,
    getOneStudent,
    createStudent,
    updateStudent,
    getStudentByClass,
    deleteStudent,
    getStudentAndClass
}


