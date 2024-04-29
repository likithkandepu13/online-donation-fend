import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import bonemarrow from "../images/bonemarrow.jpg";
import blood from "../images/blood.jpg";
import braintumor from "../images/braintumor.jpg";
import covidpatient from "../images/covidpatient.jpg";
import denguevirus from "../images/denguevirus.jpg";
import donate from "../images/donate.jpg";
import healthissues from "../images/healthissues.jpg";
import legpatient from "../images/legpatient.jpg";
import army from "../images/army.jpg";
import flood from "../images/flood.jpg";
import orphan from "../images/orphan.jpg";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import cancer from "../images/cancer.jpg";
import cancer2 from "../images/cancer2.jpg";
import floods2 from "../images/floods2.jpg";
import amry2 from "../images/army2.jpg";
import heartpatient from "../images/heart patient.jpg";
import liverfailure from "../images/liver failure.jpg"
import { useNavigate } from 'react-router-dom';

const Donate = () => {
    const [amounts, setAmounts] = useState({});
   
    const navigate = useNavigate();
    
    const initialProducts = [
        { id: 1, name: 'Donate to army people', image: army, by: "army", description: "Support our soldiers with essential needs.",raised:"6500" },
        { id: 2, name: 'Help the people attacked in floods', image: flood, by: "people", description: "Provide relief to flood-affected families.",raised:"1005" },
        { id: 3, name: 'Donate to orphan kids', image: bonemarrow, by: "orphan home", description: "Help orphanages provide care and education.",raised:"1200" },
        { id: 4, name: 'Help poor kids', image: legpatient, by: "poor kids", description: "Support underprivileged children with education and healthcare.",raised:"13060" },
        { id: 5, name: 'Save the forest people', image: healthissues, by: "forest people", description: "Contribute to the conservation of indigenous communities and forests.",raised:"1400" },
        { id: 6, name: 'Help to cancer patients', image: cancer, by: "cancer patients", description: "Assist cancer patients with treatment and support services.",raised:"30005" },
        { id: 7, name: 'Save orphan kids', image: denguevirus, by: "orphan kids", description: "Support orphaned children with shelter and care.",raised:"600" },
        { id: 8, name: 'Give life to cancer patients', image: braintumor, by: "cancer people", description: "Provide life-saving treatment and care to cancer patients.",raised:"9000" },
        { id: 9, name: 'Help the people', image: floods2, by: "attacked people", description: "Assist communities affected by natural disasters like floods.",raised:"3000" },
        { id:10, name: 'Help to our Indian army', image: amry2, by: "Indian army", description: "Support Indian soldiers with essential needs and welfare.",raised:"7000" },
        { id:11, name:'lets join your hand and save karthik',image:heartpatient,by:"heart patient",description:"Try to Donate some Amount to Save this patient Life",raised:"6500"},
        { id:12, name:'',image:liverfailure,by:"Liver failure",description:"please help to this old man to cure his health",raised:"1000"}
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
                            <b style={{color:"black"}}>Funds Raised:</b> {` : ${product.raised}`}
                            <br />
                            <div style={styles.amountContainer}>
                                {/* <button onClick={() => handleDonate(product)} style={styles.donateButton}>Donate</button> */}
                                <button onClick={handleButtonClick} style={styles.donateButton}>Donate </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Donate;
