import { useState, useEffect } from "react";
import axios from "axios";

function AdminDashContent() {
  const [courseCount, setcourseCount] = useState(0);

  useEffect(() => {
    getcourseCount();
  }, []);

  const getcourseCount = async () => {
    await axios
      .get("http://localhost:8081/course/count")
      .then((res) => {
        console.log("Response data:", res.data);

        const count = parseInt(res.data);
        if (!isNaN(count)) {
          setcourseCount(count);
        } else {
          console.error("Invalid response data:", res.data.length);
        }
      })
      .catch((error) => {
        console.error(
          "Error occurred while fetching the number of course:",
          error
        );
      });
  };

  return (
    <div className="boxes">
      <div className="box box-1">
        <i className="uil uil-graduation-cap"></i>
        <span className="text">Total Students</span>
        <span className="number">23</span>
      </div>

      <div className="box box2">
        <i className="uil uil-books"></i>
        <span className="text">Total Courses</span>
        <span className="number">{courseCount}</span>
      </div>

      <div className="box box3">
        <i className="uil uil-suitcase"></i>
        <span className="text">Total Employees</span>
        <span className="number">35</span>
      </div>
    </div>
  );
}

export default AdminDashContent;
