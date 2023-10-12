


export const adminMenuItems =[
    {
        name:"Dashboard", 
        iconClassName:"uil uil-estate",
        to:"/"
    },
    {
        name:"Student", 
        to:"", 
        iconClassName:"uil uil-graduation-cap", 
        subMenus:[
            {
              name:"Add Student", to:"/Student/Add Student"
            },
            {
             name:"All Students", to:"/Student/All Students"
            }
        ]
    },
    {
        name:"Employee", 
        to:"", 
        iconClassName:"uil uil-suitcase",
        subMenus:[
            {
              name:"Add Employee", to:"/Employee/Add Employee"
            },
            {
             name:"All Employees", to:"/Employee/All Employees"
            }
        ]
    },
    {
        name:"Course", 
        to:"", 
        iconClassName:"uil uil-books",
        subMenus:[
            {
              name:"Add Course", to:"/Course/Add Course"
            },
            {
              name:"All Courses", to:"/Course/All Courses"
            }
        ]
    },
    {
        name:"Class", 
        to:"", 
        iconClassName:"uil uil-presentation",
        subMenus:[
            {
              name:"Add Class", to:"/Class/Add Class"
            },
            {
             name:"All Classes", to:"/Class/All Classes"
            }
        ]
    },
    {
        name:"Project", 
        to:"", 
        iconClassName:"uil uil-rocket",
        subMenus:[
            {
              name:"Add Project", to:"/Project/Add Project"
            },
            {
              name:"All Projects", to:"/Project/All Projects"
            }
        ]
    },
    {
        name:"Report", 
        to:"", 
        iconClassName:"uil uil-receipt-alt",
        subMenus:[
            {
              name:"Financial Report", to:"/Report/Financial Report"
            },
            {
              name:"Attendance Report", to:"/Report/Attendance Report"
            },
            {
              name:"Student Report Card", to:"/Report/Student Report Card"
            }
        ]
    },
    {
        name:"Message", 
        to:"", 
        iconClassName:"uil uil-message",
        subMenus:[
            {
              name:"New Message", to:"/Message/New Message"
            },
            {
              name:"Archives", to:"/Message/Archives"
            }
        ]
    },
]

