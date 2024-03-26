import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Login from './pages/Login'
import Students from './pages/Students'
import AuthLayout from './layout/AuthLayout'
import GuestLayout from './layout/GuestLayout'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<GuestLayout />}>
        <Route path="/signin" element={<Login />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/students" element={<Students />} />
      </Route>
    </Routes>
  )
}

export default App
