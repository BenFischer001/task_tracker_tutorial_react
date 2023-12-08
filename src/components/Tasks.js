import Task from "./Task"

const Tasks = ({tasks, deleteTask, toggleTask}) => {
    return (
        <>
            {tasks.map((task, index) => (<Task key={index} task={task} deleteTask={deleteTask}  toggleTask={toggleTask} />))}
        </>
    )
}


export default Tasks