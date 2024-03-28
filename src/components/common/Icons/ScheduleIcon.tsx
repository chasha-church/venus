import React from 'react'
import { ICON_COLOR } from '../../../constants/colors';
import Schedule from '../../../assets/images/ScheduleIcon.svg';
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';

type ScheduleIconProps = {
    width?: number,
    height?: number,
    color?: string
}

export const ScheduleIcon: React.FC<ScheduleIconProps> = (
    { width = 36, height = 36, color = ICON_COLOR }
) => {
    return (
        <SvgLoader width={width} height={height} path={Schedule}>
            <SvgProxy selector="rect" fill={color} />
        </SvgLoader>
    );
}