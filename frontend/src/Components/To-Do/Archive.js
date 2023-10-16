import React, { useState,useEffect } from 'react';
import '../DashContent/DashContent.css';
import './Archive.css';
import axios from 'axios';
import {ViewPopup} from './ViewPopup';





function Archive() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [reminderinfo, setReminderinfo] = useState({});
  const [buttonPopup, setButtonPopup] = useState(false);
  const username=localStorage.getItem('username')
  console.log(username)


  const handleView=async(id)=>{

    return await axios.get(`http://localhost:8081/todo/getOne/${id}`)
    .then((res)=>{
       
        const viewData=res.data
        console.log(viewData)
        setReminderinfo(viewData)      
        setButtonPopup(true) })}

        const getTasks=async()=>{
             await axios.get(`http://localhost:8081/todo/getAll/${username}`)
                        .then((res)=>{
                  let completed=[]
                  let incomplete=[]
                  const response=res.data
                  response.forEach((task)=>{
                  if(task.status===true){
                        completed.push(task)
                       }else{
                        incomplete.push(task)}
                         setCompletedTasks(completed)
                         setTasks(incomplete)
                        })})}


                        
                        useEffect(()=>{
                          getTasks()
                        },[])


  // const handleInputChange = (e) => {
  //   setNewTask(e.target.value);
  // };

  // const handleAddTask = (e) => {
  //   e.preventDefault();
  //   if (newTask.trim() !== '') {
  //     setTasks([...tasks, { text: newTask, completed: false }]);
  //     setNewTask('');
  //   }
  // };

  const handleCompleteTask = async(id) => {
    const status=true

    await axios.put(`http://localhost:8081/todo/update/${id}`,{status})
    .then((res)=>{
      
      console.log(res)
      window.location.reload()
    
    })
    .catch((err)=>{if(err){console.log(err)}})


    // const updatedTasks = [...tasks];
    // const completedTask = updatedTasks.splice(item, 1)[0];
    // completedTask.completed = true;
    // setTasks(updatedTasks);
    // setCompletedTasks([...completedTasks, completedTask]);
  };

  // const updateCompletedTasks = (updatedTasks) => {
  //   const completed = updatedTasks.filter((task) => task.completed);
  //   setCompletedTasks(completed);
  // };

  return (
    <div className="dashContent">
      <div className="overview">
        <div className="title">
          <i className="uil uil-archive-alt archiveIcon"></i>
          <span className="text">Archive</span>
        </div>
      </div>

      <div className="container">
        <div className="title">
          <span className="text">To-Do List</span>
        </div>

        <div className="content">
          {/* <form onSubmit={handleAddTask}>
            <div className="add-task">
              <input
                type="text"
                placeholder="Add a task..."
                value={newTask}
                onChange={handleInputChange}
              />
              <button className="btn btn-primary" type="submit">
                Add
              </button>
            </div>
          </form> */}

          <div className="title">
            <span className="text">In Progress</span>
          </div>

          <div className="task-list"> 
          <ViewPopup trigger={buttonPopup} setTrigger={setButtonPopup} reminderProp={reminderinfo} />
            {tasks.map((task) => (
              <div className="task" key={task.id}>
                <input
                  type="radio"
                  checked={task.status}
                  onChange={() => handleCompleteTask(task.id)}
                />
                <span className={ task.completed? "task-text completed-task" : "task-text"} onClick={()=>{handleView(task.id)}}>
                  {task.name}
                </span>
              </div>
            ))}
          </div>

          <div className="title">
            <span className="text">completed</span>
          </div>  
                

          <div className="task-list">
            {completedTasks.map((task) => (
              <div className="task complete-task" key={task.id}>
                <span className="task-text" onClick={()=>{handleView(task.id)}}>{task.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Archive;