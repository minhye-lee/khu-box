import React from 'react'
import {Col, Form, Row} from "react-bootstrap";

const InputWithLabel = ({label, ...rest}) => (
    <Form>
        <Form.Group as={Row}>
            <Form.Label column sm={2}>
                {label}
            </Form.Label>
            <Col sm={10}>
                <Form.Control {...rest} />
            </Col>
        </Form.Group>
    </Form>
)

export default InputWithLabel