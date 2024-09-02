import React from 'react';
import './App.css'
import Home from './components/Home';
import Jobs from './components/Jobs';
import Login from './components/Login';
import Mentorship from './components/Mentorship';
import Learning from './components/Learning';
import Profile from './components/Profile';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
  <Router>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/jobs' element={<Jobs />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/mentorship' element={<Mentorship />}></Route>
          <Route path='/learning' element={<Learning />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App
