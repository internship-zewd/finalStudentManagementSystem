import axios from 'axios'
import React,{useState} from 'react'
import  {useLocation} from 'react-router-dom'


export const SpecificMessage=(props)=>{
    // const emails=props.emails
    const location=useLocation()
    const emails=location.state.emails
    console.log(emails)
    // const emails=props.emails

    console.log(emails)

    console.log("helowwwwwwww")

    const [attachment,setAttachment]=useState({})
    const [messageInfo,setMessageInfo]=useState({
        title:"",
        message:"",
        messageType:""

    })

    const formData=new FormData()


    formData.append('to',emails)
    formData.append('subject',messageInfo.title)
    formData.append('text',messageInfo.message)
    formData.append('file',attachment)



    // const handleAttachment=(e)=>{
    //     const file=e.target.files
    //     const reader=new FileReader()
    //     reader.onload = () => {
    //       const attachmentData = reader.result;
      
    //       setAttachment({
    //         name: file.name,
    //         data: attachmentData,
    //       });
    //     };
      
    //     reader.readAsDataURL(file);
        
    //   }

    const handleAttachment=(e)=>{
        setAttachment(e.target.files)

    }

    const handleSubmitSpecific=async(e)=>{
        console.log(emails)
        e.preventDefault()
        await axios.post(`http://localhost:8081/message/specific`,formData,{headers:{'Content-Type':'multipart/form-data'},})
        .then((res)=>{console.log(res)
        alert("message sent successfully")})
        .catch((err)=>{if(err){console.log(err)
        alert("dmessage is not sent")}})
    }


    const handleChange=(e)=>{
        const {name,value}=e.target
        console.log(value)
        console.log(messageInfo)
        setMessageInfo((preValue)=>(
            {...preValue,[name]:value}
        ))
    }


    return(
        
     <div className="dashContent">
        <div className="overview">
                    <div className="title">
                        <i className="uil uil-message"></i>
                        <span className="text">Message/New Message/Specific Message</span>
                    </div>

                </div>
            <div className='container'>
                <div className='content'>
                    <div className='user-details'>
                       
             <form onSubmit={handleSubmitSpecific} >

             <div className='input-box'>
                            
                            <span className='details'>Title</span>
                            <input id="title" type="text" name="title" placeholder="subject of the message..." required onChange={(e)=>{handleChange(e)}} /><br/>
                            </div><br/>
                            <div className='input-box'>
                            <textarea rows="10" cols="80" placeholder="Enter the message...." required onChange={(e)=>{handleChange(e)}} name="message"></textarea><br/>
                           </div>
                           <br/>
                           <div className='input-box'>
                            <div className='gender-details'>
                                <span className='details'>Attachment</span>
                            <input id="attach" type="file" name="attachment" placeholder=".pdf,.exe,.txt,..." onChange={(e)=>{handleAttachment(e)}} />
                               </div></div>
                               <br/>
                            <button type="submit" className='btn btn-warning button' onSubmit={(e)=>handleSubmitSpecific(e)}>Send</button>
</form>
            
           
        </div>
        </div>
         </div>
         </div>
         
    )


}





// import React from "react";
// import axios from "axios";
// import { useState } from "react";

// function SpecificMessage() {
//   const [sendTo, setSendTo] = useState("");
//   const [receiverList, setReceiverList] = useState([]);
//   const [selectedReceiver, setSelectedReceiver] = useState({});
//   const [subjectText, setSubjectText] = useState("");
//   const [textBody, setTextBody] = useState("");
//   const [attachmentFile, setAttachmentFile] = useState()

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const selReceiversEmail = [];
//     receiverList.forEach((receiver, index) => {
//       const checkboxValue = selectedReceiver[index];
//       if (checkboxValue === true) {
//         selReceiversEmail.push(receiver.email);
//       }
//     });
//     const formData = new FormData();

//     formData.append("emailAttachment", attachmentFile)
//     formData.append("subjectText", subjectText)
//     formData.append("textBody", textBody)
//     formData.append("selReceiversEmail", JSON.stringify(selReceiversEmail))

//     axios
//       .post("http://localhost:8081/message/sendEmail", formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       })
//       .then((res) => {
//         if (res.data.success === false) {
//           console.log("Error while sending email");
//         } else {
//           alert("Email sent successfully");
//         }
//       });
//   };

//   const handleFetch = (e) => {
//     setSendTo(e.target.value);
//     axios
//       .get("http://localhost:8081/message/fetchReceiver", { sendTo })
//       .then((res) => {
//         if (res.data.success === false) {
//           console.log(res.data.msg);
//         } else {
//           setReceiverList(res.data);
//         }
//       });
//   };

//   const handleSelectedReceiver = (event, receiverIndex) => {
//     const { checked } = event.target;
//     setSelectedReceiver((prevSelection) => ({
//       ...prevSelection,
//       [receiverIndex]: checked,
//     }));
//   };

//   const handleFileAttachment = (e) => {
//     setAttachmentFile(e.target.files)
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <span>Select Receiver</span>
//         <select value={sendTo} onChange={handleFetch}>
//           <option>All</option>
//           <option>Admin</option>
//           <option>Manager</option>
//           <option>Accountant</option>
//           <option>Instructor</option>
//         </select>
//         <table>
//           <thead>
//             <tr>
//               <th>Select</th>
//               <th>No.</th>
//               <th>Name</th>
//               <th>Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {receiverList.map((item, index) => (
//               <tr key={index}>
//                 <td>
//                   <input
//                     type="checkbox"
//                     checked={selectedReceiver[index] || false}
//                     onChange={(event) => {
//                       handleSelectedReceiver(event, index);
//                     }}
//                   />
//                 </td>
//                 <td>{index + 1}</td>
//                 <td>{item.fullIdentification}</td>
//                 <td>{item.email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <span>Subject:</span>
//         <textarea
//           cols="30"
//           rows="10"
//           value={subjectText}
//           onChange={(e) => {
//             setSubjectText(e.target.value);
//           }}
//         ></textarea>

//         <span>Message</span>
//         <textarea
//           cols="30"
//           rows="10"
//           value={textBody}
//           onChange={(e) => {
//             setTextBody(e.target.value);
//           }}
//         ></textarea>
//         <span>Choose file</span>
//         <input type="file" multiple onChange={handleFileAttachment}/>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }

// export default SpecificMessage;
