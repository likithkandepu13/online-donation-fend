// App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Main/NavBar';
import DonorNavBar from './Donator/DonorNavBar';
import AdminNavBar from './Admin/AdminNavBar';
import AdminNav1 from './Admin/AdminNav1';
import DonorNavBar1 from './Donator/DonorNav1';

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isDonorLoggedIn, setDonorLoggedIn] = useState(false);

  useEffect(() => {
    console.log('Checking local storage...');
    const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    const donorLoggedIn = localStorage.getItem('isDonorLoggedIn') === 'true';

    console.log('isAdminLoggedIn:', adminLoggedIn);
    console.log('isDonorLoggedIn:', donorLoggedIn);

    setIsAdminLoggedIn(adminLoggedIn);
    setDonorLoggedIn(donorLoggedIn);
  }, []);

  const onAdminLogin = () => {
    localStorage.setItem('isAdminLoggedIn', 'true');
    setIsAdminLoggedIn(true);
  };

  const onDonorLogin = () => {
    localStorage.setItem('isDonorLoggedIn', 'true');
    setDonorLoggedIn(true);
  };

  console.log('Rendering with isAdminLoggedIn:', isAdminLoggedIn);
  console.log('Rendering with isDonorLoggedIn:', isDonorLoggedIn);

  return (
    <div className="App">
      <Router>
        {isAdminLoggedIn ? (
          <>
            <AdminNavBar onAdminLogin={onAdminLogin} />
            {/* <AdminNav1 /> */}
          </>
        ) : isDonorLoggedIn ? ( 
          <DonorNavBar1 onDonorLogin={onDonorLogin} />
        ) : (
          <NavBar onAdminLogin={onAdminLogin} onDonorLogin={onDonorLogin} />
        )}
      </Router>
    </div>
  );
}

export default App;
