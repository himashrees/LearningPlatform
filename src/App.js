import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Resources from './pages/Resources';
import Recommendations from './pages/Recommendations';
import Feedback from './pages/FeedbackForm';
import Homepage from './pages/Homepage';
import ExplorePage from './pages/ExplorePage';
import GeneralSettingsPanel from './pages/GeneralSettingsPanel'; // New Settings page
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/explore" element={<ExplorePage />} />
         <Route path="/settings" element={<GeneralSettingsPanel />} /> 

        {/* Dashboard and nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="resources" element={<Resources />} />
          <Route path="recommendations" element={<Recommendations />} />
          <Route path="feedback" element={<Feedback />} />
         {/* Settings route */}
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
