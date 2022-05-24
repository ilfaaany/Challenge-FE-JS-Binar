import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LogIn } from '../Pages/Login/LogIn'
import { Regist } from '../Pages/Registrasi/Regist'
import { Dashboard } from '../Pages/dashboard/Dashboard'
import { LandingPage } from '../Pages/page/LandingPage'

export const Routers = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Regist />} />
                <Route path='/Login' element={<LogIn />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/User' element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
