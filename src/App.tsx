import React from 'react'
import AOS from 'aos';
import "./assets/scss/styles.scss";
import 'aos/dist/aos.css';
import './App.css';

import TheLayout from './pages/TheLayout';

AOS.init();

export const App: React.FC = () => (
  <div className="App">
    <TheLayout />
  </div>
);