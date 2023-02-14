import { React, useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from "./Header.js";
import { Home } from "./pages/Home";
import { NewThread } from "./pages/NewThread";
import { NoMatch } from "./pages/NoMatch";
import { Threads } from "./pages/Thread";
/**
 * 
 * @type {React.FC}
 */
function App() {
  return (
    <div className = "App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/thread">
          <Route path="new" element={<NewThread />}></Route>
          <Route path=":thread_id" element={<Threads/>}></Route>
        </Route>
        <Route path="*" element={<NoMatch/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
