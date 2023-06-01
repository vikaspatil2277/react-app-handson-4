import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import Error from './Error'

function Routefile() {
  return (
    <div>
        <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/student" element={<Student/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Error/>}/>

        </Routes>
    </div>
  )
}

export default Routefile