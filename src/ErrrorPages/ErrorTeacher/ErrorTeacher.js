import React from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorTeacher.css"; // Add some CSS for styling

const ErrorTeacher = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate("/login"); // Redirect back to login page
    };

    return (
        <div className="error-teacher-page">
            <div className="error-teacher-container">
                <h2>Portal Access Restricted</h2>
                <p>
                    This portal is for management staff and admin only. <br />
                    Teachers should use the official Android or iOS app to update student attendance 
                    and manage complaints.
                </p>
                <button className="error-teacher-close-btn" onClick={handleClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default ErrorTeacher;
