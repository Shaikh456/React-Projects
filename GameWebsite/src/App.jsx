// App.jsx

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import GamesSection from './components/GamesSection';
import Login from './pages/Login';
import SideScroller from './pages/Side-Scroller';
import Mario from './pages/Mario';
import Snake from './pages/Snake';
import SignUp from './pages/Signup';
import ScoreTable from './pages/ScoreTable';

import './App.css';

// Wrapper component to protect specific routes
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true'; // Check login status
  return isLoggedIn ? children : <Navigate to="/login" />; // Redirect to login if not logged in
};

function App() {
  return (
    <Router>
      {/* Fixed Navbar on all pages */}
      <Navbar />

      {/* Application Routes */}
      <Routes>
        {/* Home page showing game cards */}
        <Route path="/" element={<GamesSection />} />

        <Route path="/scoreboard" element={<ScoreTable />} />

        {/* Signup page  */}
        <Route path="/signup" element={<SignUp />} />


        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Individual game routes */}
        <Route path="/mario" element={<Mario />} />
        <Route path="/snake" element={<Snake />} />

        {/* Protected side-scroller route, requires login */}
        <Route
          path="/side-scroller"
          element={
            <ProtectedRoute>
              <SideScroller />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
