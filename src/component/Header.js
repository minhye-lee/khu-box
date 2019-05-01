import React, { Component } from 'react'
import { Navbar, Nav } from "react-bootstrap"
import LoginButton from './LoginButton'

class Header extends Component {
    render = () => {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">KHU-BOX</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">홈</Nav.Link>
                    <Nav.Link href="#features">파일</Nav.Link>
                    <Nav.Link href="#pricing">추가기능</Nav.Link>
                </Nav>
                <LoginButton/>
            </Navbar>
        )
    }
}

export default Header