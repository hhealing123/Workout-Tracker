import React from 'react';
import Workouts from './components/Workouts';
import BuildWorkout from './pages/BuildWorkout';
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";




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

    </div>
  );
}

export default App;
