import NavigationBar from './components/NavigationBar';
import PlayerControlBar from './components/PlayerControlBar';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import ContentPage from './components/ContentPage';
import "./styles/PageShiftAnims.css";

import { RouteProps, useLocation } from 'react-router';


const App : React.FunctionComponent = () => {

  return (
  <Router>  
    <div className="App flex flex-col content-between bg-zinc-900 w-full h-full font-Rubik">
      <NavigationBar userId={0} userName='baris'/>
        <div className="w-full h-full flex -my-5 text-9xl overflow-y-hidden text-gray-800">
          
          <Routes>
            <Route path="" element={<Navigate to="/home"/>} />
            <Route path="home" element={<ContentPage />}/>
            <Route path="library" element={<ContentPage />} />
            <Route path="search" element={<ContentPage />}/>
            <Route path="settings" element={<ContentPage />}/>
            <Route path="account" element={<ContentPage />}/>
            <Route path="profile/userid" element={<ContentPage />}/>
          </Routes>
    </div>
      <PlayerControlBar />
    </div>
  </Router>
  );
}

export default App;
