import React from 'react'
import { useState, useEffect } from 'react'
import Mountain from '../images/big.jpg'

export default function BackgroundImg() {
    const [image, setImage] = useState()
    useEffect(() => {
        setImage(Mountain)
    }, [])

    return (
        <div className='bg-black'>
             <img src={image} className='absolute w-full h-screen object-cover z-[-1] brightness-50' alt=''/>
        </div>
    )
}
