// import './Popup.css';
import React, { useEffect, useRef , useState} from "react";
import axios from 'axios';
export const ViewPopup=(props)=> {
  const classProp=props.classProp
  const setTrigger=props.setTrigger
  const [instructorName,setInstructorName]=useState('')
  const [courseName,setCourseCName]=useState('')
   
  const popupRef = useRef();
  const getData=async()=>{
    const id=classProp.instructor_id
    
    const instructor=await axios.get(`http://localhost:8081/instructor/getOne/${id}`)
    
    id=classProp.course_id
    const course=await axios.get(`http://localhost:8081/course/getOne/${id}`)
axios.all([instructor,course])
.then(
  axios.spread((...allData)=>{
   setInstructorName(allData[0].data.full_identification)
   setCourseCName(allData[1].data.full_identification)

  }))
  .catch((err)=>{
    if(err){console.log(err)}
  })

  }
useEffect(()=>{
getData()
},[])

  // console.log(classProp)
  // const type=data.course_type

 const handlePrint = async () => {
   try {
     const element = popupRef.current;
     const htmlContent = element.innerHTML;

     const response = await axios.post(
       "http://localhost:8081/class/generatePdf",
       { htmlContent },
       {
         responseType: "blob",
       }
     );

     const pdfUrl = window.URL.createObjectURL(new Blob([response.data]));
     const link = document.createElement("a");
     link.href = pdfUrl;
     link.setAttribute("download", "course.pdf");
     document.body.appendChild(link);
     link.click();
     link.remove();
   } catch (error) {
     console.error("Error generating PDF:", error);
   }
 };

  

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div ref={popupRef}>
          {" "}
          <h5>Class Id:</h5>
          <p> {classProp.id_tag}</p>
          <h5>Class's Name:</h5>
          <p> {classProp.name} </p>
          <h5>Course:</h5>
          <p> {courseName} </p>
          <h5>Instructor:</h5>
          <p> {instructorName} </p>
        </div>
        <button
          className="close-btn  btn btn-secondary"
          onClick={() => {
            setTrigger(false);
          }}
        >
          close
        </button>
        <button className="print-btn btn btn-warning" onClick={handlePrint}>
          print
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};