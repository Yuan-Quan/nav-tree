import { CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';

interface IAppContext {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export const AppContext = React.createContext<IAppContext>(null!);

function App() {
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  return (
    <div className="App">
      <CssBaseline/>
      <AppContext.Provider value={{
        searchTerm, setSearchTerm
      }}>
      <a href="/magicflu/html/form/appController.jsp?appLabel=%E4%B8%89.%E5%85%A8%E8%BF%87%E7%A8%8B%E9%80%A0%E4%BB%B7%E5%92%A8%E8%AF%A2%E7%AE%A1%E7%90%86&nodeLabel=%E9%A1%B9%E7%9B%AE%E6%A6%82%E5%86%B5&nodeId=12&spaceId=f416a565-6aa6-414d-bcde-70a877f7c84a&appId=2b07706b-022d-400c-b2af-4cab8dc27dd7">
        redirec_sanity_check
      </a> 
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
