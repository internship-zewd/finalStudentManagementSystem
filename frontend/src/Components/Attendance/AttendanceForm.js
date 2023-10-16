import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  AttendanceFormContainer,
  AttendanceFormTitle,
  AttendanceTable,
  AttendanceTableHeader,
  AttendanceTableRow,
  AttendanceTableCell
} from './AttendanceFormStyles';
//import './Attendance.css';

const AttendanceForm = () => {
  const [Classes,setClasses]=useState([]);
  const [selectedClass, setSelectedClass] = useState("")
  const [student,setStudent]=useState([])
  const [studentAttended,setStudentAttended]=useState([])
  const [instructorId,setInstructorId]=useState("")
  const [search,setSearch]=useState("")

  useEffect(()=>{
    getData()
    
},[])
const getData=async()=>{
await axios.get("http://localhost:8081/class_room/getAll")
    .then((res)=>{
    setClasses(res.data)
    console.log(res.data)
    })
    .catch((err)=>{
         if(err){
            console.log(err)
           }
       })}
       const setStudentAttendance =async(studentId,check)=>{
     
        const checked=check.target.checked
        const studentNew=studentAttended.map((stud)=>{
             
             if(studentId===stud.student_id){
                 return{...stud,mark_attendance:checked}
             }else{
                 return{...stud}
             }
     
         })
     
         setStudentAttended(studentNew)
         console.log(studentNew)
         console.log(studentAttended)
     
         
     }
     
     const handleAttendance=async()=>{
         console.log(studentAttended)
         
         await axios.post(`http://localhost:8081/attendance/create`,{studentAttended})
         .then((res)=>{
            window.alert(`successfully added attendance for ${Classes[0].full_identification}`)
             
         })
         .catch((err)=>{
             if(err){
                 console.log(err)
             }
         })
     }






     
     const getStudent=async(id)=>{
         console.log(selectedClass)
        setStudentAttended([])
         if(id===""){
             setStudent([])
         }else{
             let instructorId=""
             await axios.get(`http://localhost:8081/class_room/getOne/${id}`)
             .then((res)=>{
                 
                 instructorId=res.data.instructor_id
                 setInstructorId(instructorId)
                 
             })
                 
             .catch((err)=>{if(err){console.log(err)}})
            
             console.log(instructorId)
             await axios.get(`http://localhost:8081/student/getByClass/${id}`)
         .then((res)=>{
             let studentId=[]
             let studentInfo=[]
             let studentFullIdentification=[]
             console.log(selectedClass)
             console.log(res.data[0])
             console.log(res.data[0].class_id)
             for (let i=0;i<res.data.length;i++){
                 studentId[i]=res.data[i].id
                 studentFullIdentification[i]=res.data[i].full_identification
                 studentInfo[i]={student_id:res.data[i].id,mark_attendance:false,class_id:res.data[i].class_id,instructor_id:instructorId}
             }

             
             setStudentAttended(studentInfo)
             console.log(studentAttended)
     
             setStudent(res.data)
         })
         .catch((err)=>{
             if(err){
                 console.log(err)
             }
         })
     
         }}


  return (
    <div className="dashContent">
    <div className="overview">
       
        <div className="container">

            <div className="content">
              
    <AttendanceFormContainer>
      <AttendanceFormTitle>Attendance Form</AttendanceFormTitle>
      <div className="user-details">
      <form >
      <div className='input-box'>
      <input
                  type="text"
                  placeholder="Search Employees"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  name="search"
                  value={search}
                />
        </div>
        <div className='input-box'>
        <select required onChange={(e)=>{getStudent(e.target.value)}} defaultValue="">
                <option value="">pick a class</option>
                {Classes.map((classs)=>(

                    <option key={classs.id} value={classs.id}>{classs.full_identification}</option>

                ))}   
            </select>
        </div>
        <AttendanceTable>
          <thead>
            <tr>
              <AttendanceTableHeader>Student Name</AttendanceTableHeader>
              <AttendanceTableHeader>Attendance</AttendanceTableHeader>
            </tr>
          </thead>
          <tbody>
          {student.map((item) => (
              <AttendanceTableRow key={item.id}>
                <AttendanceTableCell>{item.full_name}</AttendanceTableCell>
                <AttendanceTableCell>
                <input type="checkbox" onChange={(e)=>{setStudentAttendance(item.id,e)}}></input>
                </AttendanceTableCell>
              </AttendanceTableRow>
            ))}
          </tbody>
        </AttendanceTable>
        </form>
        <button type="button" onClick={()=>{handleAttendance()}} >Submit Attendance</button>
      
      </div>
    </AttendanceFormContainer>
    </div>
    </div>
    </div>
    </div>
  );
};

export default AttendanceForm;