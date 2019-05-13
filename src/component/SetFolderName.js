import React, { Component} from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import { showNewFolderModal } from "../redux/Folder";
import { connect } from "react-redux";

class SetFolderName extends Component {
    render = () => {
        return(
            <Modal show={this.props.modalShow} onHide={() => this.props.showNewFolderModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>새 폴더</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>새 폴더</Form.Label>
                            <Form.Control type="name" placeholder="제목없는 폴더" />
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

const mapStateToProps = (state) => ({
    modalShow : state.modalShow,

})

const mapDispatchToProps = (dispatch) => ({
    showNewFolderModal(isshow) {
        dispatch(showNewFolderModal(isshow));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(SetFolderName)
