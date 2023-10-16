import React from "react";
import { useState } from "react";
import "../../App.css";
import Sidebar from "../../layout/Sidebar/Sidebar";
import ContentTop from "../ContentTop/ContentTop";
import AssessmentForm from "./AssessmentForm";

function AssessmentDashboard() {
  console.log("this is assessment dash")
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
          <AssessmentForm />
        </section>
      </section>
    </div>
  );
}

export default AssessmentDashboard;
