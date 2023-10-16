import React,{useState} from 'react'
import '../DashContent/DashContent.css'
import './AddEm.css'
import axios from 'axios';
import {Link,Route,Navigate,Routes} from "react-router-dom";
import {Filter} from './Filter'
import { Table } from 'react-bootstrap';
import SpecificMessageDashboard from './SpecificMessageDash'
import App from '../../App'

function NewM() {

    const [showAll,setShowAll]=useState(false)
    const [showSpecific,setShowSpecific]=useState(false)
    const [members,setMembers]=useState([])
    const [attachment,setAttachment]=useState([])
    const [checked,setChecked]=useState(false)
    const [emails,setEmails]=useState([])
    const [search,setSearch]=useState("");
    const[dataInitial,setDataInitial]=useState([])
    const [messageInfo,setMessageInfo]=useState({
        title:"",
        message:"",
        messageType:""

    })


    const formData=new FormData()
    formData.append("to",emails)
    formData.append("subject",messageInfo.title)
    formData.append("text",messageInfo.message)
    formData.append("file",attachment)

    

    

    //***********this function sets the type of email that is sent**********
    //***********if it is sent as a group or specifically for selected members of the school**********

    const setType=(type)=>{
        if(type==="all"){
            setShowAll(true)
            setShowSpecific(false)
        }
        else if(type==="specific"){
            setShowAll(false)
            setShowSpecific(true)
            fetchAll()
        }

    }

   //*********this function sets the emails of the members of the school that an email is sent to************

    const handleChecked=(e,email)=>{
        console.log(e)
        console.log(emails)
        console.log(checked)
        let addresses=[]
        setChecked(e)
        if (e===true){
            
            setEmails((preValue)=>[...preValue,email])
        }else{

            addresses=emails.filter((item)=>(item !== email))
            console.log(addresses)
            setEmails(addresses)
            
        }

    }
    

    const handleAttachment=(e)=>{
      const file=e.target.files[0]
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
    const fetchAll=async()=>{
    
        await axios.get(`http://localhost:8081/message/getAll`)
        .then((res)=>{
            console.log(res.data)
            const data=res.data
            let allMembers=[]
            data.forEach((firstArray)=>{
                firstArray.forEach((member)=>{

                        allMembers.push(member)
                    })
                })
                console.log(allMembers)
           setMembers(allMembers)
           setDataInitial(allMembers)
            })

        .catch((err)=>{
            if(err){console.log(err)}
        })
        



    }



    const handleChange=(e)=>{
        const {name,value}=e.target
        console.log(value)
        console.log(messageInfo)
        setMessageInfo((preValue)=>(
            {...preValue,[name]:value}
        ))
    }

    const handleSubmitAll=async(e)=>{
        const type=messageInfo.messageType
        console.log(messageInfo)
        console.log("were hereeeeeee")
    
        e.preventDefault()
        await axios.post(`http://localhost:8081/message/create/${type}`,{messageInfo,attachment})
        .then((res)=>{console.log(res)
            alert("message sent successfully")})
            .catch((err)=>{if(err){console.log(err)
            alert("dmessage is not sent")}})
    }

    

  return (
    <div className="dashContent">
        <div className="overview">
                    <div className="title">
                        <i className="uil uil-message"></i>
                        <span className="text">Message/New Message</span>
                    </div>

                </div>


              <div className='container'>
                <div className='content'>
                    <div className='user-details'>
                        <div className='input-box'>
                            <div className='gender-details'>
                          
                        <select onChange={(e)=>{setType(e.target.value)}}>

                            <option value="">Send message to</option>
                            <option value="all">All</option>
                            <option value="specific">Specific</option>

                        </select>
                              
                        </div>
                        </div>
                    </div>
                    <br/>
                        {showAll &&<div>
                            <div className='user-details'>
                       
                            <form onSubmit={handleSubmitAll} encType='multipart/form-data'>
                            <div className='input-box'>
                            <div className='gender-details'>

                            <select name="messageType" onChange={(e)=>{handleChange(e)}} required>
                                <option value="" selected="selected">Select type</option>
                                <option value="allEmployees">All employees</option>
                                <option value="allMembers">All school members</option>
                                <option value="allAdmins">All Admins</option>
                                <option value="allInstructors">All Instructors</option>
                                <option value="allStudents">All Students</option>
                                <option value="allManagers">All Managers</option>
                                <option value="allAccountants">All Accountants</option>
                            </select></div></div><br/>
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
                            <input id="attach" type="file" name="attachment" placeholder=".pdf,.exe,.txt,..." onChange={(e)=>{handleAttachment(e)}} multiple />
                               </div></div>
                               <br/>
                            <button type="submit" className='btn btn-warning button' onSubmit={(e)=>handleSubmitAll(e)}>Send</button>
                            </form>
                            </div>
                        </div>
                        }
                        {showSpecific && <div>
                            
                   <Filter members={members} setMembers={setMembers} dataInitial={dataInitial}/> 
                   <br/>
                         
                         
                        <div className='user-deatils'>
                            <div className='input-box'>
                           <input type="text" placeholder="Search Employees" onChange={(e) => { setSearch(e.target.value) }} name="search" value={search} />
                                                    
                               
                           <button  className='btn btn-warning button' ><Link  style={{ textDecoration: 'none' }}to={{pathname:"/Message/Specific"}} >Send a message</Link> </button>  
                         </div></div>
                            <Table striped bordered hover>

                                <thead>
                                    <tr>
                                    <th>Full Identification</th>
                                    <th>Member type</th>
                                    <th>email</th>
                                    <th>Send to</th>
                                    </tr>
                                </thead>
                               
 { members.filter((item)=>{
    return search.toLowerCase() === ''? item: 
    item.full_name.toLowerCase().includes(search);

})
.map((item)=> (
    
    <tbody>
    

    <tr key={item.id}>
    
    
        {console.log(members)}
        <td>{item.full_identification}</td>
        <td>{item.member_type}</td>
        <td>{item.email}</td>
        <td><input type="checkbox" check={checked} onChange={(e)=>{handleChecked(e.target.checked,item.email)}}/></td>
        </tr>
        </tbody>
                        
))}</Table> </div> }
                    
                        
                        
                </div>
                </div>
                </div>
  )
}

export default NewM