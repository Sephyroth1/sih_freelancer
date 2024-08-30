import React from 'react';
import './App.css'
import Home from './components/Home';
import Jobs from './components/Jobs';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
  <Router>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/jobs' element={<Jobs />}></Route>
          <Route path='/login' element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App
