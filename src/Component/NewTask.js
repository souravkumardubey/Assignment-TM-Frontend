import React, {useState} from "react";
import Card from "./Card";
import Button from 'react-bootstrap/Button';
import TaskModal from "./TaskModal";
import {postTask} from "../Network";

export default function NewTask({createTask}) {
    const [show,setShow] = useState(false);
    function newTaskHandler(){
        setShow(true);
    }

    function onCreate(task){
        if(task.status === undefined)task.status = 1;
        postTask(task).then(
            (id)=>{
                if(id !== undefined){
                    task.id = id;
                    createTask(task);
                }
            },
            (err)=>console.log(err)
        )
        setShow(false);
    }
    const loggedIn = localStorage.hasOwnProperty("ID");
    return (
        <>
            <Card cardClass={"mx-4 mt-4 mb-2 p-2"}>
                <div style={{display:"flex",width:"100%"}}>
                    <Button variant="outline-info" size="lg" style={{width:"100%"}} onClick={newTaskHandler} disabled={!loggedIn}>New Tasks</Button>
                </div>
            </Card>
            <TaskModal show={show} mode={0} Handlers={{closeHandler:()=>setShow(false),createHandler:onCreate}}/>
        </>
    )
}

