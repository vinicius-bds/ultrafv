import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import uploadIcon from '../../assets/icons/upload.svg'
import './styles.css'

export const Dropzone = () => {
    const [selectedFileURL, setSelectedFileURL] = useState('')
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]
        const fileURL = URL.createObjectURL(file)
        setSelectedFileURL(fileURL)
    }, [])

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*',
    })

    return (
        <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} accept="image/*"/>

            { selectedFileURL ? (
                <img src={selectedFileURL}/>
            ) : (
                <p>
                    <img src={uploadIcon} id="upload-icon"/>
                    Imagem de perfil
                </p>
            ) 
            }
        </div>
    )
}