import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter/Counter';
import Room from './Components/RoomTemp/Room';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menubar from './Components/Menubar/Menubar';

function App() {
  return (
    <div className="App">
      
      <Counter/>
    </div>
  );
}

export default App;
