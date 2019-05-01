import React, { Component } from 'react'
import {Button, Col, Form, Row} from "react-bootstrap";

class SignUp extends Component {
    render = () => {
        return (
            <div>
                <h4>회원가입</h4>
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalUsername">
                            <Form.Label column sm={2}>
                                Username
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="password" placeholder="Username" />
                            </Col>
                    </Form.Group>
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Password
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Form>
                <Button variant="secondary" size="lg" block>
                    Submit
                </Button>
            </div>
        )
    }
}

export default SignUp