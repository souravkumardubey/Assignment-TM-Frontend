import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function Login({show,closeHandler,loginHandler,}) {
    return (
        <>
            <Modal show={show} onHide={closeHandler} className={"modal-lg"} >
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>UserName</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"success"}>Login</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}