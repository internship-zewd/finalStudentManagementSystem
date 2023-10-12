// import './Popup.css';
import React, { useRef } from "react";
import axios from 'axios';
export const ViewPopup=(props)=> {
   
  const popupRef = useRef();

  const courseProp=props.courseProp
  const setTrigger=props.setTrigger
  // console.log(courseProp)
  // const type=data.course_type

 const handlePrint = async () => {
   try {
     const element = popupRef.current;
     const htmlContent = element.innerHTML;

     const response = await axios.post(
       "http://localhost:8081/course/generatePdf",
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
          <h5>Course's Id:</h5>
          <p> {courseProp.id_tag}</p>
          <h5>Course's Name:</h5>
          <p> {courseProp.course_name} </p>
          <h5>Course's Tuition fee:</h5>
          <p> {courseProp.fee} </p>
          <h5>Course's Duration in days:</h5>
          <p> {courseProp.course_duration} </p>
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