import React from 'react'
// import './DashContent.css'
import { useState, useEffect } from "react";
import axios from "axios";
import {
 BarChart, Bar, Cell, XAxis, YAxis, 
 CartesianGrid, Tooltip, 
 Legend, ResponsiveContainer, 
 LineChart, Line } 
 from 'recharts';
 
 import AccDashContent from './AccountantDashContent';
 import AdminDashContent from './AdminDashContent';
import ManDashContent from './ManagerDashContent';
import InsDashContent from './InstructorDashContent';

function DashContent() {

  const role = localStorage.getItem("role")
  const renderDash = () => {
    if (role === "Admin") {
      return <AdminDashContent />;
    } else if (role === "Manager") {
      return <ManDashContent />;
    } else if (role === "Instructor") {
      return <InsDashContent />;
    }else if (role === "Accountant") {
      return <AccDashContent />;
    }
  }

    const data = [
        {
          name: 'Student',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Employee',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Class',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Course',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Project',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Class',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Course',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

      useEffect(()=>{
        getData()
        },[])
      
        const getData=async(req,res)=>{
await axios.get(`http://localhost:8081/instructor`)
.then(console.log(res))
.catch((err)=>{
  if(err){
    console.log(err)
  }})
      
        }




       

  return (
   <div className="dashContent">
        <div className="overview">
                    <div className="title">
                        <i className="uil uil-estate"></i>
                        <span className="text">Dashboard</span>
                    </div>
           <div className="container">
                    {/* <div className="boxes">
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
                    </div> */}

                    <div>{renderDash()}</div>
                


                <div className="activity">
                    <div className="title">
                        <span className="textActivities">Activities</span>
                    </div>

                    <div className="activityData">
                        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#24c8d1e8" />
                <Bar dataKey="uv" fill="#f52c5bd0" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#f52c5bd0" />
                </LineChart>
            </ResponsiveContainer>

                </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
  )
}

export default DashContent