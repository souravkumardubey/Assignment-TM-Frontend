import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function Login({show,closeHandler,Handler,register}) {
    const title = register ? "Register" : "Login";
    let username = '';
    let password = '';
    function submit(){
        if(username.length >= 5 && password.length >= 5){
            Handler(username,password);
        }else alert("UserName and Password must be at least 5 characters long");
    }
    return (
        <>
            <Modal show={show} onHide={closeHandler} className={"modal-lg"} >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>UserName</Form.Label>
                            <Form.Control type="text" onChange={(e)=>username = e.target.value}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={(e)=>password=e.target.value}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"success"} onClick={submit}>{title}</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}