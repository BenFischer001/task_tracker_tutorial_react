import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask.js";

function App() {

  const [addTaskToggle, setAddTaskToggle] = useState(false)

  const [tasks, setTasks] = useState( [
    {
        id:1,
        text:"task 1",
        day: "Feb, 5th at 2:30PM",
        reminder: true,
    },{
        id:2,
        text:"task 2",
        day: "Feb, 6th at 1:30PM",
        reminder: false,
    },{
        id:3,
        text:"task 3",
        day: "Feb, 8th at 9:00PM",
        reminder: true,
    },
])

const addTask = (task) => {
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
