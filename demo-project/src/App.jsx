
import './App.css'
import Basic from './Basic'
import Cars from './cars'
import User from './User'


import { useState } from 'react'
import Clocks from './Clocks'

function App() {

  const [username,setUserName] = useState("")

  return (
    <>
     <h1>Demo Project</h1>
     

     <User/>
     <Clocks/>

     <div className="container m-5 border rounded p-5">
       <input type='text' onChange = {e=>setUserName(e.target.value)} className='form-control w-75 m-5' />
       {
         username &&
        <div className='bg-warning p-5 text-danger fs-2 fw-bolder'> name is :
          <span className='text-light'>{username}</span>
        </div>
      }
     </div>
     
    </>
  )
}

export default App
