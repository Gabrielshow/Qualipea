import React, { useState, useEffect } from 'react';
import  images  from "../../../constants/images";
import './Login.css';
// import axios from 'axios';
import image from '../../../assets/signin.jpg';

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageArray = [images.q6, images.q11, images.q13];
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        // Connect to the backend
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
        }, 8000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="login-container"> 
            <div className="login-image-container">
                <img src={imageArray[currentImageIndex]} alt="login" />
            </div>

            <div className="login-group">
                <img className="login-group-image" src={images.logo2} alt="logo" />
                <form className="field" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            id="email" 
                            type="text" 
                            name="email" 
                            placeholder="Enter your email" 
                            value={data.email}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            id="password" 
                            type="password" 
                            name="password" 
                            placeholder="Enter your password"
                            value={data.password}
                            onChange={handleChange} 
                        />
                    </div>
                    <button type="submit" className="login-group-button">
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;