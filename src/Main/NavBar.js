// NavBar.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainNavBar from './MainNavBar';
import Home from './Home';
import Contact from './Contact';
import DonorLogin from '../Donator/DonorLogin';
import Registration from '../Donator/Registration';
import AdminLogin from '../Admin/AdminLogin';
import Donate from '../Donator/Donate';
import AdminView from '../Admin/AdminView';

const NavBar = ({onAdminLogin,onDonorLogin}) => {
  return (
    <div>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donorlogin" element={<DonorLogin onDonorLogin={onDonorLogin} />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin" element={<AdminView/>} />
        <Route path="/donate" element={<Donate />} />
        <Route path='/adminlogin' element={<AdminLogin onAdminLogin={onAdminLogin} />}/>
        <Route path='/adminview' element={<AdminView/>}/>
      </Routes>
    </div>
  );
}

export default NavBar;
