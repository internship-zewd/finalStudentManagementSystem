import React from 'react'
import '../DashContent/DashContent.css'
 import '../../css/Popup.css'
import { Table } from 'react-bootstrap';
import {ViewPopup} from './ViewPopup';
import {UpdatePopup} from './UpdatePopup'
import {useState,useEffect,useCallback,updateState} from 'react';

import axios from 'axios'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function AllCo() {

    const [search,setSearch]=useState("");
    const [data,setData]=useState([]);
    const [error,setError]=useState({});
    const[buttonPopup,setButtonPopup]=useState(false);
    const [courseInfo,setCourseInfo]=useState({});
    const [updatePopup,setUpdatePopup]=useState(false);
   
    useEffect(()=>{ 
        getCourse();
    
       },[])
    
    const getCourse=async()=>{
    
        await axios.get('http://localhost:8081/course/getAll')
        .then((res)=>{
            
            setData(res.data)
            
        })
        .catch((err)=>{
            if(err){console.log(err)}
        })
    
    }
    const handleView=async(e,id)=>{
        // e.preventDefault();
        return await axios.get(`http://localhost:8081/course/getOne/${id}`)
        .then((response)=>{
    
            const viewData=response.data
    
            setCourseInfo(viewData)
            // console.log(response.data)
             console.log(courseInfo)
            setButtonPopup(true)
        
            
            
        })
        .catch((err)=>{
            if(err){console.log(err)}
        })
    
    
    }
    const handleUpdate=async(e,id)=>{
    
        // e.preventDefault(); 
        await axios.get(`http://localhost:8081/course/update/${id}`)
        .then((response)=>{
            setCourseInfo(response.data)
            // console.log(response.data)
            console.log(courseInfo.course_name)
            setUpdatePopup(true)
        })
        .catch((err)=>{
            if(err){
                console.log(err)
            }
        })
    
        
    
    }
    const handleDelete=async(e,id)=>{
           
    await axios.delete(`http://localhost:8081/course/delete/${id}`)
    .then((res)=>{console.log("deleted"+ res)
    console.log(res)})
    window.location.reload()
    
    }
  return (
    <div className="dashContent">
      <div className="overview">
        <div className="title">
          <i className="uil uil-suitcase"></i>
          <span className="text">Course/All Courses</span>
        </div>
        <div className="content">
          <div className="user-details">
            {/* <Filter data={data} setData={setData} />  */}
            <form>
              <div className="input-box">
                <br />
                <input
                  type="text"
                  placeholder="Search Course"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  name="search"
                  value={search}
                />
              </div>
            </form>
          </div>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th> Course Id.</th>
              <th>Course Name</th>
              <th>Tuition Fee</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.course_name.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={item.id}>
                  <td>{item.id_tag}</td>
                  <td>{item.course_name}</td>
                  <td>{item.fee}</td>
                  <td>{item.course_duration}</td>

                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={(e) => {
                      handleView(e, item.id);
                    }}
                  >
                    <VisibilityIcon />
                  </button>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={(e) => {
                      handleUpdate(e, item.id);
                    }}
                  >
                    <EditIcon />
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={(e) => {
                      handleDelete(e, item.id);
                    }}
                  >
                    {" "}
                    <DeleteIcon />
                  </button>
                </tr>
              ))}
          </tbody>
        </Table>
        <UpdatePopup
          trigger={updatePopup}
          setTrigger={setUpdatePopup}
          updateProp={courseInfo}
        />

        <ViewPopup
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          courseProp={courseInfo}
        />
      </div>
    </div>
  );
}

export default AllCo




  
                 