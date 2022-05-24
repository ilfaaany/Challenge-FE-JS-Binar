import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { auth } from "../../firebase";
import Logo from "../../Assets/Img/Rectangle 62.png";
import { useNavigate } from "react-router-dom";

import "./Login.css";


export const LogIn = () => {
  var axios = require('axios');
  const authHandle = auth;
  const provider = new GoogleAuthProvider();

  let Navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

//user login with google
  const handleGoggle = () => {
    signInWithPopup(authHandle, provider).then ((data)=> {
        if (data) {
            console.log(data, "inidataku");
            console.log(JSON.stringify(data.user.accessToken));
            sessionStorage.setItem("Token User", data.user.accessToken)
            return Navigate('/user');
        }
    })
      .catch((err) => {
        console.log(err, "ini adalah eror");
      });
  };


  const changeEmail = (e) =>{
    setEmail(e.target.value);
  }

  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  //admin login
  const handleButton = () => {
    
    var data = {
      "email": Email,
      "password": Password
    };

    var config = {
      method: 'post',
      url: 'https://rent-car-appx.herokuapp.com/admin/auth/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(response.data, "Login Successfull");
      Navigate('/Dashboard')
    })
    .catch(function (error) {
      console.log(error);
    });

  }



  return (
    <div className="container-login">
      <div className="gambar-1">
        {/* <img src={gambar1} alt='' className='gbr-1'/> */}
      </div>

      <div className="field-login">
        <img src={Logo} alt="" className="property-login" />
        <h2 className="property-login Title">Welcome, Admin BCR</h2>

        <label className="property-login email-pass">Email</label>
        <input
          type="email"
          placeholder="Contoh: johndee@gmail.com"
          className="input-field property-login"
          onChange={changeEmail}
        ></input>

        <label className="property-login email-pass">Password</label>
        <input
          type="password"
          placeholder="6+ karakter"
          className="input-field property-login"
          onChange={changePassword}
        ></input>

        <button className="btn-sign-in" onClick={handleButton}>Sign in</button>
        <GoogleButton className="btn-google" onClick={handleGoggle} />

        <h6 className='btn-to-login'>Don't have account
          <a href='/'>   Register Here</a>
        </h6>
      </div>
    </div>
  );
};
