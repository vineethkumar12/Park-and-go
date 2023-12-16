import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from './auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './sign.css';
import mail from '../assets/mail.png';
import lock from '../assets/padlock.png';
import axios from 'axios';

export const Signin = ({ setpage }) => {
  const navigate = useNavigate();
  const auth = useAuth();

  const [signin, setSignin] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setSignin({ ...signin, [name]: value });
  };
  const removespaceemail=signin.email.trim();
  const submi = (e) => {
    e.preventDefault();

    auth.setpage('loading');
    navigate('/loading');
  
    axios
      .post(
        'http://localhost:4000/login',
        { email:  removespaceemail, password: signin.password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        auth.setpage('signin');
        auth.login(response.data.token);
        navigate('/signin/mainpage');
      })
      .catch((error) => {
        console.error('There was a problem with the request:', error);
        toast.error('Invalid credentials', {
          position: 'top-center',
          autoClose: 3000, // Auto close the toast after 3 seconds
        });
        auth.setpage('signin');
      });
  };

  return (
    <div className="backgroundblur">
      <Outlet />
      <div className="container">
        <div className="signf">
          <h2 className="signname">Sign In</h2>
        </div>
        <form onSubmit={submi}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              className="inp"
              onChange={onChange}
              value={signin.email}
              name="email"
              placeholder="Enter your email"
            />
            <img className="icons" src={mail} alt="no" />
          </div>
          <br></br>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              onChange={onChange}
              className="inp"
              value={signin.password}
              name="password"
              placeholder="Enter your password"
            />
            <img className="icons" src={lock} alt="no" />
          </div>
          <br></br>
          <div>
            <button type="submit" className="btn">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
