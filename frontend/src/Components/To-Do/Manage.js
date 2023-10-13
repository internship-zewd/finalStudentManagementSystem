import React from 'react';
import { useState, useEffect } from 'react';
import '../DashContent/DashContent.css';
import {Table} from 'react-bootstrap';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {ViewPopup} from './ViewPopup';
import {UpdatePopup} from './UpdatePopup';

function Manage() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [reminderinfo, setReminderinfo] = useState({});
    const [updatePopup, setUpdatePopup] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);

    useEffect(() => {
        getAllRemainders();

    }, [])

    const getAllRemainders=async()=>{

      await axios.get('http://localhost:8081/todo/getAll')
      .then((res)=>{
          console.log(res.data)
          setData(res.data)
          
      })
      .catch((err)=>{
          if(err){console.log(err)}
      })
  
  }
  const handleView=async(e,id)=>{
      e.preventDefault();
      return await axios.get(`http://localhost:8081/todo/getOne/${id}`)
      .then((res)=>{
  
          const viewData=res.data
          console.log(viewData)
  
          setReminderinfo(viewData)
          // console.log(response.data)
         
          setButtonPopup(true)
      
          
          
      })
      .catch((err)=>{
          if(err){console.log(err)}
      })
  
  
  }
  const handleUpdate=async(e,id)=>{
  
      // e.preventDefault(); 
      await axios.get(`http://localhost:8081/todo/getOne/${id}`)
      .then((response)=>{
          setReminderinfo(response.data)
          console.log(response.data)
          setUpdatePopup(true)
      })
      .catch((err)=>{
          if(err){
              console.log(err)
          }
      })
  
      
  
  }
  const handleDelete=async(e,id)=>{
      // e.preventDefault()
  
  await axios.delete(`http://localhost:8081/todo/delete/${id}`)
  .then((res)=>{
    console.log("deleted"+ res)
    console.log(res)
    window.location.reload()

})
  
  }

  


  return (
    <div className="dashContent">
    <div className="overview">
                <div className="title">
                <i className="uil uil-schedule toDo"></i>
                    <span className="text">To-Do/Manage</span>
                </div>

            </div>


            <div className="container">
                  <div className="title">
                  <span className="text">New Remainder</span>
                    </div>
                                          
                
                    <div className="content">
                     
                   
                    <form>
                    <div className="user-details">
                     <div className='input-box'>
                   
                        <input type="text" placeholder="Search Remainders" onChange={(e) => { setSearch(e.target.value) }} name="search" value={search} />
                    </div>
                    </div>
                    </form>
                
                </div>
                <br/>







                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Date</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {data.filter((item) => {
                            return search.toLowerCase() === "" ? item :
                                item.name.toLowerCase().includes(search);

                        })
                            .map((item) => (
                                <tr key={item.id}>

                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                    
                                    <button className="btn btn-primary btn-sm me-2" onClick={(e) => { handleView(e, item.id)}}><VisibilityIcon/></button>
                                    <button className="btn btn-primary btn-sm me-2" onClick={(e) => { handleUpdate(e, item.id)}}> <EditIcon/></button>                                    
                                    <button  className='btn btn-sm btn-danger' onClick={(e) => { handleDelete(e, item.id) }}> <DeleteIcon/></button>   </tr>
                            ))}
                              <UpdatePopup trigger={updatePopup} setTrigger={setUpdatePopup} reminderProp={reminderinfo}/>
                                    
                              <ViewPopup trigger={buttonPopup} setTrigger={setButtonPopup} reminderProp={reminderinfo} />
                    </tbody>
                </Table>

            </div>
            </div>


                   
)
}



export default Manage
