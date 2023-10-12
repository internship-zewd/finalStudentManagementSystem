import React from 'react';
import { useState } from 'react';
import './App.css';
import Sidebar from './layout/Sidebar/Sidebar.js';
import Content from './layout/Content/Content';
import ContentTop from './Components/ContentTop/ContentTop';
import { SpecificMessage } from './Components/Message/SpecificMessage';
import AddEm from './Components/Employee/AddEm';

import {
  BrowserRouter as Router, Routes, Navigate,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Dashboard() {
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
               <Routes>
  
    
      
    <Route
   exact path="/Employee/AddEmployee"
    element={localStorage.getItem("role") === "Admin" || localStorage.getItem("role") === "Manager" ? <AddEm /> : <Navigate to="/dashboard" />}
  />
 
   </Routes>
              </section>
             
        </section>
    </div>
    
  )
}

export default Dashboard