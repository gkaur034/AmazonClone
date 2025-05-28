import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import {auth} from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; // 🔑 Add this at the top


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          navigate("/");
        }
      })
      .catch(error => alert(error.message));
  }


  const register = e => {
  e.preventDefault();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      if (auth) {
        navigate("/")
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
}

  return (
    <div className='login'>
        <Link to="/">
            <img 
                className='login__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                alt='Amazon logo'
            />
        </Link>

        <div className='login__container'>
          <h1>Sign-in</h1>
          <form>
            <h5>Email</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

            <h5>Password</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

            <button type='submit'
            onClick={signin} className='login__signInButton'>Sign In</button>
          </form>

          <p>
            By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>

          <button onClick={register}
          className='login__registerButton'>Create your amazon account</button>
          
        </div>
    </div>
  );
}

export default Login;
