import React, {useCallback} from 'react'
import { useDropzone } from 'react-dropzone'
import { Badge } from "react-bootstrap";

function FileUpload() {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <Badge pill variant="info">
                        Drop the files here ...
                    </Badge>
                    :
                    <Badge variant="info">
                        <p>파일을 끌어다 놓거나, 파일을 선택해 주세요</p>
                    </Badge>
            }
        </div>
    )
}

export default FileUpload