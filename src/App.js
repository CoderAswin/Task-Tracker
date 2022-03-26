
import { useState } from "react"
import AddTask from "./components/AddTask"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

const App = () => {

  const [showAddTask , setShowAddTask] = useState(false)

  // tasks => initial state , setTasks => updates the initial state , useState => specify what to update inside usestate hook  
  const [tasks,setTasks] = useState([
    {
        id:1,
        text:"Doctors Appointment",
        day:"feb 5th at 2:30 PM",
        reminder: false
    },
    {
        id:2,
        text:"Meeting at school",
        day:"feb 6th at 2:30 PM",
        reminder: false
    },
    {
        id:3,
        text:"Shopping",
        day:"feb 6th at 2:30 PM",
        reminder: false
    },
    
])

//Add task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id , ...task} //{id , text , day , reminder}
  setTasks([...tasks , newTask]) // [{tasks},{newTask}]
}

//delete task

const deletetask = (id) =>{
  setTasks(tasks.filter((task)=> task.id != id ))
}

//toggle reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? {...task,reminder: !task.reminder} : task))
  // let a = ["aswin" , "kumar"]
 // let b = [1,2,...a] => [1,2,"aswin","kumar"]  
}


  return (
    <div className='container'>
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd = {showAddTask} />
      {showAddTask && <AddTask onAdd = {addTask} />}
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deletetask}  onToggle = {toggleReminder} /> : "No tasks to show"}
    </div>
  )
}

export default App