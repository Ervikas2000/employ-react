import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './component/Home';
import Allemp from './component/Allemp';
import Addnewenp from './component/Addnewenp';
import Editemp from './component/Editemp';
import Viewemp from './component/Viewemp';
import Login from './component/Login';
import Register from './component/Register';
import Frontpage from './component/Frontpage';
import Alluser from './component/Alluser'
import Changepass from './component/Changepass';
import Leftsidebar from './component/Leftsidebar';

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={ < Frontpage /> } />
        <Route path='/login' element={ < Login /> } />
        <Route path='/register' element={ < Register /> } />
        <Route path='/home' element={ < Home /> } />
        <Route path='/allemp' element={ < Allemp /> } />
        <Route path='/addnewemp' element={ < Addnewenp /> } />
        <Route path='/editemp/:id' element={ < Editemp /> } />
        <Route path='/viewemp/:id' element={ < Viewemp /> } />
        <Route path='/alluser' element={ < Alluser /> } />
        <Route path='/changepass' element={ < Changepass /> } />
      </Routes>
    </Router>
  )
}
