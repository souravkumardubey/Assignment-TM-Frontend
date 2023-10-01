import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card";
import Task from "./Task";
export default function TaskList({arr}){
    return(
        <Card cardClass={"mx-4 py-3"} cardStyle={{minHeight:"50vh"}}>
            {arr.map((task)=><Task taskObj={task} key={task.id}/>)}
        </Card>
    )
}