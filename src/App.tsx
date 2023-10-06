import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import  Layout from "./components/layout/index"
import HomePage from './components/home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
