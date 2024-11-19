import React, { useState, useEffect } from 'react';
import images  from "../../../constants/images";
import './Signin.css';

const Signin = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageArray = [images.q4, images.q8, images.q9]; // Array of images

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
        }, 8000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="signin-container"> 
            <div className="signin-image-container">
                <img src={imageArray[currentImageIndex]} alt="signin" />
            </div>

            <div className="signin-group">
                <img className="signin-group-image" src={images.logo2} alt="logo" />
                <form className="signin-field" onSubmit={handleSubmit}>
                    <div className="signin-form-group">
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
                    <div className="signin-form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            id="password" 
                            type="password" 
                            name="password" 
                            value={data.password}
                            onChange={handleChange} 
                        />
                    </div>
                    <button type="submit" className="signin-group-button">
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signin;