import React, { Component } from 'react'
import Header from '../component/Header'
import Folder from '../component/Folder'

class Home extends Component {
    render = () => {
        return (
            <div>
                <Header/>
                <Folder/>
            </div>
        )
    }
}

export default Home