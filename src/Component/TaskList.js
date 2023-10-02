import React from "react";
import Card from "./Card";
import Task from "./Task";
export default function TaskList({arr,update,del}){
    return(
        <Card cardClass={"mx-4 py-3"} cardStyle={{minHeight:"50vh"}}>
            {arr.map((task)=><Task taskObj={task} key={task.id} update={update} del={del}/>)}
        </Card>
    )
}