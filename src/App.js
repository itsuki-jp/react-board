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
  const [thread, setThread] = useState([]);
  const [offset, setOffset] = useState(0);

  const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/";
  useEffect(() => {
    fetch(`${url}/threads?offset=${offset}`)
      .then(res => res.json())
      .then(res => setThread(res));
  }, [])
  return (
    <div className = "App">
      <Header />
      <Routes>
        <Route path="/" element={<Home thread={thread} />} />
        <Route path="/create" element={<CreateThread/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
