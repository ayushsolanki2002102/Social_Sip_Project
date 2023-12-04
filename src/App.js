import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Ab from './pages/Ab';
import Cont from './pages/Cont';

import Boo from './pages/Boo'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';




function App() {
  return (
    <>
    <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Ab' element={<Ab/>}></Route>
        <Route path='/Cont' element={<Cont/>}></Route>
        <Route path='/Boo' element={<Boo/>}></Route>

      </Routes>
    </Router>
   
    </div></>

  );
}

export default App;
