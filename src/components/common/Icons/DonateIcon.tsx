import React from 'react'
import { ICON_COLOR } from '../../../constants/colors';
import Donate from '../../../assets/images/DonateIcon.svg';
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';

type DonateIconProps = {
    width?: number,
    height?: number,
    color?: string
}

export const DonateIcon: React.FC<DonateIconProps> = (
    { width = 36, height = 36, color = ICON_COLOR }
) => {
    return (
        <SvgLoader width={width} height={height} path={Donate}>
            <SvgProxy selector="rect" fill={color} />
        </SvgLoader>
    );
}