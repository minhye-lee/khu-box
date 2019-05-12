import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import InputWithLabel from './InputWithLabel'


class Login extends Component {
    render = () => {
        return (
            <div>
                <h4>로그인</h4>
                <InputWithLabel label="Email" type="Email" placeholder="Email"/>
                <InputWithLabel label="Password" type="Password" placeholder="Password"/>
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