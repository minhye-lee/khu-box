import React, { Component } from 'react'
import Header from '../component/Header'
import FolderList from '../component/FolderList'

class Home extends Component {
    render = () => {
        return (
            <div>
                <Header/>
                <FolderList/>
            </div>
        )
    }
}

export default Home