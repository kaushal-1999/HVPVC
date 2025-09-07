import React, { useState, useMemo } from 'react';
import './Login.css';
import loginIMG from '../../../../assets/userLogin.png';
import LoginBg from '../../../../assets/login-bg.jpg';
import axios from 'axios';
// import { API } from '../../../constant';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

//   const [urlSearchParam] = useSearchParams();
//   const nextUrl = useMemo(() => urlSearchParam.get("next"), [urlSearchParam]);

//   const loginUser = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${API}/admin/user/login`, { username, password });

//       const { status, token, user } = response.data;

//       if (status !== "success") {
//         setError("Invalid credentials. Please try again.");
//         toast.error("Wrong Password");
//       } else {
//         toast.success("Login successful!");

//         localStorage.setItem("token", token);
//         localStorage.setItem("user", JSON.stringify(user));

//         setTimeout(() => {
//           window.location.href = nextUrl || "/admin/dashboard";
//         }, 1500);
//       }
//     } catch (err) {
//       const msg = err.response?.data?.message || "Login failed. Please try again.";
//       setError(msg);
//       toast.error(`Login failed: ${msg}`);
//     }
// //   };

  return (
    <div className='login-container'>
      <img src={LoginBg} alt="Background" />
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="loginwrapperCon">
        <div className="loginwrapper">
          <div className='loginform'>
            <form onSubmit={""} className='AMFLoginForm'>
              <div className="AMFLoginInputGroup">
                <h2 className='heading'>Admin Login</h2>
                <label>Username:</label>
                <input type="text" className='llInput' value={username} onChange={handleUsernameChange} />
              </div>
              <div className="AMFLoginInputGroup">
                <label>Password:</label>
                <input type="password" className='llInput' value={password} onChange={handlePasswordChange} />
              </div>
              <button className='submitBTN' type="submit">Login</button>
              {error && <p className="error-msg">{error}</p>}
            </form>
          </div>
          <div className='loginImg'>
            <img src={loginIMG} alt="Login Illustration" />
          </div>
        </div >
      </div >
    </div >
  );
};

export default Login;
