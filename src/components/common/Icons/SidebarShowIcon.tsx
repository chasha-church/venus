import React from 'react'
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';
import SidebarShow from '../../../assets/images/SidebarShowIcon.svg';

type SidebarShowIconProps = {
    width?: number,
    height?: number,
}

export const SidebarShowIcon: React.FC<SidebarShowIconProps> = (
    { width = 30, height = 30 }
) => {
    return (
        <SvgLoader width={width} height={height} path={SidebarShow}>
            <SvgProxy selector="rect" />
        </SvgLoader>
    );
}