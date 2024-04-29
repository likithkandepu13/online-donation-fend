import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import '@fortawesome/fontawesome-free/css/all.min.css'; // If you're using CSS icons, include this
import { useNavigate } from 'react-router-dom';
import config from '../config'
const DonorLogin = ({onDonorLogin}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login button clicked");
    try {
      const response = await axios.post(`${config.url}/checkdonor`, formData);
      if (response.data != null) {
        onDonorLogin();

        localStorage.setItem('donor', JSON.stringify(response.data));

        navigate("/donorhome");;
      } else {
        alert("Email and Password does not match");
      }
    } catch (error) {
      alert("Login Failed");
    }
  };

  // this is for CSS only
  const myStyle = {
    backgroundImage: "url('/donate1.jpg')", // Assuming donate1.jpg is directly inside the public folder
    height: "100vh",
    marginTop: "-30px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='login'>
      <div className="wrapper">
        <div className={`login-text ${isExpanded ? 'expand' : ''}`}>
          <button className="cta" onClick={toggleExpand}>
            <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} fa-1x`}></i>
          </button>
          <div className={`text ${isExpanded ? 'show-hide' : ''}`}>
            <form onSubmit={handleSubmit}>
              <a href=''>Login</a>
              <hr />
              <br />
              <input type="text" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
              <br />
              <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
              <br />
              <button type="submit" className="login-btn">Log In</button>
              <br/>
              <br/>
              <Grid item>
                <Link href="http://localhost:3000/registration" variant="body2" style={{ fontSize: '12px', color: 'white', textDecoration: 'underline' }}>
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </form>
          </div>
        </div>
        <div className="call-text">
          <h1>
            <span>"Login to Donate</span> and Make a Difference!"
          </h1>
          <button onClick={toggleExpand}>Login to the Donor Community</button>
        </div>
      </div>
    </div>
  );
}

export default DonorLogin;
