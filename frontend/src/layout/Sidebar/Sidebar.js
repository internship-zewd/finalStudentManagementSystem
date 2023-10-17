import React, { useEffect } from 'react';
import { useState } from 'react';
import Logo from '../../resource/images/logo.png';
import './Sidebar.css';
import { accountantSidebar } from './accountantSidebar';
import { instructorSidebar } from './instructorSidebar';
import { managerSidebar } from './managerSidebar';
import { adminSidebar } from './adminSidebar';

import MenuItem from '../../Components/MenuItem/MenuItem';
import { signInSidebar } from './signInSidebar';
// import { useContext } from 'react';



function Sidebar({sidebarClose}, {click}) {
    const [expand, setExpand] = useState(false);
    
    useEffect(() => {

        if(sidebarClose){
            document.querySelectorAll('.submenu').forEach(el => {
                el.classList.remove('expanded')
            })
        }
    })
    const role = localStorage.getItem("role")
    let menuItems = []
if( role === "Instructor"){
  menuItems = instructorSidebar
}
else if( role === "Admin"){
    menuItems = adminSidebar
  }
  else if( role === "Manager"){
    menuItems = managerSidebar
  }
  else if( role === "Accountant"){
    menuItems = accountantSidebar
  }
//  menuItems =[
//     {
//         name:"Dashboard", 
//         iconClassName:"uil uil-estate",
//         to:"/"
//     },
//     {
//         name:"Student", 
//         to:"", 
//         iconClassName:"uil uil-graduation-cap", 
//         subMenus:[
//             {
//               name:"Add Student", to:"/Student/Add Student"
//             },
//             {
//              name:"All Students", to:"/Student/All Students"
//             }
//         ]
//     },
//     {
//         name:"Employee", 
//         to:"", 
//         iconClassName:"uil uil-suitcase",
//         subMenus:[
//             {
//               name:"Add Employee", to:"/Employee/Add Employee"
//             },
//             {
//              name:"All Employees", to:"/Employee/All Employees"
//             }
//         ]
//     },
//     {
//         name:"Course", 
//         to:"", 
//         iconClassName:"uil uil-books",
//         subMenus:[
//             {
//               name:"Add Course", to:"/Course/Add Course"
//             },
//             {
//               name:"All Courses", to:"/Course/All Courses"
//             }
//         ]
//     },
//     {
//         name:"Class", 
//         to:"", 
//         iconClassName:"uil uil-presentation",
//         subMenus:[
//             {
//               name:"Add Class", to:"/Class/Add Class"
//             },
//             {
//              name:"All Classes", to:"/Class/All Classes"
//             }
//         ]
//     },
//     {
//         name:"Project", 
//         to:"", 
//         iconClassName:"uil uil-rocket",
//         subMenus:[
//             {
//               name:"Add Project", to:"/Project/Add Project"
//             },
//             {
//               name:"All Projects", to:"/Project/All Projects"
//             }
//         ]
//     },
//     {
//         name:"Report", 
//         to:"", 
//         iconClassName:"uil uil-receipt-alt",
//         subMenus:[
//             {
//               name:"Financial Report", to:"/Report/Financial Report"
//             },
//             {
//               name:"Attendance Report", to:"/Report/Attendance Report"
//             },
//             {
//               name:"Student Report Card", to:"/Report/Student Report Card"
//             }
//         ]
//     },
//     {
//         name:"Message", 
//         to:"", 
//         iconClassName:"uil uil-message",
//         subMenus:[
//             {
//               name:"New Message", to:"/Message/New Message"
//             },
//             {
//               name:"Archives", to:"/Message/Archives"
//             }
//         ]
//     },
// ]

  return (
   <nav className= {sidebarClose ? " sideBar close" : "sideBar" }>
            <div className="logo">
                <div className="logoImage"> 
                <img src={Logo} alt="" />
                </div>

                <span className="logoName">ZEWD ACADEMY</span>
            </div>

            <div className="menuItems" >
                <ul className="navLinks " >
                   {
                    menuItems.map((menuItem, index) => (
                        <MenuItem 
                        expand={expand}
                        key={index}
                        name={menuItem.name}
                        to={menuItem.to}
                        subMenus={menuItem.subMenus || []}
                        iconClassName={menuItem.iconClassName}
                        
                        
                        
                        />
                    ))
                   }
                    
                </ul>
            </div>

        </nav>
  )
}

export default Sidebar