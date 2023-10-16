export const instructorSidebar = [
  {
    name: "Dashboard",
    iconClassName: "uil uil-estate",
    to: "/dashboard",
  },
  {
    name: "To-Do",
    to: "",
    iconClassName: "uil uil-clipboard",
    subMenus: [
      {
        name: "Add Remainder",
        to: "/To-Do/AddRemainder",
      },
      {
        name: "Manage",
        to: "/To-Do/Manage",
      },
      {
        name: "Archive",
        to: "/To-Do/Archive",
      },
    ],
  },

  {
    name: "Attendance",
    to: "",
    iconClassName: "uil uil-user-check",
    subMenus: [
      {
        name: "Attendance Form",
        to: "/Attendance/AttendanceForm",
      },
      {
        name: "Manage Attendance",
        to: "/Attendance/ManageAttendance",
      },
    ],
  },
  {
    name: "Assessment",
    to: "",
    iconClassName: "uil uil-check-square",
    subMenus: [
      {
        name: "Assessment Form",
        to: "/Assessment/AssessmentForm",
      },
    ],
  },

  {
    name: "Marklist",
    iconClassName: "uil uil-list-ol",
    to: "/Marklist/CheckMarklist",
  },
  {
    name: "Grade Report",
    iconClassName: "uil uil-file-alt",
    to: "/GradeReport",
  },

  {
    name: "Report",
    to: "",
    iconClassName: "uil uil-receipt-alt",
    subMenus: [
      {
        name: "Attendance Report",
        to: "/Report/AttendanceReport",
      },
      {
        name: "Student Report Card",
        to: "/Report/StudentReportCard",
      },
    ],
  },
];
