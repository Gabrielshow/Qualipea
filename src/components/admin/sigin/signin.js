import React from 'react';
import { images } from "../../../constants/images";
import './signin.css';

const signin = () => {
  return (
   <div className="container"> 
        <div className="image-container">
            <img src="" alt="login-image"/>
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
                Sign in
            </button>
        </div>
    </div>
  )
}

export default signin