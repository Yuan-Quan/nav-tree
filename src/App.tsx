import { CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';

interface IAppContext {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    pinnedItems: string[];
    setPinnedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AppContext = React.createContext<IAppContext>(null!);

function App() {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [pinnedItems, setPinnedItems] = React.useState<string[]>([]);

  return (
    <div className="App">
      <CssBaseline/>
      <AppContext.Provider value={{
        searchTerm, setSearchTerm, pinnedItems, setPinnedItems
      }}>
      <BRouter>
        <Routes>
          <Route path="/" element={<Main />} />  
          <Route path="*" element={<NotFound />} />  
        </Routes>
      </BRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
