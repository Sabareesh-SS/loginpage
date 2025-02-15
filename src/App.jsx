import React from 'react'
import Loginpage from './pages/Loginpage'
import { Route, Routes } from 'react-router-dom'
import Inside from './pages/Inside'

export default function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/inside" element={<Inside/>} />
      </Routes>
    </div>
  )
}
