import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import config from '../config'
const Container = styled('div')({
  textAlign: 'center',
  marginTop: '50px',
});

const WelcomeText = styled('h4')({
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
});

const DonorHome = () => {
  const [donorData, setDonorData] = useState("");

  useEffect(() => {
    const storedDonorData = localStorage.getItem('donor');
    if (storedDonorData) {
      const parsedDonorData = JSON.parse(storedDonorData);
      // Capitalize donor data
      const capitalizedDonorData = {
        firstName: parsedDonorData.firstName.toUpperCase(),
        lastName: parsedDonorData.lastName.toUpperCase(),
        email: parsedDonorData.email.toUpperCase(),
        contact: parsedDonorData.contact.toUpperCase()
      };
      setDonorData(capitalizedDonorData);
    }
  }, []);
  const myStyle = {
    backgroundImage: "url('/donate1.jpg')", // Assuming donate1.jpg is directly inside the public folder
    height: "100vh",
    marginTop: "-50px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    
};


const handleLoginClick = () => {
    window.location.href = `${config.url}/donate`;

};


  return (
    
      <div className='home'>  
            <div class='hero'>
                <div class="hero-one"></div>
                <div class="hero-two"></div>
              
                <h1 class="header-title"><span class="header-primary"> hey! <br/>{donorData.firstName} {donorData.lastName}</span></h1>
                <p>
Welcome to our donation page! <br/>

Thank you for considering supporting our cause. Your generosity fuels our mission and directly impacts the lives of those we serve. Whether it's providing education, healthcare, or vital resources, every contribution makes a difference.</p>
                <button className='buttonhome' onClick={handleLoginClick}>Start Donating !</button>
                
            </div>

            {/* Footer section */}
            <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />

            <footer className="footer">
                <div className="footer__container container grid">
                    <div className="footer__content grid">
                        <a href="index.html" className="footer__logo">DonateEasy!</a>

                        <ul className="footer__links">
                            <li>
                                <a href="http://localhost:3000/donate" className="footer__link">Donate</a>
                            </li>

                            <li>
                                <a href="http://localhost:3000/donortrans" className="footer__link">Your Transactions</a>
                            </li>

                            <li>
                                <a href="http://localhost:3000/contact" className="footer__link">Contact</a>
                            </li>
                        </ul>

                        <div className="footer__social">
                            <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                                <i className="ri-facebook-circle-fill"></i>
                            </a>

                            <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                                <i className="ri-instagram-fill"></i>
                            </a>

                            <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                                <i className="ri-twitter-x-line"></i>
                            </a>

                            <a href="https://www.linkedin.com/" target="_blank" className="footer__social-link">
                                <i className="ri-linkedin-box-fill"></i>
                            </a>
                        </div>
                    </div>

                    <span className="footer__copy">
                        &#169; MSWD Y22 ALD. All right reserved
                    </span>
                </div>
            </footer>
        </div>

        
    
  );
}

export default DonorHome;
