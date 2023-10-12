import {useState,useEffect } from 'react';
import axios from 'axios'
import './AddEm.css'
export const Filter=(props)=>{

    let data=props.data;
    const setData=props.setData
    const dataInitial=props.dataInitial


    const filterEmployeeType=(e)=>{  
        e.preventDefault()
        console.log(data)
        
       const employeeType=e.target.value
       console.log(employeeType)
               const filteredData=dataInitial.filter((item)=>{
                console.log(data)
                      return employeeType===""?item:
                      item.employee_type.includes(employeeType)

              
            })
        setData(filteredData)
        }
        console.log(data)
       

return(
   
    <div className="content">
   
    <div className="user-details">
  
        <form>
        
        <div className = 'input-box'>
        <div className="gender-details">
                <select onChange={(e)=>{filterEmployeeType(e) }} >
                    <option value="" selected="selected">All employees</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="instructor">Instructor</option>
                    <option value="accountant">Accountant</option>

                </select> 
                    
                     </div>
                     
                     </div>
              
                </form>
               

               
                
          {props.children}     
                </div>
                </div>
             
)
}