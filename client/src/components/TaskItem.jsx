


function TaskItem({curr}){

    return(
        <div>
            <h4>{curr.title}</h4>
            <p>{curr.description}</p>
            <p>{curr.priority}</p>
            <p>{curr.complited}</p>
        </div>
    )
}

export default TaskItem