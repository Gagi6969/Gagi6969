import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Asignin';  
import SignUp from './SignUp';
import PortfoliosHeader from './PortfoliosHeader';
import Community from './Community';
import About from './About';
import Main from './Main';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/portfolios" element={<PortfoliosHeader />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </Router>
  );
};

export default App;
