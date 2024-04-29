// NavBar.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DonorNavBar from './DonorNavBar'; // Import DonorNavBar

import Contact from '../Main/Contact';
import DonorLogin from '../Donator/DonorLogin';
import Registration from '../Donator/Registration';
import AdminLogin from '../Admin/AdminLogin';
import Donate from '../Donator/Donate';
import AdminView from '../Admin/AdminView';
import DonorProfile from '../Donator/DonorProfile'
import DonorTrans from '../Donator/DonorTrans'
import DonorHome from '../Donator/DonorHome'
import Home from '../Main/Home'
import DonorDonate from '../Donator/DonorDonate';

const DonorNavBar1 = () => {
  return (
    <div>
      <DonorNavBar /> {/* Render DonorNavBar component here */}
      <Routes>
        <Route path="/" element={<DonorHome/>} />
        <Route path="/donorhome" element={<DonorHome/>} />
        <Route path="/donate" element={<DonorDonate/>} />
        <Route path='/donorprofile' element={<DonorProfile/>}/>
        <Route path='/donortrans' element={<DonorTrans/>}/>
        <Route path='/logout' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default DonorNavBar1;
