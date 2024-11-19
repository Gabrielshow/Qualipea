import React, { useState } from 'react';
import { images } from "../../../constants";
import './Signin.css';
// import image from '../../../assets/signin.jpg';


const Signin = () => {
  const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };
  return (
   <div className="signin-container"> 
        <div className="signin-image-container">
            <img src={images.q8} alt="signin-image"/>
        </div>

        <div className="signin-group">
            <img className="signin-group-image" src={images.logo2} alt="logo"/>
            <form className="signin-field" onSubmit={handleSubmit}>
                <div className="signin-form-group">

                <label htmlfor="email">
                    Email
                </label>
                <input id="email"  type="text" name="email" placeholder="enter your email" value={data.email}
            onChange={handleChange}/>
                </div>
                <div className="signin-form-group">

                <label htmlfor="password">
                    Password
                </label>
                <input id="password" type="password" name="password"/>
                </div>
            </form>

            <button onClick={handleSubmit} className="signin-group-button">
                Sign in
            </button>
        </div>
    </div>
  )
}

export default Signin;