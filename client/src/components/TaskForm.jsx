import { useState } from "react"



function TaskForm({tasks}){
    const length = tasks.length
    const id = length+1
    const [formData, setFormData] = useState({
        id: id,
        title: "",
        description: "",
        priority: ""
    })
    

    function handleTitle(e) {
        setFormData(prev => ({
            ...prev,
            title: e.target.value
        }));
    }

    function handleDescription(e) {
        setFormData(prev => ({
            ...prev,
            description: e.target.value
        }));
    }

    function handlePriority(e) {
        setFormData(prev => ({
            ...prev,
            priority: e.target.value
        }));
    }

    async function handleSubmit(e){
        e.preventDefult()

        try{
            // need to check if the title exist 
            // no - need to create new task
            // yes - need to update the task
            const res = await axios.post('http://localhost:4000/tasks',formData) // for create
        }
        catch(err){
            console.error('Error creatind task', err)
        }
    }

    return(
        <form onSubmit={()=> handleSubmit}>
            <label>Title </label>
            <input type="text" placeholder="enter title" value={formData.title} onChange={handleTitle}/>
            <label>Description </label>
            <input type="text" placeholder="enter description" value={formData.description} onChange={handleDescription}/>
            <label>Priority </label>
            <select value={formData.priority} onChange={handlePriority}>
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit">Submit</button>
        </form>
        
    )
}

export default TaskForm