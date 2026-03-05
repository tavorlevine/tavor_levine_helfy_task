import { useState } from "react";
import { Carousel } from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
//import '../styles/taskList.css'
import TaskItem from './TaskItem' 


function TaskList({task}){
    const [index, setIndex] = useState(0)
    const length = task.length
    const curr = ((index % length) + length) % length

    

    if(length === 0) return <p>Loading..</p>;

    return(
        <div>
            
            <button onClick={()=> setIndex(index-1)}>prev</button>
            <div onClick={() => <TaskItem curr={task[curr]}/>}><h3>{task[curr]?.title}</h3></div>
            <button onClick={()=> setIndex(index+1)}>next</button>
            
                
            
                
                
            
            
        </div>
    )

}

export default TaskList