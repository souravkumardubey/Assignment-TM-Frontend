import React, {useState} from "react";
import Card from "./Card";
import Button from 'react-bootstrap/Button';
import TaskModal from "./TaskModal";


export default function NewTask() {
    const [show,setShow] = useState(false);
    function newTaskHandler(){
        setShow(true);
    }

    function onCreate(){

    }

    return (
        <>
            <Card cardClass={"mx-4 mt-4 mb-2 p-2"}>
                <div style={{display:"flex",width:"100%"}}>
                    <Button variant="outline-info" size="lg" style={{width:"100%"}} onClick={newTaskHandler}>New Tasks</Button>
                </div>
            </Card>
            <TaskModal show={show} mode={0} Handlers={{closeHandler:()=>setShow(false),createHandler:onCreate}}/>
        </>
    )
}

