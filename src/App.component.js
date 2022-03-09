import React from 'react';
//react-router-dom
import { Route, Routes } from 'react-router-dom';
//components
import { Header } from './components';
import { AllBlogs } from './components';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AllBlogs />} />
        {/* <Route path="/blog/:id" element={<SingleBlog />} /> */}
      </Routes>
    </>
  );
}

export default App;
