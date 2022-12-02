import React, { useState } from "react";
import Workouts from './components/Workouts';
import BuildWorkout from './pages/BuildWorkout';
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";
import './App.css';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            path='/dashboard'
            element={<Dashboard />}
          />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route
            path='/builder'
            element={<BuildWorkout />}
          />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route
            path='/login'
            element={<Login/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
