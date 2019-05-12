import React, { Component } from 'react'
import Folder from './Folder'
import NewFolder from './NewFolder'

class FolderList extends Component {
    render = () => {
        return(
            <div>
                <Folder/>
                <NewFolder/>
            </div>
        )
    }
}

export default FolderList