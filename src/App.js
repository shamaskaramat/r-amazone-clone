import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './Pages/Signin';
import Checkout from './Pages/Checkout';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>

    </Router>

    
  )
}

export default App