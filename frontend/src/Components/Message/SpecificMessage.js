import axios from 'axios'
import React,{useState} from 'react'
import  {useLocation} from 'react-router-dom'


export const SpecificMessage=(props)=>{
    const emails=props.emails
    // const location=useLocation()
    // const emails=location.state.emails
    // console.log(emails)
    // const emails=props.emails


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



    const handleAttachment=(e)=>{
        const file=e.target.files
        const reader=new FileReader()
        reader.onload = () => {
          const attachmentData = reader.result;
      
          setAttachment({
            name: file.name,
            data: attachmentData,
          });
        };
      
        reader.readAsDataURL(file);
        
      }


    const handleSubmitSpecific=async(e)=>{
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