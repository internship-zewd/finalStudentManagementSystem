import React from 'react';
import { useState } from 'react';
import '../../App.css';
import Sidebar from "../../layout/Sidebar/Sidebar"
import ContentTop from '../ContentTop/ContentTop';
import {SpecificMessage} from './SpecificMessage';


function SpecificMessageDashboard(props) {

  const emails=props.emails
  console.log("we're in here")
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
                 <SpecificMessage emails={emails}/>

                 
              </section>
                
        </section>
        
    </div>
    
  )
}

export default SpecificMessageDashboard