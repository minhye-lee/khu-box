import React, { Component } from 'react'
import { Figure } from "react-bootstrap";
import folder from "../public/folder.png"

class Folder extends Component {
    render = () => {
        return (
            <Figure>
                <Figure.Image
                    width={100}
                    height={180}
                    alt="171x180"
                    src={folder}
                />
                <Figure.Caption>
                    기본 폴더
                </Figure.Caption>
            </Figure>
        )
    }
}

export default Folder