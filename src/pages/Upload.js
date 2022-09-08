import React, { useState } from 'react'
import storage from '../fireebase.config'
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import { useNavigate } from 'react-router-dom'


const Upload = () => {
    const navigate = useNavigate()
    const [imageUpload, setImageUpload] = useState(null)
    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()} `)
        uploadBytes(imageRef, imageUpload).then(() => {
            navigate('/')

        })

    }


    return (
        <div>
            <input type="file" onChange={event => { setImageUpload(event.target.files[0]) }} />
            <button onClick={uploadImage}>Upload Image</button>
        </div>
    )
}

export default Upload
