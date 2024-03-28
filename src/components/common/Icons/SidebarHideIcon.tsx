import React from 'react'
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';
import SidebarHide from '../../../assets/images/SidebarHideIcon.svg';

type SidebarHideIconProps = {
    width?: number,
    height?: number,
}

export const SidebarHideIcon: React.FC<SidebarHideIconProps> = (
    { width = 30, height = 30 }
) => {
    return (
        <SvgLoader width={width} height={height} path={SidebarHide}>
            <SvgProxy selector="rect" />
        </SvgLoader>
    );
}