import React, {useState} from "react";
import MyNavbar from "./Component/MyNavbar";
import NewTask from "./Component/NewTask";
import TaskList from "./Component/TaskList";
import {getTasks} from './Network'

const App = () => {
    const [first,setFirst] = useState(true);
    const [tasks,setTasks] = useState([]);
    function createTask(task){
        setTasks((prevState)=>[task,...prevState])
    }
    function updateTask(task){
        for(let i = 0;i < tasks.length;i++){
            if(tasks[i].id === task.id){
                tasks[i] = task;
            }
        }
        setTasks([...tasks])
    }
    function deleteTask(id){
        const arr = []
        for(let i = 0;i < tasks.length;i++){
            if(tasks[i].id !== id){
                arr.push(tasks[i]);
            }
        }
        setTasks(arr);
    }
    function reRender(){
        setTasks([])
        setFirst(true);
    }

    if(first && localStorage.getItem('ID') != null){
        getTasks()
            .then((tasks)=>{
                setTasks(tasks);
            })
        setFirst(false);
    }
    return(
        <div >
            <MyNavbar reRender={reRender}/>
            <NewTask createTask={createTask}/>
            <TaskList arr={tasks} del={deleteTask} update={updateTask}/>
        </div>

    )
};

export default App;
