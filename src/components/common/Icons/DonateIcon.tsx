import React from 'react'
import { ICON_COLOR } from '../../../constants/colors';

type DonateIconProps = {
    width?: number,
    height?: number,
    color?: string
}

export const DonateIcon: React.FC<DonateIconProps> = 
    ({ width = 36, height = 36, color = ICON_COLOR }) => {

    return (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 68 68"
            preserveAspectRatio="xMidYMid meet"
        >
            <g 
                transform="translate(0.000000,68.000000) scale(0.100000,-0.100000)"
                fill={color}
            >
                <path
                    strokeWidth="20"
                    d="M340 562 c-34 -43 -26 -68 45 -141 l64 -66 60 60 c71 70 83 106 52
                        146 -19 25 -25 27 -111 27 -85 0 -92 -2 -110 -26z m98 -4 c9 -9 15 -9 24 0 18
                        18 63 14 83 -8 25 -28 14 -57 -45 -115 l-50 -49 -55 54 c-30 30 -55 63 -55 74
                        0 45 67 75 98 44z"
                />
                <path
                    strokeWidth="20"
                    d="M185 339 c-33 -16 -72 -28 -87 -29 -55 -1 -58 -5 -58 -99 l0 -87 150
                        -18 150 -18 137 72 c76 40 144 78 152 85 15 15 7 51 -14 59 -9 3 -71 -14 -139
                        -38 -119 -43 -125 -44 -147 -28 l-24 17 34 5 c41 6 61 32 45 57 -6 9 -39 24
                        -75 33 l-64 16 -60 -27z m179 -29 c17 -16 -6 -30 -50 -30 -24 0 -44 -4 -44 -9
                        0 -5 18 -23 39 -40 l39 -31 128 45 c87 31 131 42 138 35 15 -15 -5 -30 -148
                        -105 l-129 -67 -109 12 -109 13 3 79 3 79 64 29 c63 27 65 28 115 13 28 -8 55
                        -19 60 -23z m-266 -98 c3 -67 1 -72 -18 -72 -18 0 -20 6 -20 68 0 38 3 72 7
                        76 18 17 28 -7 31 -72z"
                />
            </g>
        </svg>
    );
}