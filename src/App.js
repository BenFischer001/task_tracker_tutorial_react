import { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import { BrowserRouter } from "react-router-dom";

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

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)

    const data = await res.json()

    return(data)
  }

const addTask = async (task) => {
  const res = await fetch(`http://localhost:5000/tasks`, {method: "POST", headers: {'Content-type': 'application/json',}, body: JSON.stringify(task),})

  const data = await res.json()

  setTasks([...tasks, data])

  /*const id = Math.floor(Math.random() * 1000) +1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])*/
}

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: "DELETE"})


    setTasks(tasks.filter((task) => task.id != id))
  }

  const toggleTask = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {method: "PUT", headers: {'Content-type': 'application/json',}, body: JSON.stringify(updatedTask),})

    const data = await res.json()
 

    setTasks(tasks.map((task) => task.id==id ? {...task,reminder:data.reminder} : task))
  }

  return (
    <Router>
      <div className="App">
        <Header title = 'Hello' addTaskOpen={addTaskToggle} onAdd={() => setAddTaskToggle(!addTaskToggle)}></Header>

        <Routes>
          <Route path="/" element={
            <>
              {addTaskToggle && <AddTask addTask={addTask}/>}
              {tasks.length > 0 ?<Tasks tasks ={tasks} deleteTask = {deleteTask} toggleTask={toggleTask} /> : "no tasks"}
            </>
          } />
          <Route path="/about" Component={About} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
