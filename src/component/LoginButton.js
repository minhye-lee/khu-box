import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class LoginButton extends Component {
    render = () => {
        return (
            <Button variant="secondary" href="/auth/login">
                Login
            </Button>
        )
    }
}

export default LoginButton