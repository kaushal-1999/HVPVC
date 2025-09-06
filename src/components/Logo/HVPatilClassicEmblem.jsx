// src/components/Logo/HVPatilClassicEmblem.jsx
import React from "react";

const HVPatilClassicEmblem = ({ size = 220 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 360 360"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="hvpatilTitle hvpatilDesc"
        role="img"
    >
        <title id="hvpatilTitle">H.V. Patil Vidyalaya & Jr. College, Chinchghar</title>
        <desc id="hvpatilDesc">Classic circular academic emblem with shield, laurel, book and torch.</desc>

        <defs>
            {/* Gold metallic gradient */}
            <linearGradient id="gGold" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#FFE082" />
                <stop offset="50%" stopColor="#FFD24C" />
                <stop offset="100%" stopColor="#D88A00" />
            </linearGradient>

            {/* Blue radial ground */}
            <radialGradient id="gBlue" cx="40%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#2b65d9" />
                <stop offset="100%" stopColor="#0b3d91" />
            </radialGradient>

            {/* subtle inner shadow */}
            <filter id="insetShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feOffset dx="0" dy="4" result="o" />
                <feGaussianBlur in="o" stdDeviation="6" result="b" />
                <feComposite in="b" in2="SourceGraphic" operator="arithmetic" k2="-1" k3="1" result="c" />
                <feColorMatrix in="c" type="matrix"
                    values="0 0 0 0 0 
                  0 0 0 0 0 
                  0 0 0 0 0 
                  0 0 0 0.35" />
            </filter>

            {/* subtle highlight */}
            <linearGradient id="gHighlight" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
        </defs>

        {/* Outer gold ring */}
        <circle cx="180" cy="180" r="160" fill="url(#gGold)" />

        {/* Inner blue ring */}
        <circle cx="180" cy="180" r="140" fill="url(#gBlue)" stroke="#0b2f6f" strokeWidth="4" />

        {/* White inner disc */}
        <circle cx="180" cy="160" r="92" fill="#fafafa" stroke="#e6e6e6" strokeWidth="2" filter="url(#insetShadow)" />

        {/* Laurels left */}
        <g stroke="url(#gGold)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M88 170 C64 150, 60 120, 90 96" />
            <path d="M88 186 C60 162, 62 130, 94 108" />
            <path d="M75 200 C50 175, 56 140, 86 120" strokeWidth="5" />
        </g>

        {/* Laurels right (mirror) */}
        <g stroke="url(#gGold)" strokeWidth="6" fill="none" transform="scale(-1,1) translate(-360,0)" strokeLinecap="round" strokeLinejoin="round">
            <path d="M88 170 C64 150, 60 120, 90 96" />
            <path d="M88 186 C60 162, 62 130, 94 108" />
            <path d="M75 200 C50 175, 56 140, 86 120" strokeWidth="5" />
        </g>

        {/* Central torch + flame */}
        <g transform="translate(0,-12)">
            {/* torch handle */}
            <rect x="170" y="88" width="16" height="52" rx="3" fill="#5d4037" />
            {/* flame (radial-ish fill) */}
            <path d="M180 74 C168 94, 178 98, 180 108 C182 98, 192 94, 180 74 Z" fill="#ffb74d" stroke="#ff7043" strokeWidth="1.6" />
            <path d="M180 68 C172 86, 180 90, 180 100 C180 90, 188 86, 180 68 Z" fill="#fff176" opacity="0.9" />
        </g>

        {/* Open book */}
        <g transform="translate(0,20)">
            <path d="M135 170 C150 150, 210 150, 225 170 L225 196 C205 186, 175 188, 180 198 C175 188, 145 186, 135 196 Z" fill="#ffffff" stroke="#0b3d91" strokeWidth="2" />
            <line x1="180" y1="162" x2="180" y2="198" stroke="#0b3d91" strokeWidth="2" />
        </g>

        {/* Rising sun rays */}
        <g transform="translate(0,8)" fill="#ffd24c" stroke="#c62828" strokeWidth="1">
            <circle cx="180" cy="126" r="12" fill="#ffd24c" stroke="#c62828" strokeWidth="1.7" />
            <g opacity="0.9">
                <rect x="178" y="100" width="4" height="12" fill="#ffd24c" transform="rotate(0 180 106)" />
                <rect x="178" y="100" width="4" height="12" fill="#ffd24c" transform="rotate(-25 180 106)" />
                <rect x="178" y="100" width="4" height="12" fill="#ffd24c" transform="rotate(25 180 106)" />
            </g>
        </g>

        {/* small decorative stars */}
        <g transform="translate(0,-8)">
            <polygon points="180,68 176,78 185,73 175,73 184,78" fill="#ffd24c" opacity="0.9" />
        </g>

        {/* Ribbon banner */}
        <g transform="translate(0,92)">
            <path d="M88 240 L272 240 L260 258 L100 258 Z" fill="#0b3d91" stroke="#07285a" strokeWidth="2" />
            <text x="180" y="254" fill="#ffd24c" fontSize="16" fontWeight="700" textAnchor="middle" style={{ fontFamily: 'Merriweather, serif', letterSpacing: '0.6px' }}>H.V. Patil Vidyalaya</text>
            <text x="180" y="273" fill="#ffffff" fontSize="12" fontWeight="600" textAnchor="middle" style={{ fontFamily: 'Poppins, sans-serif' }}> &amp; Jr. College, Chinchghar</text>
        </g>

        {/* top highlight */}
        <ellipse cx="180" cy="60" rx="70" ry="22" fill="url(#gHighlight)" opacity="0.25" />
    </svg>
);

export default HVPatilClassicEmblem;
