import React from 'react';
//react-router-dom
import { Route, Routes } from 'react-router-dom';
//components
import { Header } from './components';

function App() {
  return (
    <>
      <Header />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes> */}
    </>
  );
}

export default App;
