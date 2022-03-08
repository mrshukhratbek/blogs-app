import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<>Blogs</>} />
      <Route path="/blog/:id" element={<>Single Blog</>} />
    </Routes>
  );
}

export default App;
