import React, { Component } from 'react'
import { Button, Form, Modal } from "react-bootstrap"
import FileUpload from './FileUpload'
import { showFileUploadModal } from "../redux/Folder";
import { connect } from "react-redux";

class FileUploadModal extends Component{

    render = () => {
        const { fileShow, showFileUploadModal } = this.props
        return(
            <Modal show={fileShow} onHide={() => showFileUploadModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>파일 업로드</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>파일 업로드</Form.Label>
                            <FileUpload/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => showFileUploadModal(false)}>
                        취소
                    </Button>
                    <Button variant="primary" onClick={() => showFileUploadModal(false)}>
                        만들기
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    fileShow : state.folder.fileShow,

})

const mapDispatchToProps = (dispatch) => ({
    showFileUploadModal(isshow) {
        dispatch(showFileUploadModal(isshow))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(FileUploadModal)
