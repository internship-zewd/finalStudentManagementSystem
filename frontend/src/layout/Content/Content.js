import React from 'react'
import './Content.css'

import Dashboard from '../../Dashboard';
import SignIn2 from '../../Components/Signin/signIn2';

import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';

// import AddSt from '../../Components/Student/AddSt';
// import AllSt from '../../Components/Student/AllSt';
import AddEm from '../../Components/Employee/AddEm';
// import AllEm from '../../Components/Employee/AllEm';
// import AddCo from '../../Components/Course/AddCo';
// import AllCo from '../../Components/Course/AllCo';
// import AddCl from '../../Components/Class/AddCl';
// import AllCl from '../../Components/Class/AllCl';
// import AddPr from '../../Components/Project/AddPr';
// import AddRemainder from '../../Components/To-Do/AddRemainder';
// import Manage from '../../Components/To-Do/Manage';
// import Archive from '../../Components/To-Do/Archive';
// import AllPr from '../../Components/Project/AllPr';
// import Financial from '../../Components/Report/Financial';
// import Attendance from '../../Components/Report/Attendance';
// import ReportCard from '../../Components/Report/ReportCard';
// import NewM from '../../Components/Message/NewM';
// import {SpecificMessage} from '../../Components/Message/SpecificMessage';


function Content({click}) {
  console.log( localStorage.getItem("role"))
  return (
   <Routes>
  
    
      
    <Route
   exact path="/Employee/AddEmployee"
    element={localStorage.getItem("role") === "Admin" || localStorage.getItem("role") === "Manager" ? <AddEm /> : <Navigate to="/dashboard" />}
  />
 
   </Routes>
    
            //   {/* <Route  exact path={'/Student/Add Student'}>
            //     <AddSt/>
            //   </Route>
              
            //   <Route path={'/Student/All Students'}>
            //     <AllSt/>
            //   </Route>
             
            //  <Route path={'/Employee/Add Employee'}>
            //     <AddEm/>
            //   </Route>

            //   <Route path={'/Employee/All Employees'}>
            //     <AllEm/>
            //   </Route>

            //   <Route path={'/Course/Add Course'}>
            //     <AddCo/>
            //   </Route>

            //   <Route path={'/Course/All Courses'}>
            //    <AllCo/>
            //   </Route>

            //   <Route path={'/Class/Add Class'}>
            //     <AddCl/>
            //   </Route>

            //   <Route path={'/Class/All Classes'}>
            //     <AllCl/>
            //   </Route>

           
            //   <Route path={'/Report/Financial Report'}>
            //     <Financial/>
            //   </Route>

            //   <Route path={'/Report/Attendance Report'}>
            //     <Attendance/>
            //   </Route>

            //   <Route path={'/Report/Student Report Card'}>
            //     <ReportCard/>
            //   </Route>

            //   <Route path={'/Message/New Message'}>
            //     <NewM/>
            //   </Route>

            //   <Route exact path={'/Message/Specific'}>
            //     <SpecificMessage/>
            //   </Route>

            //   <Route exact path={'/To-Do/Add Remainder'}>
            //     <AddRemainder/>
            //   </Route>
            //   <Route exact path={'/To-Do/Manage'}>
            //   <Manage/>
            //   </Route>
            //   <Route exact path={'/To-Do/Archive'}>
            //     <Archive/>
            //   </Route> */}
              
              
              

            // </Routes> 
            
               
           
                
            
        
  )
}

export default Content