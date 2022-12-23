import EnergyCalculator from 'pages/EnergyCalculator'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../Landing'

const TheLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/energy-calculator" element={<EnergyCalculator />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default TheLayout
