import { EnergyCalculatorPage, ResultPage } from 'pages/EnergyCalculator'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../Landing'

const TheLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/energy-calculator'>
          <Route index element={<EnergyCalculatorPage />} />
          <Route path='result' element={<ResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default TheLayout
