import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import AuthWrapper from '../component/AuthWrapper'
import Login from '../component/Login'
import SignUp from '../component/SignUp'

class Auth extends Component {
    render = () => {
        return (
            <AuthWrapper>
                <Route path="/auth/login" component={Login}/>
                <Route path="/auth/signup" component={SignUp}/>
            </AuthWrapper>
        )
    }
}

export default Auth