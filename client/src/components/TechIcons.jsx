import React from 'react';

// Collection of F1 and Tech themed SVG icons
export const RacingHelmet = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4C8.68629 4 6 6.68629 6 10V13H7V16H17V13H18V10C18 6.68629 15.3137 4 12 4Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 13H17" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <rect x="9" y="16" width="6" height="3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const Terminal = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke={color} strokeWidth="2" />
        <path d="M7 10L10 13L7 16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="16" x2="17" y2="16" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const Speedometer = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" stroke={color} strokeWidth="2" />
        <path d="M12 12L16 8" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill={color} />
        <path d="M8 8L8.5 8.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M16 8L15.5 8.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M18 14L17.5 13.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const Laptop = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="16" height="11" rx="1" stroke={color} strokeWidth="2" />
        <path d="M2 17H22V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18V17Z" stroke={color} strokeWidth="2" />
        <line x1="7" y1="9" x2="17" y2="9" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="7" y1="12" x2="15" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export const Gear = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" />
        <path d="M12 1V4M12 20V23M23 12H20M4 12H1M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const RacingFlag = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="4" y1="3" x2="4" y2="21" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <rect x="5" y="3" width="3" height="2" fill={color} />
        <rect x="11" y="3" width="3" height="2" fill={color} />
        <rect x="17" y="3" width="3" height="2" fill={color} />
        <rect x="8" y="5" width="3" height="2" fill={color} />
        <rect x="14" y="5" width="3" height="2" fill={color} />
        <rect x="5" y="7" width="3" height="2" fill={color} />
        <rect x="11" y="7" width="3" height="2" fill={color} />
        <rect x="17" y="7" width="3" height="2" fill={color} />
        <rect x="8" y="9" width="3" height="2" fill={color} />
        <rect x="14" y="9" width="3" height="2" fill={color} />
    </svg>
);

export const CircuitBoard = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="2" stroke={color} strokeWidth="2" />
        <circle cx="17" cy="7" r="2" stroke={color} strokeWidth="2" />
        <circle cx="7" cy="17" r="2" stroke={color} strokeWidth="2" />
        <circle cx="17" cy="17" r="2" stroke={color} strokeWidth="2" />
        <path d="M7 9V15M17 9V15M9 7H15M9 17H15" stroke={color} strokeWidth="2" />
        <circle cx="12" cy="12" r="1.5" fill={color} />
    </svg>
);

export const Database = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="6" rx="8" ry="3" stroke={color} strokeWidth="2" />
        <path d="M4 6V18C4 19.6569 7.58172 21 12 21C16.4183 21 20 19.6569 20 18V6" stroke={color} strokeWidth="2" />
        <path d="M4 12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12" stroke={color} strokeWidth="2" />
    </svg>
);

export default {
    RacingHelmet,
    Terminal,
    Speedometer,
    Laptop,
    Gear,
    RacingFlag,
    CircuitBoard,
    Database
};
