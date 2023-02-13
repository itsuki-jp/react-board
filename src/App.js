import { React, useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from "./Header.js";
import { Home } from "./pages/Home";
import { CreateThread } from "./pages/CreateThread";
/**
 * 
 * @type {React.FC}
 */
function App() {
  return (
    <div className = "App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<CreateThread/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
