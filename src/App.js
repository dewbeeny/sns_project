import './App.css';
import { useEffect } from 'react';
import Home from './src/Home';
import Login from './src/Login';

function App() {
  return (
    <div className="App">
      <Login/>
     <Home/>
    </div>
  ); 
}

export default App;

