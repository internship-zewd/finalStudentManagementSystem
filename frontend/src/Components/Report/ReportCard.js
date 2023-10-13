import React from 'react'
import {useState, useEffect} from 'react'
import '../DashContent/DashContent.css'
import { Table } from 'react-bootstrap';
import {ViewPopup} from './ViewPopup';
import VisibilityIcon from '@mui/icons-material/Visibility'
// import './Report.css';
import axios from 'axios'
function ReportCard() {
    const[classFetched,  setClassFetched]=useState([]);
    const[classs, setClasss] = useState ([]);
    const[isVisible,setIsVisible]=useState(false)
    const[students,setStudents]=useState([])
    const [search, setSearch] = useState("");
    const [studentinfo, setStudentinfo] = useState({});
    const [buttonPopup, setButtonPopup] = useState(false);
   
    useEffect(()=>{
        getClassAll();
    },[])

  const getStudent=async(class_id)=>{
    console.log(class_id)
    await axios.get(`http://localhost:8081/student/getByClass/${class_id}`)
    .then((res)=>{
        console.log(res.data)
        setStudents(res.data)
        setIsVisible(true)
    })
    .catch((err)=>{
        if(err){console.log(err)}
    })

}


const handleView=async(e,id)=>{
    e.preventDefault()

    return await axios.get(`http://localhost:8081/marklist/getOne/${id}`)
    .then((response)=>{
        const viewData=response.data
        setStudentinfo(viewData)
        setButtonPopup(true)
    })
    .catch((err)=>{
        if(err){console.log(err)}
    })


}


const getClassAll=async()=>{
    await axios.get("http://localhost:8081/class_room/getAll ")
    .then((res)=>{
        setClassFetched(res.data)
    })
    .catch((err)=>{if(err){console.log(err)}})

}


    
  return (
    <div className="dashContent">
        <div className="overview">
                    <div className="title">
                        <i className="uil uil-receipt-alt"></i>
                        <span className="text">Report/Student Report Card</span>
                    </div>

                </div>


            <div className='container'>
             <div className='content'>
                <div className='user-deatils'>
                    <form>
                    <div className='input-box'>
                    <select required onChange={(e)=>{getStudent(e.target.value )}} name="classs">
                                    <option value="" selected='selected'>Select Class</option>
                                    {classFetched.map((clas)=>(
                                         <option value={clas.id}>{clas.full_identification}</option>

                                    ))}
                    </select></div>

                     {isVisible && <div>
                    <div className='input-box'>
                   
                        <input type="text" placeholder="Search Students" onChange={(e) => { setSearch(e.target.value) }} name="search" value={search} />
                    </div>
                    <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>



                        {students.map((item, index) => (
                                <tr key={item.id}>

                                    <td>{item.full_name}</td>
                                    <td>{item.email}</td>
                                    
                                    <button className="btn btn-primary btn-sm me-2" onClick={(e) => { handleView(e, item.id)}}><VisibilityIcon/></button>

                                    
                                   <ViewPopup trigger={buttonPopup} setTrigger={setButtonPopup} studentProp={studentinfo} />
                                </tr>
                            ))}
                    </tbody>
                </Table>

                    </div>}

                     </form>  
                  </div>
               </div>
            </div>
         </div>
  )
}

export default ReportCard