import React from "react";
import { useState } from "react";
import "../../App.css";
import Sidebar from "../../layout/Sidebar/Sidebar";
import ContentTop from "../ContentTop/ContentTop";
import ManageAttendance from "./ManageAttendance";

function ManageAttendanceDashboard() {
  console.log("this is Attendance dash")
  const [sidebarClose, setSidebarClose] = useState(false);
  const handleClick = () => {
    setSidebarClose(!sidebarClose);
  };
  return (
    <div className="full_content">
      <section>
        <Sidebar sidebarClose={sidebarClose} click={handleClick} />
        <section className="dashboard">
          <ContentTop click={handleClick} />
          <ManageAttendance />
        </section>
      </section>
    </div>
  );
}

export default ManageAttendanceDashboard;
