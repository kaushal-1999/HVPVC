// src/components/Logo/HVPatilMonogram.jsx
import React from "react";

const HVPatilMonogram = ({ size = 72 }) => (
    <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img">
        <defs>
            <linearGradient id="mG" x1="0" x2="1"><stop offset="0" stopColor="#2b65d9" /><stop offset="1" stopColor="#0b3d91" /></linearGradient>
            <linearGradient id="gG" x1="0" x2="1"><stop offset="0" stopColor="#ffe082" /><stop offset="1" stopColor="#d88a00" /></linearGradient>
        </defs>

        <circle cx="60" cy="60" r="56" fill="url(#mG)" />
        <text x="60" y="72" textAnchor="middle" fontSize="40" fontWeight="700" fill="url(#gG)" style={{ fontFamily: 'Poppins, sans-serif' }}>HVP</text>
        <path d="M60 30 L58 40 L62 40 Z" fill="#fff" opacity="0.9" />
    </svg>
);

export default HVPatilMonogram;
