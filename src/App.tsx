import { CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <BRouter>
        <Routes>
          <Route path="/" element={<Main />} />  
          <Route path="*" element={<NotFound />} />  
        </Routes>
      </BRouter>
    </div>
  );
}

export default App;
