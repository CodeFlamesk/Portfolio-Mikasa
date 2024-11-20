import React, { useState } from 'react';

const ArrowPagination = ({ className = '', style = {}, }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <svg
            className={`${className} ${isHovered ? 'text-blue-500' : ''}`}
            style={style}
            width="15.000000"
            height="15.000000"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <defs>
                <clipPath id="clip70_5161">
                    <rect
                        id="icon/left-chevron"
                        width="14.999998"
                        height="14.999998"
                        fill="white"
                        fillOpacity="0"
                    />
                </clipPath>
            </defs>
            <rect
                id="icon/left-chevron"
                width="14.999998"
                height="14.999998"
                fill="#FFFFFF"
                fillOpacity="0"
            />
            <g clipPath="url(#clip70_5161)">
                <path
                    id="Icon"
                    d="M9.37 11.25L5.62 7.5L9.37 3.75"
                    stroke="#475569"
                    strokeOpacity="1.000000"
                    strokeWidth="2.000000"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
            </g>
        </svg>
    );
};

export default ArrowPagination;
