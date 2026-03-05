import { useState, useEffect } from 'react'
import api from './api/api'
import axios from 'axios'

import './App.css'
import TaskList from './components/taskList'
import TaskForm from './components/TaskForm'

function App() {
  const [myTasks, setMyTasks] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      try{
        const res = await axios.get('http://localhost:4000/tasks')
        console.log('tasks', res.data)
        setMyTasks(res.data)
      }
      catch (err){
        console.error('Error fetching data:', err)
      }
    };

    fetchData()
    }, []);

  console.log('mytasks', myTasks);

  return (
    <>
      <div>
        <h1>hello</h1>
        <TaskList task={myTasks}/>
        <TaskForm task={myTasks}/>
      </div>
    </>
  )
}

export default App
