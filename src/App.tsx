import { CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';

export const appContext = React.createContext({});

function App() {
  const [tree, setTree] = React.useState([]);
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
