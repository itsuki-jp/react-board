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
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/thread">
          <Route path="new" element={<NewThread />}></Route>
          <Route path=":thread_id" element={<Threads />}></Route>
        </Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
