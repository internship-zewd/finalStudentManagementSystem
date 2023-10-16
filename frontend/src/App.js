// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // import SignIn2 from './js/signIn2'
// // import HelloAdmin from './js/helloAdmin';
// import PageRouter from './js/pageRouter';

// function App() {
//   // const isLoggedIn = localStorage.getItem('access-token') !== null;

//   return < PageRouter />
// }

// export default App;
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn2 from "./Components/Signin/signIn2"
import DashDashboard from './Components/DashContent/DashDash';
import AddEmDashboard from './Components/Employee/AddDash';
import AllEmDashboard from './Components/Employee/AllDash';
import AddClDashboard from './Components/Class/AddDash';
import AllClDashboard from './Components/Class/AllDash';
import AllStDashboard from './Components/Student/AllDash';
import AddStDashboard from './Components/Student/AddDash';
import AddCoDashboard from './Components/Course/AddDash';
import AllCoDashboard from './Components/Course/AllDash';
import AttendanceDashboard from './Components/Attendance/AttendanceDash';
import StudentReportDashboard from './Components/Report/StudentReportDash';
import NewMDashboard from './Components/Message/MessageDash';
import SpecificMessageDashboard from './Components/Message/SpecificMessageDash';
import AddRemindDashboard from "./Components/To-Do/AddRemindDashboard";
import ManageRemindDashboard from "./Components/To-Do/ManageRemindDashboard";
import ArchiveRemindDashboard from './Components/To-Do/ArchiveRemindDashboard';
import AssessmentDashboard from './Components/Assessment/AssessmentDash';
import MarkDashboard from './Components/MarkList/MarkDash';
import NotificationDashboard from "./Components/To-Do/NotificationDashboard"
import ReportAttendanceDashboard from "./Components/Report/ReportAttendanceDash"

function App() {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  

  useEffect(() => {

    if(localStorage.getItem("access-token") !== null){
      setIsLoggedIn(true)
    }
  }, [isLoggedIn])
  console.log(isLoggedIn);

  
  return (
    <Router>
      {console.log(localStorage.getItem('role'))}
      <h1>{console.log(isLoggedIn)}</h1>
      <Routes>
        <Route path="/" element={<SignIn2 />}/>
        <Route
          path="/dashboard"
          element={
            localStorage.getItem("access-token") !== null ? (
              <DashDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Employee/AddEmployee"
          element={
            localStorage.getItem("access-token") !== null &&
            localStorage.getItem("role") === "Admin" ? (
              <AddEmDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
          
        />
        <Route
          path="/Employee/AllEmployee"
          element={
            localStorage.getItem("access-token") !== null &&
            localStorage.getItem("role") === "Admin"||"Manager" ? (
              <AllEmDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Class/AddClass"
          element={
            localStorage.getItem("access-token") !== null &&
            localStorage.getItem("role") === "Admin" ? (
              <AddClDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Class/AllClass"
          element={
            localStorage.getItem("access-token") !== null &&
            localStorage.getItem("role") === "Admin" ? (
              <AllClDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Student/AllStudent"
          element={
            localStorage.getItem("access-token") !== null &&
            localStorage.getItem("role") === "Admin" ? (
              <AllStDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Student/AddStudent"
          element={
            localStorage.getItem("access-token") !== null &&
            localStorage.getItem("role") === "Admin" ? (
              <AddStDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Course/AddCourse"
          element={
            localStorage.getItem("access-token") !== null &&
            localStorage.getItem("role") === "Admin" ? (
              <AddCoDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Course/AllCourse"
          element={localStorage.getItem("access-token") !== null && localStorage.getItem("role") === "Admin" ? <AllCoDashboard /> : <Navigate to="/"/>}
      />
      <Route
          path="/To-Do/AddRemainder"
          element={localStorage.getItem("access-token") !== null && localStorage.getItem("role") === "Admin"||"Instructor"||"Manager"||"Accountant" ? <AddRemindDashboard/> : <Navigate to="/" />}
      />
      <Route
          path="/To-Do/Manage"
          element={localStorage.getItem("access-token") !== null && localStorage.getItem("role") === "Admin"||"Instructor"||"Manager"||"Accountant" ? <ManageRemindDashboard/> : <Navigate to="/" />}
      />
      <Route
          path="/To-Do/Archive"
          element={localStorage.getItem("access-token") !== null && localStorage.getItem("role") === "Admin"||"Instructor"||"Manager"||"Accountant"? <ArchiveRemindDashboard/> : <Navigate to="/" />}
      />
        <Route
          path="/To-Do/Notification"
          element={localStorage.getItem("access-token") !== null && localStorage.getItem("role") === "Admin"||"Instructor" ? <NotificationDashboard/> : <Navigate to="/" />}
      />


      
        <Route
          path="/Attendance/AttendanceForm"
          element={
            localStorage.getItem("access-token") !== null &&
            localStorage.getItem("role") === "Instructor" ? (
              <AttendanceDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
          <Route
          path="/Assessment/AssessmentForm"
          element={
            localStorage.getItem("access-token") !== null &&
            localStorage.getItem("role") === "Instructor" ? (
              <AssessmentDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/Report/AttendanceReport"
          element={
            localStorage.getItem("access-token") !== null &&
            localStorage.getItem("role") === "Admin"||"Instructor" ? (
              <ReportAttendanceDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Report/StudentReportCard"
          element={
            localStorage.getItem("access-token") !== null &&
            localStorage.getItem("role") === "Admin"||"Instructor" ? (
              <StudentReportDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Message/NewMessage"
          element={
            localStorage.getItem("access-token") !== null &&
            localStorage.getItem("role") === "Admin" ? (
              <NewMDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Message/Specific"
          element={
            localStorage.getItem("access-token") !== null &&
            localStorage.getItem("role") === "Admin" ? (
              <SpecificMessageDashboard/>
            ) : (
              <Navigate to="/" />
            )
          }
        />
    
      </Routes>
    </Router>
  );
}


export default App;
