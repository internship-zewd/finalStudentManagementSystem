import React from 'react'
import '../DashContent/DashContent.css'
function ReportCard() {
  return (
    <div className="dashContent">
        <div className="overview">
                    <div className="title">
                        <i className="uil uil-receipt-alt"></i>
                        <span className="text">Report/Student Report Card</span>
                    </div>

                </div>


                <div className="activity">
                    <div className="title">
                        <span className="textActivities">Recent Activities</span>
                    </div>

                    <div className="activityData">
                        
                    </div>
                </div>
                </div>
  )
}

export default ReportCard