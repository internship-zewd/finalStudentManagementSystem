export const instructorSidebar = [
    {
        name:"Dashboard", 
        iconClassName:"uil uil-estate",
        to:"/"
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
        name:"Attendance", 
        to:"", 
        iconClassName:"uil uil-books",
        subMenus:[
            {
              name:"Attendance Form", to:"/Attendance/Attendance Form"
            },
           
        ]
    },
    {
        name:"Assessment", 
        to:"", 
        iconClassName:"uil uil-file-alt",
        subMenus:[
            {
              name:"Assessment Form", to:"/Assessment/Assessment Form"
            },
           
        ]
      },
         {
              name:"Report", 
              to:"", 
              iconClassName:"uil uil-receipt-alt",
              subMenus:[
                  {
                    name:"Attendance Report", to:"/Report/Attendance Report"
                  },
                  {
                    name:"Student Report Card", to:"/Report/Student Report Card"
                  }
              ]
          },

    {
        name: "Marklist",
        iconClassName: "uil uil-receipt-alt",
        to: "/Marklist/ Check Marklist"

    },
    {
        name: "Grade Report",
        iconClassName: "uil uil-file-alt",
        to: "/Grade Report"

    }
]