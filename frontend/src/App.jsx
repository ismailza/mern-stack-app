import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Login from './pages/Login'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Login />} />
    </Routes>
  )
}

export default App
