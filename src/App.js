import React from 'react';
//react-router-dom
import { Route, Routes } from 'react-router-dom';
//pages
import { Home } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<>Single Blog</>} />
    </Routes>
  );
}

export default App;
