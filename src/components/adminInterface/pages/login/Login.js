import React, { useState, useMemo } from 'react';
import './Login.css';
import loginIMG from '../../../../assets/userLogin.png';
import LoginBg from '../../../../assets/login-bg.jpeg';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { API } from '../../../constant';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [urlSearchParam] = useSearchParams();
    const nextUrl = useMemo(() => urlSearchParam.get("next"), [urlSearchParam]);

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const loginUser = async (e) => {
        e.preventDefault();
        setError('');

        if (!username || !password) {
            setError('Please fill in both fields.');
            toast.error('Username and password required');
            return;
        }

        try {
            // Replace with your API
            // const response = await axios.post(`${API}/admin/user/login`, { username, password });
            // Mock success response for demo
            const response = { data: { status: 'success', token: 'demo-token', user: { username } } };

            const { status, token, user } = response.data;

            if (status !== 'success') {
                setError('Invalid credentials. Please try again.');
                toast.error('Login failed!');
            } else {
                toast.success('Login successful!');
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));

                setTimeout(() => {
                    window.location.href = nextUrl || '/admin/dashboard';
                }, 1500);
            }
        } catch (err) {
            const msg = err.response?.data?.message || 'Login failed. Please try again.';
            setError(msg);
            toast.error(`Login failed: ${msg}`);
        }
    };

    return (
        <div className="login-page">
            <img src={LoginBg} alt="Background" className="login-page__background" />
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="login-page__wrapper-container">
                <div className="login-page__wrapper">
                    <div className="login-form">
                        <form className="login-form__form" onSubmit={loginUser}>
                            <h2 className="login-form__heading">Admin Login</h2>
                            <div className="login-form__group">
                                <label className="login-form__label">Username</label>
                                <input
                                    type="text"
                                    className="login-form__input"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    placeholder="Enter username"
                                />
                            </div>
                            <div className="login-form__group">
                                <label className="login-form__label">Password</label>
                                <input
                                    type="password"
                                    className="login-form__input"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Enter password"
                                />
                            </div>
                            <button type="submit" className="login-form__button">
                                Login
                            </button>
                            {error && <p className="login-form__error">{error}</p>}
                        </form>
                    </div>
                    <div className="login-page__illustration">
                        <img src={loginIMG} alt="Login Illustration" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
