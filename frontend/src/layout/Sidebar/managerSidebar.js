export const managerSidebar = [
    {
        name: "Dashboard",
        iconClassName: "",
        to: "/dashboard"
    },
    {
        name: "Employee",
        iconClassName: "",
        to: "",
        subMenus: [
            {
                name: "All Employees",
                iconClassName: "",
                to: "/Employee/All Employees"
            },
            {
                name: "Add Employees",
                iconClassName: "",
                to: "/Employee/Add Employees"
            },
        ]
    },
    {
        name: "Student",
        iconClassName: "",
        to: "",
        subMenus: [
            {
                name: "All Student",
                iconClassName: "",
                to: "/Student/All Student"
            },
            {
                name: "Add Student",
                iconClassName: "",
                to: "/Student/Add Student"
            },
        ]
    }
]