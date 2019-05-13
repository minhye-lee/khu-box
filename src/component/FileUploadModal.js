import React, { Component } from 'react'
import {Button, Form, Modal} from "react-bootstrap"
import FileUpload from './FileUpload'

class FileUploadModal extends Component{
    render = () => {
        return(
            <Modal show={true} onHide={() => alert('ddd')}>
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
                    <Button variant="secondary" onClick={() => this.props.showNewFolderModal(false)}>
                        취소
                    </Button>
                    <Button variant="primary" onClick={() => this.props.showNewFolderModal(false)}>
                        만들기
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default FileUploadModal