import React, { useEffect, useState } from 'react';
import axios from 'axios';
import army from "../images/army.jpg";
import flood from "../images/flood.jpg"
import orphan from "../images/orphan.jpg"
import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"
import cancer from "../images/cancer.jpg"
import cancer2 from "../images/cancer2.jpg"
import floods2 from "../images/floods2.jpg"
import amry2 from "../images/army2.jpg";
import config from '../config'
const DonorDonate = () => {
    const [amounts, setAmounts] = useState({});
    const [donorData, setDonorData] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const storedDonorData = localStorage.getItem('donor');
        if (storedDonorData) {
            const parsedDonorData = JSON.parse(storedDonorData);
            setDonorData(parsedDonorData)
        }
    }, []);
    

    const firstName = donorData.firstName;
    const lastName = donorData.lastName;
    const email = donorData.email;

    const handleDonate = async (product) => {
        const amount = amounts[product.id];
        if (amount === undefined || amount === '') {
            alert("Please enter an amount");
        } else {
            var options = {
                key: "rzp_test_FmhSMoagxjdqsj",
                key_secret: "Aw5vNsHur5csQLKhJssAiJzf",
                amount: amount * 100,
                currency: "INR",
                name: "DonateEasy!",
                description: product.description,
                handler: function(response) {
                    alert(`Donation of Rs.${amount}/- is Successful`)
                },
                prefill: {
                    name: "admin",
                    email: "donateeasy@gmail.com",
                    contact: "7412589631"
                },
                notes: {
                    address: "Razorpay Corporate office"
                },
                theme: {
                    color: "8e3969"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
            
            var requestData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                donatedAmount: amount
            };
            try {
                const response = await axios.post(`${config.url}/inserttrans`, requestData);
                setMessage("Donation Done");
                setErrorMessage('');
            } catch (error) {
                console.error('Error in donating:', error);
                setErrorMessage('Donation failed. Please try again.');
                setMessage('');
            }
             requestData = {
                donatedAmount: ''
            };
        }
            
        
    };

    const initialProducts = [
        { id: 1, name: 'Donate to army people', image: army, by: "army", description: "Support our soldiers with essential needs." },
        { id: 2, name: 'Help the people attacked in floods', image: flood, by: "people", description: "Provide relief to flood-affected families." },
        // Other products...
        { id: 3, name: 'Donate to orphan kids', image: orphan, by: "orphan home", description: "Help orphanages provide care and education." },
        { id: 4, name: 'Help poor kids', image: pic1, by: "poor kids", description: "Support underprivileged children with education and healthcare." },
        { id: 5, name: 'Save the forest people', image: pic2, by: "forest people", description: "Contribute to the conservation of indigenous communities and forests." },
        { id: 6, name: 'Help to cancer patients', image: cancer, by: "cancer patients", description: "Assist cancer patients with treatment and support services." },
        { id: 7, name: 'Save orphan kids', image: orphan, by: "orphan kids", description: "Support orphaned children with shelter and care." },
        { id: 8, name: 'Give life to cancer patients', image: cancer2, by: "cancer people", description: "Provide life-saving treatment and care to cancer patients." },
        { id: 9, name: 'Help the people', image: floods2, by: "attacked people", description: "Assist communities affected by natural disasters like floods." },
        { id: 10, name: 'Help to our Indian army', image: amry2, by: "Indian army", description: "Support Indian soldiers with essential needs and welfare." },
    ];

    const inputStyles = {
        width: 'calc(100% - 22px)',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px'
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
                                Amount: <input type="text" placeholder="Enter donation amount " value={amounts[product.id] || ''} onChange={(e) => setAmounts(prevAmounts => ({ ...prevAmounts, [product.id]: e.target.value }))} style={inputStyles} />
                                <button onClick={() => handleDonate(product)} style={styles.donateButton}>Donate</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        color: 'white',
        background: 'white'
    },
    heading: {
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

export default DonorDonate;
