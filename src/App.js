import React from 'react'
import AOS from 'aos';
import "./assets/scss/styles.scss";
import 'aos/dist/aos.css';
import './App.css';

import TheLayout from './pages/TheLayout';

AOS.init();
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TheLayout />
     </div>
    );
  }
}


export default App;