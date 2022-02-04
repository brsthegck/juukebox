import NavigationBar from './components/NavigationBar';
import PlayerControlBar from './components/PlayerControlBar';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import ContentPage from './components/ContentPage';

import { RouteProps, useLocation } from 'react-router';


const App : React.FunctionComponent = () => {

  return (
  <Router>  
    <div className="App flex flex-col text-slate-200 content-between bg-zinc-900 w-full h-full font-Rubik">
      <NavigationBar userId={0} userName='baris'/>
        <div className="w-full h-full flex justify-center -my-5 text-9xl overflow-y-hidden text-gray-800">
          
          <Routes>
            <Route path="" element={<Navigate to="/home"/>} />
            <Route path="home" element={<ContentPage test="a"/>}/>
            <Route path="library" element={<ContentPage test="b"/>} />
            <Route path="search" element={<ContentPage test="c"/>}/>
            <Route path="settings" element={<ContentPage test="d"/>}/>
            <Route path="account" element={<ContentPage test="e"/>}/>
            <Route path="profile/userid" element={<ContentPage test="d"/>}/>
          </Routes>
    </div>
      <PlayerControlBar />
    </div>
  </Router>
  );
}

export default App;
