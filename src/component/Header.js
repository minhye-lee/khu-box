import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import LoginButton from './LoginButton'

class Header extends Component {
    render = () => {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">KHU-BOX</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">홈</Nav.Link>
                    <NavDropdown title="파일" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">내 폴더</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">공유 폴더</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">휴지통</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing">추가기능</Nav.Link>
                </Nav>
                <LoginButton/>
            </Navbar>
        )
    }
}

export default Header