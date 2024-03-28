import React from 'react'
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';
import SubmenuToggle from '../../../assets/images/SubmenuToggleIcon.svg';

type SubmenuToggleIconProps = {
    width?: number,
    height?: number,
}

export const SubmenuToggleIcon: React.FC<SubmenuToggleIconProps> = (
    { width = 20, height = 20 }
) => {
    return (
        <SvgLoader width={width} height={height} path={SubmenuToggle}>
            <SvgProxy selector="rect" />
        </SvgLoader>
    );
}