import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

import './home.css';
import army from '../images/army.jpg';
import flood from '../images/flood.jpg';
import orphan from '../images/orphan.jpg';
import pic1 from '../images/pic1.jpg';

const Home = () => {
   
    const handleLoginClick = () => {
        window.location.href = 'http://localhost:3000/donorlogin';
    };

    return (
        <div className='home'>  
            <div className='hero'>
                <div className="hero-one"></div>
                <div className="hero-two"></div>
                <h1 className="header-title"><span className="header-primary">DONATE TO SAVE LIVES</span></h1>
                <p>Join our community dedicated to supporting and uplifting elders! Through various initiatives and programs, we create a nurturing environment that promotes their well-being, and overall quality of life.</p>
                <button className='buttonhome' onClick={handleLoginClick}>Login to the Donor Community</button>
            </div>

            {/* Cards below Hero */}
            <Donate />

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
                                <a href="http://localhost:3000/registration" className="footer__link">Register</a>
                            </li>

                            <li>
                                <a href="http://localhost:3000/contact" className="footer__link">Contact</a>
                            </li>
                        </ul>

                        <div className="footer__social">
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"  className="footer__social-link">
                                <i className="ri-facebook-circle-fill"></i>
                            </a>

                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="footer__social-link">
                                <i className="ri-instagram-fill"></i>
                            </a>

                            <a href="https://twitter.com/" target="_blank"  rel="noreferrer" className="footer__social-link">
                                <i className="ri-twitter-x-line"></i>
                            </a>

                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"  className="footer__social-link">
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
};

const Donate = () => {
    // const [amounts, setAmounts] = useState({});
    const navigate = useNavigate();
    
    const initialProducts = [
        { id: 1, name: 'Donate to army people', image: army, by: "army", description: "Support our soldiers with essential needs." },
        { id: 2, name: 'Help the people attacked in floods', image: flood, by: "people", description: "Provide relief to flood-affected families." },
        { id: 3, name: 'Donate to orphan kids', image: orphan, by: "orphan home", description: "Help orphanages provide care and education." },
        { id: 4, name: 'Help poor kids', image: pic1, by: "poor kids", description: "Support underprivileged children with education and healthcare." }
    ];

    const handleButtonClick = () => {
        navigate('/registration');
    };

    const styles = {
        container: {
            textAlign: 'center',
            color: 'white',
            background: 'white'
        },
        heading: {
            marginBottom:"30px",
            paddingTop: '50px',
            fontSize: '3em',
            color: 'black',
            fontFamily: 'cursive'
        },
        productContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50px'
        },
        card: {
            width: '250px',
            margin: '20px',
            padding: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '10px'
        },
        imageContainer: {
            width: '100%',
            height: '200px',
            overflow: 'hidden',
            borderRadius: '10px'
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        },
        amountContainer: {
            marginTop: '20px'
        },
        donateButton: {
            marginTop: '10px',
            padding: '12px',
            background: 'linear-gradient(to right, #a22f4f, #8e3969)',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        donateButtonHover: {
            background: '#1e1e1e'
        }
    };

    return (
        <div className='donate'>
            <div style={styles.container}>
                <h1 style={styles.heading}>Donate and Save Lives!</h1>
                <div style={styles.productContainer}>
                    {initialProducts.map(product => (
                        <div key={product.id} style={styles.card}>
                            <div style={styles.imageContainer}>
                                <img src={product.image} alt={product.name} style={styles.image} />
                            </div>
                            <br />
                            <b style={{color:"black"}}>Lender: </b>{`: ${product.by}`}
                            <br />
                            <b style={{color:"black"}}>Description:</b> {` : ${product.description}`}
                            <br />
                            <div style={styles.amountContainer}>
                                <button onClick={handleButtonClick} style={styles.donateButton}>Donate</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
