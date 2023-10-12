import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn2 from './Components/Signin/signIn2'
import Dashboard from './Dashboard'
import AddEm from './Components/Employee/AddEm';


function App() {

  
  return (
    // <Router>
    //   <h1>{console.log(isLoggedIn)}</h1>
    //   <Routes>
    //     <Route path="/" element={<SignIn2 />} />
    //     <Route
    //       path="/dashboard"
    //       element={localStorage.getItem("access-token") !== null ? <Dashboard /> : <Navigate to="/" />}
    //     />
    //     <Route
    //     path="/Employee/AddEmployee"
    //     element={localStorage.getItem("role") === "Admin" || localStorage.getItem("role") === "Manager" ? <AddEm /> : <Navigate to="/dashboard" />}
    //   />
    //   </Routes>
      
    // </Router>

    <Routes>
      <Route
          path="/dashboard"
          element={localStorage.getItem("access-token") !== null ? <Dashboard /> : <Navigate to="/" />}
        />

    <Route path="/" index={<SignIn2 />} element={<SignIn2 />} />

  </Routes>
    
  );
}


export default App;
