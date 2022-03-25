import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'

import Login from "./components/Login/Login";
import Codebox from "./components/Codebox/Codebox";

function App() {
  return (
    <Router>
      {/* <ReactNotification /> */}
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/:id" element={<Codebox/>} />
      </Routes>
    </Router>
  );
}

export default App;
