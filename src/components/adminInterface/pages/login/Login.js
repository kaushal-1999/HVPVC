import React, { useState } from "react";
import "./Login.css";
import loginIMG from "../../../../assets/userLogin.png";
import LoginBg from "../../../../assets/login-bg.jpeg";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../../../constant";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [urlSearchParam] = useSearchParams();
    const nextUrl = urlSearchParam.get("next");

    const navigate = useNavigate();

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const loginUser = async (e) => {
        e.preventDefault();
        setError("");

        if (!username || !password) {
            setError("Please fill in both fields.");
            toast.error("Username and password required");
            return;
        }

        try {
            const response = await axios.post(`${API}/user/login`, {
                email: username,
                password,
            });

            const { token, user } = response.data;

            console.log("Login response:", response.data);

            if (!token || !user) {
                setError("Invalid credentials. Please try again.");
                toast.error("Login failed!");
                return;
            }

            // Define access
            const isSuperAdmin = user.role === "SuperAdmin";
            const isAdmin = user.role === "Admin";
            const isOfficeStaff = user.role === "Staff" && user.staffType === "OfficeStaff";

            console.log("Role flags:", { isSuperAdmin, isAdmin, isOfficeStaff });

            if (!(isSuperAdmin || isAdmin || isOfficeStaff)) {
                // unauthorized
                setUsername("");
                setPassword("");
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                toast.error("Access denied: you do not have permission to login");
                navigate("/error-teacher");
                return;
            }

            // Save token & user
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            toast.success("Login successful!");

            // Redirect based on role
            setTimeout(() => {
                if (nextUrl) {
                    navigate(nextUrl);
                } else if (isSuperAdmin || isAdmin) {
                    navigate("/admin/dashboard");
                } else if (isOfficeStaff) {
                    navigate("/admin/dashboard");
                } else {
                    navigate("/error-teacher");
                }
            }, 500);

        } catch (err) {
            console.error("Login error:", err);
            const msg = err.response?.data?.error || "Login failed. Please try again.";
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
                            <h2 className="login-form__heading">Admin/Office Staff Login</h2>

                            <div className="login-form__group">
                                <label className="login-form__label">Email</label>
                                <input
                                    type="text"
                                    className="login-form__input"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    placeholder="Enter email"
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

                            <button type="submit" className="login-form__button">Login</button>

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
