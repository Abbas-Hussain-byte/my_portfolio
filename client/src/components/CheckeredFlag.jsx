import React from 'react';

const CheckeredFlag = ({ size = 24 }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="checkered-flag"
            aria-label="Section divider"
        >
            {/* Flagpole */}
            <line x1="4" y1="3" x2="4" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

            {/* Checkered pattern (4x3 grid) */}
            {/* Row 1 */}
            <rect x="4.5" y="3" width="4" height="3" fill="currentColor" />
            <rect x="12.5" y="3" width="4" height="3" fill="currentColor" />

            {/* Row 2 */}
            <rect x="8.5" y="6" width="4" height="3" fill="currentColor" />
            <rect x="16.5" y="6" width="3.5" height="3" fill="currentColor" />

            {/* Row 3 */}
            <rect x="4.5" y="9" width="4" height="3" fill="currentColor" />
            <rect x="12.5" y="9" width="4" height="3" fill="currentColor" />

            {/* Row 4 */}
            <rect x="8.5" y="12" width="4" height="3" fill="currentColor" />
            <rect x="16.5" y="12" width="3.5" height="3" fill="currentColor" />

            {/* Empty squares outline */}
            <rect x="4.5" y="3" width="15.5" height="12" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
    );
};

export default CheckeredFlag;
