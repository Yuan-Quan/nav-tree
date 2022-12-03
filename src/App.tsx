import { CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';
import { ITreeDataItem, treeDataRoot } from './assets/TreeData';

interface IAppContext {
    displayTree: ITreeDataItem;
    setDisplayTree: React.Dispatch<React.SetStateAction<ITreeDataItem>>
}

export const AppContext = React.createContext<IAppContext>(null!);

function App() {
  const [displayTree, setDisplayTree] = React.useState<ITreeDataItem>(treeDataRoot);
  return (
    <div className="App">
      <CssBaseline/>
      <AppContext.Provider value={{displayTree, setDisplayTree}}>
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
