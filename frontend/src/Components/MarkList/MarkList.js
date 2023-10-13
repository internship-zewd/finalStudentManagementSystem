import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import "../DashContent/DashContent.css";

function MarkList() {
  const [sqlresult, setSqlResult] = useState([]);
  const [selectedClass, setSelectedClass] = useState();
  const [classList, setClassList] = useState();
  const accessToken = localStorage.getItem("access-token");
  let result = [];
  useEffect(() => {
    axios
      .post("http://localhost:8081/markList/fetchSpecificClass", {
        accessToken,
      })
      .then((res) => {
        if (res.data.success === false) {
          console.log("error fetching data");
        } else {
          setClassList(res.data);
        }
      });
  }, []);

  const handleClassChange = () => {
    axios
      .post("http://localhost:8081/markist/fetchMarkList", { selectedClass })
      .then((res) => {
        if (res.data.success === false) {
          console.log("error fetching data");
        } else {
          setSqlResult(res.data);
          for (const studentResult of sqlresult) {
            let index = result.findIndex(
              (s) => s.studentName === studentResult.studentName
            );
            if (index !== -1) {
              result[index][studentResult.assessmentName] = studentResult.mark;
            } else {
              let obj = {
                name: studentResult.studentName,
              };
              obj[studentResult.assessmentName] = studentResult.mark;
              result.push(obj);
            }
          }
        }
      });
  };

  return (
    <div>
      <div className="dashContent">
        <div className="overview">
          <div className="title">
            <i className="uil uil-receipt-alt"></i>
            <span className="text">Report/Financial Report</span>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <div className="user-details">
              <form onSubmit={handleClassChange}>
                <div className="input-box">
                  <div className="gender-details">
                    <select
                      onChange={(e) => {
                        setSelectedClass(e.target.value);
                      }}
                    >
                      {classList.map((className, index) => {
                        <option
                          key={index}
                          value={className.full_identification}
                        >
                          {className.full_identification}
                        </option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className="input-box">
                  <input type="submit" value="Submit" />
                </div>
              </form>
              <div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      {Object.keys(result[0]).map((key) => (
                        <th key={key}>{key}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {result.map((obj, index) => (
                      <tr key={index}>
                        {Object.values(obj).map((value) => (
                          <td key={value}>{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default MarkList;
