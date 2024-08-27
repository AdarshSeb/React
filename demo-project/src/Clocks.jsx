import React , { useEffect, useState } from 'react'

const Clocks =() =>{
    const [time,setTime] = useState("")
    const getTime= () =>{
        const today = new Date()
        const hours = today.getHours()
        const minutes = today.getMinutes()
        const seconds = today.getSeconds()
        setTime(`${hours}:${minutes}:${seconds}`)
    }
    useEffect(()=>{
        setTimeout(() => {
            getTime()
        }, 1000);
    })
    return (
        <div style={{height:'100vh'}} className='d-flex justify-content-center alig-items-center'>
            <h1 style={{fontSize:'80px',color:'blue'}}>{time}</h1>
        </div>
    )
}
 export default Clocks