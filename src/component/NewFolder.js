import React, { Component } from 'react'
import add from '../public/add.png'
import {Figure} from "react-bootstrap"
import SetFolderName from './SetFolderName'

class NewFolder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalShow : false,
        }
    }

    handleClick = ()  => {
        this.setState({
            modalShow : true,
        })
    }

    render = () => {
        return (
            <Figure>
                <Figure.Image
                    width={70}
                    height={180}
                    alt="171x180"
                    src={add}
                    onClick={() => this.handleClick()}
                />
                <Figure.Caption>
                    새 폴더
                </Figure.Caption>
                <SetFolderName modalShow={this.state.modalShow} />
            </Figure>
        )
    }
}

export default NewFolder