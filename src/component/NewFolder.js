import React, { Component } from 'react'
import add from '../public/add.png'
import {Figure} from "react-bootstrap"
import SetFolderName from './SetFolderName'

class NewFolder extends Component {

    render = () => {
        return (
            <Figure>
                <Figure.Image
                    width={70}
                    height={180}
                    alt="171x180"
                    src={add}
                    onClick={() => alert('ddd')}
                />
                <Figure.Caption>
                    새 폴더
                </Figure.Caption>
            </Figure>
        )
    }
}

export default NewFolder