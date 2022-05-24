import React, { useState, useEffect } from 'react'
import Logo from '../../Assets/Img/Rectangle 62.png'
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import GoogleButton from 'react-google-button';
import './Regist.css'


export const Regist = () => {
  var axios = require('axios');
  const navigate = useNavigate();
  const authHandle = auth;
  const provider = new GoogleAuthProvider()

  const [Email, setEmail] = useState("");
  const [Password,setPassword] = useState("");
  const [Alert, setAlert] = useState(false);

  const changeEmail = (e) =>{
    setEmail(e.target.value);
  }

  const changePassword = (e) => {
    setPassword(e.target.value)
  }
//handle login with google
  const handleGoogle =() => {
    signInWithPopup(authHandle, provider).then((data) => {
      console.log(data, "ini dataku");
      console.log(JSON.stringify(data.user.accessToken));
      sessionStorage.setItem("Token Costumer", data.user.accessToken);
      navigate('/user')
    }).catch((err) => {
      console.log(err, "data ini error");
    })
  }

// registrasi Admin
  const signUpAdmin = () =>{
    var data = JSON.stringify({
      "email": "admin@mail.com",
      "password": "123456",
      "role": "admin"
    });
    
    var config = {
      method: 'post',
      url: 'https://rent-cars-api.herokuapp.com/admin/auth/register',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(response.data, "Register suksesfull");
    })
    .catch(function (error) {
      console.log(error, "Error");
    });
  }

  return (
    <div className='container-login'>
        <div className='gambar-1'>
            {/* <img src={gambar1} alt='' className='gbr-1'/> */}
        </div>

        <div className='field-login'>
            <img src={Logo} alt="" className='property-login'/>
            <h2 className='property-login Title'>Create new Account</h2>

            <label className='property-login email-pass'>Email</label>
                <input type='email' placeholder='Contoh: johndee@gmail.com' className='input-field property-login' onChange={changeEmail}></input>

                <label className='property-login email-pass'>Password</label>
                <input type='password' placeholder='6+ karakter' className='input-field property-login' onChange={changePassword}></input>

                <button onClick={signUpAdmin} className='btn-signup'>Sign Up</button>
                <GoogleButton
                  className='btn-google'
                  onClick={handleGoogle}
                />
                <h6 className='btn-to-login'>Already have an account? Login
                  <a href='Login'>Sign In Here</a>
                </h6>
        </div>
    </div>
  )
}
