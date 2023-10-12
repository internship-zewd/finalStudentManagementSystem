export const instructorSidebar = [
    {
        name:"Dashboard", 
        iconClassName:"uil uil-estate",
        to:"/"
    },

    {
        name: "Attendance",
        iconClassName: "",
        to: "/Attendance/TakeAttendance"
    },

    {
        name: "Assessment", 
        iconClassName: "",
        to: "",
        subMenus:[
            {
              name:"Take Assessment", to:"/Assessment/Take Assessment"
            },
            {
              name:"Edit Assessment", to:"/Assessment/Edit Assessment"
            },
        ]
    },
    {
        name: "Marklist",
        iconClassName: "",
        to: "/Marklist/ Check Marklist"

    },
    {
        name: "Grade Report",
        iconClassName: "",
        to: "/Grade Report"

    }
]