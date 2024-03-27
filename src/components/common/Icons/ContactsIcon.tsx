import React from 'react'
import { ICON_COLOR } from '../../../constants/colors';

type ContactsIconProps = {
    width?: number,
    height?: number,
    color?: string
}

export const ContactsIcon: React.FC<ContactsIconProps> = 
    ({ width = 36, height = 36, color = ICON_COLOR }) => {

    return (
        <svg
            width={width}
            height={height}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 256 256"
            enableBackground="new 0 0 256 256"
            xmlSpace="preserve"
        >
            <g>
                <g>
                    <path 
                        fill={color}
                        d="M189.3,134.3C128.9,245.8,128,246,128,246s-0.4-0.6-61.2-111.5C56.4,121.4,50.1,104.9,50.1,87c0-42.6,34.9-77,77.9-77s77.9,34.5,77.9,77C205.8,104.9,199.6,121.3,189.3,134.3z M128.3,33.1c-30.1,0-54.5,24.1-54.5,53.9c0,29.8,24.4,53.9,54.5,53.9c30.1,0,54.5-24.1,54.5-53.9C182.8,57.2,158.4,33.1,128.3,33.1z"
                    />
                </g>
            </g>
        </svg>
    );
}
