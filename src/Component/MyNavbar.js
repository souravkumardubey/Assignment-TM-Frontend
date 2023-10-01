import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Login from "./Login";

export default function MyNavbar() {
    const [show,setShow] = useState(false);
    return (
        <>
            <Navbar className={"bg-dark"}>
                <Container fluid className={"px-4"}>
                    <Navbar.Brand href="#home" className={"text-light"}>Task</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text >
                            <a className={"text-light"} onClick={()=>setShow(true)}>Login</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Login show={show} closeHandler={()=>setShow(false)}/>
        </>

    );
}


