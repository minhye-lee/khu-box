import React, { Component } from 'react'
import {Button} from "react-bootstrap";
import InputWithLabel from './InputWithLabel'

class SignUp extends Component {
    render = () => {
        return (
            <div>
                <h4>회원가입</h4>
                <InputWithLabel label="Email" type="Email" placeholder="Email"/>
                <InputWithLabel label="Username" type="Username" placeholder="Username"/>
                <InputWithLabel label="Password" type="Password" placeholder="Password"/>
                <Button variant="secondary" size="lg" block>
                    Submit
                </Button>
            </div>
        )
    }
}

export default SignUp