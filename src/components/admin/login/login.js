import React, { useState } from 'react';
import images from "../../../constants/images";
import './Login.css';
import axios from 'axios';
import image from '../../../assets/signin.jpg';

const Login = () => {
    const [ data , setData ] = useState({ email: "", password: ""});
    const handleChange = (e) => {
        const {name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //connect to the backend easy peasy;

    }
  return (
    <div className="container"> 
        <div className="image-container">
            <img src={image} alt="login-image"/>
        </div>

        <div className="login-group">
            <img className="login-group-image" src={images.logo2} alt="logo"/>
            <form>
                <div className="form-group">

                <label htmlfor="email">
                    Email
                </label>
                <input id="email"  type="text" name="email" placeholder="enter your email" value={data.email}
            onChange={handleChange}/>
                </div>
                <div className="form-group">

                <label htmlfor="password">
                    Password
                </label>
                <input id="password" type="password" name="password"/>
                </div>
            </form>

            <button onClick={handleSubmit} className="login-group-button">
                Log in
            </button>
        </div>
    </div>
  )
}

export default Login;