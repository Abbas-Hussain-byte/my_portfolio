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
// Telemetry Dashboard - High Tech & Minimalist
export const TelemetryDashboard = ({ size = 100 }) => (
    <div className="telemetry-dashboard-container" style={{ width: size * 1.5, height: size }}>
        <svg viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main Frame */}
            <rect x="5" y="5" width="140" height="90" rx="4" stroke="var(--border-subtle)" strokeWidth="1" fill="var(--bg-tertiary)" />

            {/* Header / RPM Bar */}
            <rect x="15" y="15" width="120" height="8" rx="2" fill="var(--bg-secondary)" />
            <rect x="15" y="15" width="80" height="8" rx="2" fill="var(--accent-primary)">
                <animate attributeName="width" values="20;100;60;80" dur="2s" repeatCount="indefinite" />
            </rect>

            {/* Metric Graphs */}
            <g transform="translate(15, 35)">
                {/* Graph 1 */}
                <rect x="0" y="0" width="35" height="40" rx="2" stroke="var(--border-subtle)" strokeWidth="1" />
                <path d="M5 30 L10 25 L15 28 L20 15 L25 18 L30 10" stroke="var(--accent-success)" strokeWidth="1.5" fill="none" />
            </g>

            <g transform="translate(58, 35)">
                {/* Central Data Display */}
                <text x="17" y="20" fill="var(--text-primary)" fontSize="14" fontWeight="bold" textAnchor="middle">12+</text>
                <text x="17" y="32" fill="var(--text-tertiary)" fontSize="7" textAnchor="middle">PROJECTS</text>
            </g>

            <g transform="translate(93, 35)">
                {/* Graph 2 */}
                <rect x="0" y="0" width="35" height="40" rx="2" stroke="var(--border-subtle)" strokeWidth="1" />
                <rect x="5" y="25" width="5" height="10" fill="var(--accent-warning)" />
                <rect x="12" y="15" width="5" height="20" fill="var(--accent-warning)" />
                <rect x="19" y="20" width="5" height="15" fill="var(--accent-warning)" />
                <rect x="26" y="10" width="5" height="25" fill="var(--accent-warning)" />
            </g>

            {/* Footer indicators */}
            <circle cx="20" cy="85" r="3" fill="var(--accent-success)" />
            <circle cx="30" cy="85" r="3" fill="var(--text-tertiary)" />
            <circle cx="40" cy="85" r="3" fill="var(--text-tertiary)" />
        </svg>
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

// Team Radio Headset - Communication Theme
export const TeamRadioHeadset = ({ size = 80 }) => (
    <div className="headset-container" style={{ width: size, height: size }}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Headband */}
            <path d="M20 60 V40 C20 20 80 20 80 40 V60" stroke="var(--border-strong)" strokeWidth="6" strokeLinecap="round" />

            {/* Ear cups - Sharper/Rectangular */}
            <rect x="10" y="55" width="22" height="32" rx="1" fill="var(--bg-tertiary)" stroke="var(--accent-primary)" strokeWidth="2" />
            <rect x="68" y="55" width="22" height="32" rx="1" fill="var(--bg-tertiary)" stroke="var(--accent-primary)" strokeWidth="2" />

            {/* Microphone Boom */}
            <path d="M20 80 L40 90 L60 85" stroke="var(--text-secondary)" strokeWidth="3" fill="none" />

            {/* Mic Tip (Pulsing) */}
            <circle cx="60" cy="85" r="4" fill="var(--accent-success)">
                <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
            </circle>

            {/* Sound Waves */}
            <path d="M75 30 Q85 30 85 40" stroke="var(--accent-primary)" strokeWidth="2" opacity="0.6">
                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M80 25 Q95 25 95 40" stroke="var(--accent-primary)" strokeWidth="2" opacity="0.4">
                <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.3s" repeatCount="indefinite" />
            </path>
        </svg>
    </div>
);

// Data Stream - Tech Contact Theme
export const DataStream = ({ size = 80 }) => (
    <div className="datastream-container" style={{ width: size, height: size }}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Binary Stream Background */}
            <text x="50" y="20" fontSize="8" fill="var(--border-subtle)" textAnchor="middle" fontFamily="monospace">10100101</text>
            <text x="50" y="35" fontSize="8" fill="var(--border-subtle)" textAnchor="middle" fontFamily="monospace">01011010</text>
            <text x="50" y="50" fontSize="8" fill="var(--border-subtle)" textAnchor="middle" fontFamily="monospace">11001100</text>
            <text x="50" y="65" fontSize="8" fill="var(--border-subtle)" textAnchor="middle" fontFamily="monospace">00110011</text>
            <text x="50" y="80" fontSize="8" fill="var(--border-subtle)" textAnchor="middle" fontFamily="monospace">10101010</text>

            {/* Signal Pulse */}
            <circle cx="50" cy="50" r="30" stroke="var(--accent-primary)" strokeWidth="1" opacity="0.5">
                <animate attributeName="r" values="10;40" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
            </circle>

            {/* Central Node */}
            <circle cx="50" cy="50" r="8" fill="var(--bg-secondary)" stroke="var(--accent-primary)" strokeWidth="2" />
            <circle cx="50" cy="50" r="4" fill="var(--accent-primary)" />
        </svg>
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
    TeamRadioHeadset,
    DataStream,
    TelemetryDashboard,
    CodeTyping,
    WavingFlag
};
