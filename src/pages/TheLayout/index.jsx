import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom'
import Landing from '../Landing';



const TheLayout = () => {

  return (
    <>
      <Route path="/">
        <Landing />
      </Route>
    </>
  );
};

export default TheLayout;
