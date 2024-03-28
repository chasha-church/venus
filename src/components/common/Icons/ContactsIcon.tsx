import React from 'react'
import { ICON_COLOR } from '../../../constants/colors';
import Contacts from '../../../assets/images/ContactsIcon.svg';
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';

type ContactsIconProps = {
    width?: number,
    height?: number,
    color?: string
}

export const ContactsIcon: React.FC<ContactsIconProps> = (
    { width = 36, height = 36, color = ICON_COLOR }
) => {
    return (
        <SvgLoader width={width} height={height} path={Contacts}>
            <SvgProxy selector="rect" fill={color} />
        </SvgLoader>
    );
}
