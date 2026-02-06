import React from 'react';
import './F1Animations.css';

// 3D Isometric F1 Racing Car - Much Better!
export const AnimatedF1Car = ({ size = 160 }) => (
    <div className="f1-car-3d-container" style={{ width: size * 1.5, height: size }}>
        <div className="f1-car-3d">
            {/* Car body - main chassis */}
            <div className="car-chassis">
                {/* Front nose cone */}
                <div className="nose-cone"></div>

                {/* Front wing */}
                <div className="front-wing"></div>

                {/* Cockpit */}
                <div className="cockpit">
                    <div className="cockpit-glass"></div>
                    <div className="driver-helmet"></div>
                </div>

                {/* Engine cover */}
                <div className="engine-cover"></div>

                {/* Rear wing */}
                <div className="rear-wing">
                    <div className="rear-wing-element"></div>
                </div>

                {/* Wheels */}
                <div className="wheel wheel-front-left">
                    <div className="tire"></div>
                    <div className="rim"></div>
                </div>
                <div className="wheel wheel-front-right">
                    <div className="tire"></div>
                    <div className="rim"></div>
                </div>
                <div className="wheel wheel-rear-left">
                    <div className="tire"></div>
                    <div className="rim"></div>
                </div>
                <div className="wheel wheel-rear-right">
                    <div className="tire"></div>
                    <div className="rim"></div>
                </div>

                {/* Side details */}
                <div className="sidepod sidepod-left"></div>
                <div className="sidepod sidepod-right"></div>

                {/* Racing number */}
                <div className="racing-number">01</div>
            </div>

            {/* Speed effect lines */}
            <div className="speed-lines">
                <div className="speed-line" style={{ animationDelay: '0s' }}></div>
                <div className="speed-line" style={{ animationDelay: '0.15s' }}></div>
                <div className="speed-line" style={{ animationDelay: '0.3s' }}></div>
                <div className="speed-line" style={{ animationDelay: '0.45s' }}></div>
            </div>
        </div>
    </div>
);

// Spinning Tire/Wheel - Enhanced
export const SpinningTire = ({ size = 80, speed = 2 }) => (
    <div className="tire-container-enhanced" style={{ width: size, height: size }}>
        <div className="tire-3d" style={{ animationDuration: `${speed}s` }}>
            {/* Tire tread */}
            <div className="tire-outer"></div>

            {/* Rim with spokes */}
            <div className="tire-rim">
                <div className="spoke" style={{ transform: 'rotate(0deg)' }}></div>
                <div className="spoke" style={{ transform: 'rotate(45deg)' }}></div>
                <div className="spoke" style={{ transform: 'rotate(90deg)' }}></div>
                <div className="spoke" style={{ transform: 'rotate(135deg)' }}></div>
            </div>

            {/* Center cap */}
            <div className="tire-center">
                <div className="center-logo">F1</div>
            </div>

            {/* Brake disc behind */}
            <div className="brake-disc"></div>
        </div>
    </div>
);

// Rotating Steering Wheel - Enhanced
export const SteeringWheel = ({ size = 100 }) => (
    <div className="steering-container-3d" style={{ width: size, height: size }}>
        <div className="steering-wheel-3d">
            {/* Wheel rim */}
            <div className="wheel-rim-outer"></div>
            <div className="wheel-rim-inner"></div>

            {/* Left grip */}
            <div className="grip grip-left"></div>

            {/* Right grip */}
            <div className="grip grip-right"></div>

            {/* Spokes */}
            <div className="spoke-vertical"></div>
            <div className="spoke-horizontal"></div>

            {/* Center hub with buttons */}
            <div className="wheel-center">
                <div className="button button-1"></div>
                <div className="button button-2"></div>
                <div className="display-screen">DRS</div>
            </div>
        </div>
    </div>
);

// Code Animation (Typing Effect) - Keep
export const CodeTyping = ({ size = 120 }) => (
    <div className="code-typing-container" style={{ width: size * 2, height: size }}>
        <svg viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Terminal window */}
            <rect x="10" y="10" width="220" height="100" rx="5" fill="var(--bg-secondary)" stroke="var(--border-strong)" strokeWidth="2" />

            {/* Title bar */}
            <rect x="10" y="10" width="220" height="20" rx="5" fill="var(--bg-tertiary)" />
            <circle cx="25" cy="20" r="4" fill="var(--accent-critical)" />
            <circle cx="40" cy="20" r="4" fill="var(--accent-warning)" />
            <circle cx="55" cy="20" r="4" fill="var(--accent-success)" />

            {/* Typing cursor */}
            <rect x="20" y="45" width="3" height="15" fill="var(--accent-primary)" className="typing-cursor" />

            {/* Code lines with typing animation */}
            <g className="code-line" style={{ animationDelay: '0s' }}>
                <text x="30" y="55" fill="var(--accent-primary)" fontFamily="monospace" fontSize="10">{'const build = () => {'}</text>
            </g>
            <g className="code-line" style={{ animationDelay: '0.5s' }}>
                <text x="45" y="70" fill="var(--accent-success)" fontFamily="monospace" fontSize="10">{'  optimize();'}</text>
            </g>
            <g className="code-line" style={{ animationDelay: '1s' }}>
                <text x="45" y="85" fill="var(--accent-warning)" fontFamily="monospace" fontSize="10">{'  deploy();'}</text>
            </g>
            <g className="code-line" style={{ animationDelay: '1.5s' }}>
                <text x="30" y="100" fill="var(--accent-primary)" fontFamily="monospace" fontSize="10">{'}'}</text>
            </g>
        </svg>
    </div>
);

// Loading Spinner (Pit Stop themed) - Enhanced
export const PitStopLoader = ({ size = 60 }) => (
    <div className="pit-stop-loader-3d" style={{ width: size, height: size }}>
        <div className="loader-outer-ring"></div>
        <div className="loader-middle-ring"></div>
        <div className="wrench-icon">
            <div className="wrench-handle"></div>
            <div className="wrench-head"></div>
        </div>
    </div>
);

// Racing Flag Wave Animation - Keep
export const WavingFlag = ({ size = 80 }) => (
    <div style={{ width: size, height: size * 0.6 }}>
        <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Flag pole */}
            <line x1="10" y1="5" x2="10" y2="55" stroke="var(--text-primary)" strokeWidth="3" />

            {/* Waving checkered flag */}
            <g className="flag-wave">
                <path d="M10 10 Q30 8 50 10 T90 10 L90 35 Q70 37 50 35 T10 35 Z" fill="url(#checkerPattern)" stroke="var(--border-strong)" strokeWidth="1" />
            </g>

            <defs>
                <pattern id="checkerPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="5" height="5" fill="var(--text-primary)" />
                    <rect x="5" y="5" width="5" height="5" fill="var(--text-primary)" />
                    <rect x="5" y="0" width="5" height="5" fill="var(--bg-primary)" />
                    <rect x="0" y="5" width="5" height="5" fill="var(--bg-primary)" />
                </pattern>
            </defs>
        </svg>
    </div>
);

export default {
    AnimatedF1Car,
    SpinningTire,
    SteeringWheel,
    CodeTyping,
    PitStopLoader,
    WavingFlag
};
