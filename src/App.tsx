import React from 'react';
import NavigationBar from './components/NavigationBar';
import PlayerControlBar from './components/PlayerControlBar';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import IconButton from './components/IconButton';

interface IProp{
  hahahah: string;
}

const TestComponent: React.FC<IProp> = ({hahahah}) => {
  return (
    <div>
      page {hahahah}...
      <IconButton blue/>
    </div>
  );
}

function App() {
  return (
    <Router>  
      <div className="App flex flex-col content-between bg-zinc-900 w-full h-full font-Rubik">
        <NavigationBar userId={0} userName='baris'/>
        <div className="w-full h-full flex -my-5 text-9xl overflow-y-auto overflow-x-hidden text-clip text-gray-800">
          <Routes>
            <Route path="" element={<Navigate to="/home"/>} />
            <Route path="home" element={<TestComponent hahahah="a"/>} />
            <Route path="library" element={<TestComponent hahahah="b"/>} />
            <Route path="search" element={<TestComponent hahahah="c"/>} />
          </Routes>
        </div>
        <PlayerControlBar />
      </div>
    </Router>
  );
}

export default App;
