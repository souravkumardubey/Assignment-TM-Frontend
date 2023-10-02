import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function TaskModal({show,mode,taskObj={},Handlers={}}) {
    const heading = mode === 0 ? "New Task" : "Update Task";
    let buttons;
    function onSubmit(mode){
        if(taskObj.title.length >= 5 || taskObj.description.length >= 5) {
            if (mode === 1) Handlers.updateHandler(taskObj);
            else if(mode === 2)Handlers.createHandler(taskObj);
        }else{
            alert("Title and Description have to be at least 5 Character long")
        }
    }
    if(mode === 1){
        buttons = (<>
            <Button variant="danger" onClick={()=>Handlers.deleteHandler()}>Delete</Button>
            <Button variant="warning" onClick={()=>onSubmit(1)}>Update</Button>
        </>)
    }else{
        buttons = <Button variant="primary" onClick={()=>{onSubmit(2)}}>Create</Button>
    }
    return (
        <>
            <Modal show={show} onHide={Handlers.closeHandler} className={"modal-lg"} centered={true}>
                <Modal.Header closeButton>
                    <Modal.Title>{heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" defaultValue={taskObj.title} onChange={(e)=>{
                                taskObj = {...taskObj,title:e.target.value}
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={4} defaultValue={taskObj.description} onChange={(e)=>{
                                taskObj = {...taskObj,description:e.target.value}
                            }}/>
                        </Form.Group>
                        <div style={{display:"flex",width:"100%"}}>
                            <Form.Group className={"me-3"} style={{width:"100%"}}>
                                <Form.Label>Status</Form.Label>
                                <Form.Select aria-label="Status" defaultValue={taskObj.status} onChange={(e)=>{
                                    taskObj = {...taskObj,status:e.target.value}
                                }}>
                                    <option value="1">Todo</option>
                                    <option value="2">In Progress</option>
                                    <option value="3">Done</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group style={{width:"100%"}}>
                                <Form.Label>Due Date</Form.Label>
                                <Form.Control type={"date"} defaultValue={taskObj.dueDate} onChange={(e)=>{
                                    taskObj = {...taskObj,dueDate:e.target.value}
                                }}/>
                            </Form.Group>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {buttons}
                </Modal.Footer>
            </Modal>
        </>
    );
}
