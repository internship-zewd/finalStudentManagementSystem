import React from 'react';
import { useState,useEffect } from 'react';
import '../../App.css';
import Sidebar from "../../layout/Sidebar/Sidebar"
import ContentTop from '../ContentTop/ContentTop';
import DashContent from './DashContent';
import axios from 'axios'


function DashDashboard() {
  const [sidebarClose, setSidebarClose] = useState(false);
  const handleClick= () => {
    setSidebarClose(!sidebarClose);
  }


const getNotification=async()=>{
  await axios.get(`http://localhost:8081/todo/getDue`)
  .then((res)=>{
    console.log(res.data)
  })
  .catch((err)=>{
    if(err){console.log(err)}
  })
    

}
useEffect(()=>{
  getNotification()
},[])

  return (
       <div className="full_content">
        <section>
                              
          
             <Sidebar sidebarClose={sidebarClose}  click={handleClick}/>
             <section className="dashboard">
                <ContentTop click={handleClick}/>
                 <DashContent />
              </section>
             
        </section>
    </div>
    
  )
}

export default DashDashboard