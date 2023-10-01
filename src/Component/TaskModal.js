import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function TaskModal({show,mode,taskObj={},Handlers={}}) {
    const heading = mode === 0 ? "New Task" : "Update Task";
    let buttons;
    let curDate = new Date().toJSON().slice(0, 10);
    if(mode === 1){
        buttons = (<>
            <Button variant="danger" onClick={Handlers.deleteHandler}>Delete</Button>
            <Button variant="warning" onClick={Handlers.updateHandler}>Update</Button>
        </>)
    }else{
        buttons = <Button variant="primary" onClick={Handlers.createHandler}>Create</Button>
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
                            <Form.Control type="text" value={taskObj.title}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={4} value={taskObj.description}/>
                        </Form.Group>
                        <div style={{display:"flex",width:"100%"}}>
                            <Form.Group className={"me-3"} style={{width:"100%"}}>
                                <Form.Label>Status</Form.Label>
                                <Form.Select aria-label="Status" value={taskObj.status}>
                                    <option value="1">Todo</option>
                                    <option value="2">In Progress</option>
                                    <option value="3">Done</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group style={{width:"100%"}}>
                                <Form.Label>Due Date</Form.Label>
                                <Form.Control type={"date"} defaultValue={curDate}/>
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
