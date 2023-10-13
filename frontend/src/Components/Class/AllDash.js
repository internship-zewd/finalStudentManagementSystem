import React from 'react';
import { useState } from 'react';
import '../../App.css';
import Sidebar from "../../layout/Sidebar/Sidebar"
import ContentTop from '../ContentTop/ContentTop';
import AllCl from './AllCl';


function AllClDashboard() {
  const [sidebarClose, setSidebarClose] = useState(false);
  const handleClick= () => {
    setSidebarClose(!sidebarClose);
  }
  return (
       <div className="full_content">
        <section>
                              
          
             <Sidebar sidebarClose={sidebarClose}  click={handleClick}/>
             <section className="dashboard">
                <ContentTop click={handleClick}/>
                 <AllCl />
              </section>
             
        </section>
    </div>
    
  )
}

export default AllClDashboard