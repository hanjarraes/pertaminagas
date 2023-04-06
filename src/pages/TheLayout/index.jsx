import { EnergyCalculatorPage, ResultPage } from "pages/EnergyCalculator";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "../Landing";
import LandingBusiness from "pages/LandingBusiness";
import NotFound from "pages/NotFound";

const TheLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/business" element={<LandingBusiness />}></Route>
        <Route path="/energy-calculator">
          <Route index element={<EnergyCalculatorPage />} />
          <Route path="result" element={<ResultPage />} />
        </Route>
        <Route path="/404" element={<NotFound />}></Route>
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default TheLayout;
