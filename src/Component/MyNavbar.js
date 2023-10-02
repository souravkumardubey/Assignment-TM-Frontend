import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Login from "./Login";
import {login,register} from "../Network";
import {findDOMNode} from "react-dom";

export default function MyNavbar({reRender}) {
    const [showLogin,setShowLogin] = useState(false);
    const [showRegister,setShowRegister] = useState(false);
    function onLogin(username,password){
        setShowLogin(false);
        login(username,password).then((loggedIn)=>{
            reRender();
            if(!loggedIn)alert("Invalid Username or password")
        })
    }
    function onRegister(username,password){
        setShowRegister(false);
        register(username,password).then((loggedIn)=>{
            reRender();
            if(!loggedIn)alert("Invalid Username or password")
        })
    }
    function logout(){
        localStorage.clear();
        reRender()
    }
    let buttons = (
        <>
            <a className={"text-light me-3"} onClick={()=>setShowLogin(true)} >Login</a>
            <a className={"text-light"} onClick={()=>setShowRegister(true)}>Register</a>
        </>
    )
    if(localStorage.getItem('ID') !== null)buttons = (
        <>
            <a className={"text-light me-3"}>{localStorage.getItem('username')}</a>
            <a className={"text-light"} onClick={logout} >Logout</a>
        </>
    )
    return (
        <>
            <Navbar className={"bg-dark"}>
                <Container fluid className={"px-4"}>
                    <Navbar.Brand href="#home" className={"text-light"}>Task</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text >
                            {buttons}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Login show={showLogin}  Handler={onLogin} closeHandler={()=>setShowLogin(false) }/>
            <Login show={showRegister}  Handler={onRegister} register={true} closeHandler={()=>setShowRegister(false)}/>

        </>

    );
}


