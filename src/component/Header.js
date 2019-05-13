import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import LoginButton from './LoginButton'
import { connect } from 'react-redux'
import { showNewFolderModal, showFileUploadModal } from '../redux/Folder'
import SetFolderName from './SetFolderName'
import FileUploadModal from './FileUploadModal'
class Header extends Component {
    render = () => {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">KHU-BOX</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">홈</Nav.Link>
                    <NavDropdown title="파일" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/personal">내 폴더</NavDropdown.Item>
                    <NavDropdown.Item href="/share">공유 폴더</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/trash">휴지통</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="새로 만들기" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => this.props.showNewFolderModal(true)}>새 폴더</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.props.showFileUploadModal(true)}>파일 업로드</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">폴더 업로드</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <LoginButton/>
                <SetFolderName/>
                <FileUploadModal/>
            </Navbar>

        )
    }
}

const mapStateToProps = (state) => ({
    modalShow : state.modalShow,

})

const mapDispatchToProps = (dispatch) => ({
    showNewFolderModal(isshow) {
        dispatch(showNewFolderModal(isshow))
    },
    showFileUploadModal(isshow) {
        dispatch(showFileUploadModal(isshow))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)