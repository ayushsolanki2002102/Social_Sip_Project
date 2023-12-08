import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Ab from './pages/Ab';


import Boo from './pages/Boo'

import RateUsFormm from './pages/RateUsFormm';



import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';





function App() {
  return (
    <>
    <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Ab' element={<Ab/>}></Route>

        <Route path='/Boo' element={<Boo/>}></Route>

        <Route path='/RateUsFormm' element={<RateUsFormm/>}></Route>


      </Routes>
    </Router>
   
    </div></>

  );
}

export default App;
