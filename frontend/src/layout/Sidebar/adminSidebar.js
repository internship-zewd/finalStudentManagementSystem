export const adminSidebar = [
  {
      name:"Dashboard", 
      iconClassName:"uil uil-estate",
      to:"/dashboard"
  },
  {
      name:"Student", 
      to:"", 
      iconClassName:"uil uil-graduation-cap", 
      subMenus:[
          {
            name:"Add Student", to:"/Student/AddStudent"
          },
          {
           name:"All Students", to:"/Student/AllStudent"
          }
      ]
  },
  {
      name:"Employee", 
      to:"", 
      iconClassName:"uil uil-suitcase",
      subMenus:[
          {
            name:"Add Employee", to:"/Employee/AddEmployee"
          },
          {
           name:"All Employees", to:"/Employee/AllEmployee"
          }
      ]
  },
  {
      name:"Course", 
      to:"", 
      iconClassName:"uil uil-books",
      subMenus:[
          {
            name:"Add Course", to:"/Course/AddCourse"
          },
          {
            name:"All Courses", to:"/Course/AllCourse"
          }
      ]
  },
  {
      name:"Class", 
      to:"", 
      iconClassName:"uil uil-presentation",
      subMenus:[
          {
            name:"Add Class", to:"/Class/AddClass"
          },
          {
           name:"All Classes", to:"/Class/AllClass"
          }
      ]
  },
  {
    name:"To-Do", 
    to:"", 
    iconClassName:"uil uil-clipboard",
    subMenus:[
        {
          name:"Add Remainder", to:"/To-Do/AddRemainder"
        },
        {
          name:"Manage", to:"/To-Do/Manage"
        },
        {
          name:"Archive", to:"/To-Do/Archive"
        }
    ]
},
 
  {
      name:"Report", 
      to:"", 
      iconClassName:"uil uil-receipt-alt",
      subMenus:[
        
          {
            name:"Attendance Report", to:"/Report/Attendance"
          },
          {
            name:"Student Report Card", to:"/Report/ReportCard"
          }
      ]
  },
  {
      name:"Message", 
      to:"", 
      iconClassName:"uil uil-message",
      subMenus:[
          {
            name:"New Message", to:"/Message/NewMessage"
          },
      ]
  },
]