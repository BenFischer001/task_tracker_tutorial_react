import { useState, useEffect } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask.js";

//npm

function App() {

  const [addTaskToggle, setAddTaskToggle] = useState(false)

  const [tasks, setTasks] = useState( [])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, []) // if vale changes will run 


  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')

    const data = await res.json()

    return(data)
  }

const addTask = async (task) => {
  const id = Math.floor(Math.random() * 1000) +1

  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id))
  }

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => task.id==id ? {...task,reminder:!task.reminder} : task))
  }

  return (
    <div className="App">
      <Header title = 'Hello' addTaskOpen={addTaskToggle} onAdd={() => setAddTaskToggle(!addTaskToggle)}></Header>
      {addTaskToggle && <AddTask addTask={addTask}/>}
      {tasks.length > 0 ?<Tasks tasks ={tasks} deleteTask = {deleteTask} toggleTask={toggleTask} /> : "no tasks"}
    </div>
  );
}

export default App;
