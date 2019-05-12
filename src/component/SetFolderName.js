import React, { Component} from 'react'
import { Modal, Button } from "react-bootstrap";

class SetFolderName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalShow : false,
        }
    }

    handleClose = ()  => {
        this.setState({
            modalShow : false,
        })
    }
    render = () => {
        return(
            <Modal show={this.props.modalShow} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SetFolderName