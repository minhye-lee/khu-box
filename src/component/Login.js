import React, { Component } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class Login extends Component {
    render = () => {
        return (
            <div>
                <h4>로그인</h4>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                </Form>
                <Button variant="secondary" size="lg" block>
                    Login
                </Button>
                <Button variant="link">
                    <Link to="/auth/signup">
                        Sign Up
                    </Link>
                </Button>
            </div>
        )
    }

}

export default Login