import {useState,useEffect } from 'react';
import axios from 'axios'
import './AddEm.css'
export const Filter=(props)=>{

    let members=props.members;
    const setMembers=props.setMembers
    const dataInitial=props.dataInitial


    const filterMemberType=(e)=>{  
        e.preventDefault()
        console.log(members)
        
       const memberType=e.target.value
       console.log(memberType)
               const filteredData=dataInitial.filter((item)=>{
                console.log(members)
                      return memberType===""?item:
                      item.member_type.includes(memberType)

              
            })
        setMembers(filteredData)
        }
        console.log(members)
       

return(
   
    <div className="content">
   
    <div className="user-details">
  
        <form>
        
        <div className = 'input-box'>
        <div className="gender-details">
                <select onChange={(e)=>{filterMemberType(e) }} >
                    <option value="" selected="selected">All members</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="instructor">Instructor</option>
                    <option value="accountant">Accountant</option>
                    <option value="student">Student</option>

                </select> 
                    
                     </div>
                     
                     </div>
              
                </form>
               

               
                
          {props.children}     
                </div>
                </div>
             
)
}