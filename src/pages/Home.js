import React, { useEffect, useState } from 'react'
import storage from '../fireebase.config'
import { listAll, ref, getDownloadURL } from 'firebase/storage'

const Home = () => {
    const [imageList, setImageList] = useState([])
    const imageListRef = ref(storage, 'images/')
    useEffect(() => {
        listAll(imageListRef).then((response) => {

            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })
    }, [])


    return (
        <div>
            {imageList.map((url) => {
                return <img src={url} key={url} />
            })}
        </div>
    )
}

export default Home
