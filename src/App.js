import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import MyNavbar from "./Component/MyNavbar";
import NewTask from "./Component/NewTask";
import TaskList from "./Component/TaskList";
import {getTasks} from './Network'

const App = () => {
    const [tasks,setTasks] = useState([]);
    useEffect(() => {
        getTasks().then((arr)=>setTasks(arr));
    }, []);
    return(
        <div >
            <MyNavbar/>
            <NewTask/>
            <TaskList arr={tasks}/>
        </div>

    )
};

export default App;
