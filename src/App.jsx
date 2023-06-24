import React from 'react';
import { FirstlineProvider } from "@first-line/firstline-react";

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Logout from './pages/Logout';

function App() {
  return (
    <FirstlineProvider
      clientOptions={{
        domain: process.env.REACT_APP_FIRSTLINE_DOMAIN,
        audience: process.env.REACT_APP_FIRSTLINE_AUDIENCE,
        client_id: process.env.REACT_APP_FIRSTLINE_CLIENT_ID,
        redirect_uri: window.location.origin,
        logout_uri: `${window.location.origin}/logout`,
      }}
    >
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </Router>
    </FirstlineProvider>
  );
}

export default App;