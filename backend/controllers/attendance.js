const {attendance}=require("../models")

const createAttendance=async(req,res)=>{


    const {studentAttended}=req.body
    console.log(studentAttended)
    const prevId= await attendance.max('id')
    idStart=prevId!==null? prevId+1:1


    const previousIdTagValue=await attendance.max('idTagValue')
    const preIdTagValue=previousIdTagValue!==null? previousIdTagValue.split(" "):`1 1 1 1`
    const prevIdTagValue=Number(preIdTagValue[3])
    const idTagValue= prevIdTagValue!==null? `CLASS ${studentAttended[0].class_id} ATTENDANCE ${prevIdTagValue+1}`:`CLASS ${studentAttended[0].class_id} ATTENDANCE ${1}`
    
  for(let i=0;i<studentAttended.length;i++){
    studentAttended[i].idTagValue=idTagValue
    studentAttended[i].id=idStart+i
  }
    let attendances=[]
    if(Array.isArray(studentAttended)){
        studentAttended.forEach((student)=>{
            attendances.push(attendance.create(student))
       
       })
    }else{
        console.log(
            "studentAttended is not an array"
        )}
    
console.log("this are the attendances:"+attendances)
    await Promise.all(attendances).then(res.send("created successfully"))
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })


}
module.exports={
    createAttendance
}