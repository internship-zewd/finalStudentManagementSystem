import React from 'react'
import '../DashContent/DashContent.css'
import './AddEm.css'
import "../../css/Popup.css";
import { Table } from 'react-bootstrap';
import {ViewPopup} from './ViewPopup';
import {UpdatePopup} from './UpdatePopup'
import {useState,useEffect,useCallback,updateState} from 'react';
import {Filter} from "./Filter";
import axios from 'axios'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import {getAllEmployees} from './getAllEmployees'

function AllEm() {




    const [search,setSearch]=useState("");
    const [data,setData]=useState([]);
    const[dataInitial,setDataInitial]=useState([])
    const [error,setError]=useState({});
    const[buttonPopup,setButtonPopup]=useState(false);
    const [employeeInfo,setEmployeeInfo]=useState({});
    const [updatePopup,setUpdatePopup]=useState(false);



   
    useEffect(()=>{ 
        // <getAllEmployees data={data} setData={setData}/>
        getAllEmployees()
      
       },[])
       const getAllEmployees=async()=>{
        
        const instructor=await axios.get('http://localhost:8081/instructor/getAll')
        const admin=await axios.get('http://localhost:8081/admin/getAll')
        const manager=await axios.get('http://localhost:8081/manager/getAll')
        const accountant=await axios.get('http://localhost:8081/accountant/getAll')

        await axios.all([instructor,admin,manager,accountant])
        .then( 
           axios.spread((...allData)=>{
            const instructor=allData[0].data
            const admin=allData[1].data
            const manager=allData[2].data
            const accountant=allData[3].data
          console.log(admin)
         
         
          const getEmployees=[instructor,admin,manager,accountant]
        
          console.log(getEmployees)           
                const employees=[]
                var k =0; 

                for(var i=0;i<getEmployees.length;i++){
                    
                    for(var j=0;j<getEmployees[i].length;j++){
                        
                            employees[k]=getEmployees[i][j]
                            k++
              
            }}
            console.log(employees)
             setData(employees); 
             setDataInitial(employees);
            
       
           }) 
            
    )
        .catch((err)=>{
            if(err){console.log(err)}
        })
   
}
    
    
    const handleView=async(e,id,employee)=>{
        // e.preventDefault();
        console.log(employeeInfo)
        return await axios.get(`http://localhost:8081/${employee}/getOne/${id}`)
        .then((response)=>{
    
            const viewData=response.data
            console.log(viewData)
    
            setEmployeeInfo(viewData)
            setButtonPopup(true)
        
            
            
        })
        .catch((err)=>{
            if(err){console.log(err)}
        })
    
    
    }
    const handleUpdate=async(e,id,employee)=>{
    
        
        await axios.get(`http://localhost:8081/${employee}/getOne/${id}`)
        .then((response)=>{
            setEmployeeInfo(response.data)
            console.log(response.data)

            setUpdatePopup(true)
        })
        .catch((err)=>{
            if(err){
                console.log(err)
            }
        })
    
        
    
    }
    const handleDelete=async(e,id,employee)=>{
        console.log(id)

           e.preventDefault()
    await axios.delete(`http://localhost:8081/${employee}/delete/${id}`)
    .then((res)=>{console.log("deleted"+ res)})
    .catch((err)=>{if(err){console.log(err)}})
    // window.location.reload()
    
    }
  return (
    <div className="dashContent">
      <div className="overview">
        <div className="title">
          <i className="uil uil-suitcase"></i>
          <span className="text">Employee/All Employees</span>
        </div>
        <div className="content">
          <div className="user-details">
            <Filter
              data={data}
              setData={setData}
              getAllEmployees={getAllEmployees}
              dataInitial={dataInitial}
            />
            <form>
              <div className="input-box">
                <br />
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
            </form>
          </div>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Reg No.</th>
              <th>Employee Name</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.full_name.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={item.id_tag}>
                  {console.log(data)}
                  <td>{item.id_tag}</td>
                  <td>{item.full_name}</td>
                  <td>{item.employee_type}</td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={(e) => {
                      handleView(e, item.id, item.employee_type);
                    }}
                  >
                    <VisibilityIcon />
                  </button>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={(e) => {
                      handleUpdate(e, item.id, item.employee_type);
                    }}
                  >
                    <EditIcon />
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={(e) => {
                      handleDelete(e, item.id, item.employee_type);
                    }}
                  >
                    {" "}
                    <DeleteIcon />
                  </button>{" "}
                </tr>
              ))}
          </tbody>
        </Table>
        <ViewPopup
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          employeeProp={employeeInfo}
        />
        <UpdatePopup
          trigger={updatePopup}
          setTrigger={setUpdatePopup}
          updateProp={employeeInfo}
        />
      </div>
    </div>
  );
}

export default AllEm