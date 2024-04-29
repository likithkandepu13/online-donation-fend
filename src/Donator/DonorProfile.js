import React, { useEffect, useState } from 'react';

const DonorProfile = () => {
    const [donorData, setDonorData] = useState("");

    useEffect(() => {
      const storedDonorData = localStorage.getItem('donor');
      if (storedDonorData) {
        const parsedDonorData = JSON.parse(storedDonorData);
        // Capitalize first letter of each donor data field
        const capitalizedDonorData = {
          firstName: parsedDonorData.firstName.charAt(0).toUpperCase() + parsedDonorData.firstName.slice(1),
          lastName: parsedDonorData.lastName.charAt(0).toUpperCase() + parsedDonorData.lastName.slice(1),
          email: parsedDonorData.email.charAt(0).toUpperCase() + parsedDonorData.email.slice(1),
          contact: parsedDonorData.contact.charAt(0).toUpperCase() + parsedDonorData.contact.slice(1)
        };
        setDonorData(capitalizedDonorData);
      }
    }, []);
    
    return (
        <div style={{ textAlign: 'center', backgroundColor: '#f7f7f7', padding: '50px 0', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ fontSize: '36px', marginBottom: '30px', color: '#333' }}>Donor Profile</h1>
            {donorData && (
                <div style={{ margin: 'auto', width: '50%', textAlign: 'left', borderRadius: '10px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', padding: '20px', backgroundColor: '#fff' }}>
                    <h3 style={{ fontSize: '24px', color: '#555', marginBottom: '15px' }}><span style={{ fontWeight: 'bold' }}>First Name:</span> <span style={{ fontFamily: 'Georgia, serif' }}>{donorData.firstName}</span></h3>
                    <h3 style={{ fontSize: '24px', color: '#555', marginBottom: '15px' }}><span style={{ fontWeight: 'bold' }}>Last Name:</span> <span style={{ fontFamily: 'Georgia, serif' }}>{donorData.lastName}</span></h3>
                    <h3 style={{ fontSize: '24px', color: '#555', marginBottom: '15px' }}><span style={{ fontWeight: 'bold' }}>Email:</span> <span style={{ fontFamily: 'Georgia, serif' }}>{donorData.email}</span></h3>
                    <h3 style={{ fontSize: '24px', color: '#555', marginBottom: '15px' }}><span style={{ fontWeight: 'bold' }}>Contact Id:</span> <span style={{ fontFamily: 'Georgia, serif' }}>{donorData.contact}</span></h3>
                </div>
            )}
        </div>
    );
}

export default DonorProfile;
