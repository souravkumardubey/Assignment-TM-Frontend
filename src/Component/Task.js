import React,{useState} from "react";
import Card from 'react-bootstrap/Card';
import './Task.css'
import TaskModal from "./TaskModal";
import {editTask,deleteTask} from "../Network";

export default function Task({taskObj,update,del}) {
    const [show,setShow] = useState(false);
    function getColor(){
        if(Number(taskObj.status) === 1)return "#ff0000";
        else if(Number(taskObj.status) === 2)return "#ffca22";
        else if(Number(taskObj.status) === 3)return "#0e933f";
    }

    function onUpdate(task){
        setShow(false);
        editTask(task)
            .then((id)=>{
                if(id !== undefined)update(task);
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    function onDelete(){
        setShow(false);
        deleteTask(taskObj)
            .then((id)=>{
                if(id !== undefined)del(id);
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    function onShow(){
        setShow(true);
    }
    return (
        <>
            <Card className={"ch mb-2 bg-dark-subtle"} onClick={onShow}>
                <div style={{display:"flex"}} className={"mt-2 ms-2"}>
                    <span className={"dot mt-1 ms-1 me-2"} style={{backgroundColor:getColor()}}/>
                    <Card.Title>{taskObj.title}</Card.Title>
                </div>
                <div className={"ms-3 my-2"}>
                    <Card.Text>
                        {taskObj.description.length > 30 ? taskObj.description.slice(0,30) + "...":taskObj.description}
                    </Card.Text>
                </div>
            </Card>
            <TaskModal mode={1} show={show} taskObj={taskObj} Handlers={{deleteHandler:onDelete,updateHandler:onUpdate,closeHandler:()=>setShow(false)}}/>
        </>
    );
}

