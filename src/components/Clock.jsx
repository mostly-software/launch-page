import React from 'react'
import { useState, useEffect } from 'react'

export default function Clock() {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    })


    return (
        <div className='flex justify-center items-center invisible md:visible'>
            <h1 className='text-3xl text-slate-400 font-bold'>{date.toLocaleTimeString("it-IT", {hour: "2-digit", minute: "2-digit", hour12: false })}</h1>
        </div>
    )
}