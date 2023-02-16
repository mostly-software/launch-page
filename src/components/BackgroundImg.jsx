import React from 'react'
import { useState, useEffect } from 'react'
import Mountain from '../images/clean.jpeg'

export default function BackgroundImg() {
    const [image, setImage] = useState()
    useEffect(() => {
        setImage(Mountain)
    }, [])

    return (
        <img src={image} className='absolute w-full h-screen object-cover z-[-1]' alt=''/>
    )
}
