import React from 'react'
import { ICON_COLOR } from '../../../constants/colors';
import Church from '../../../assets/images/ChurchIcon.svg';
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';

type ChurchIconProps = {
    width?: number,
    height?: number,
    color?: string
}

export const ChurchIcon: React.FC<ChurchIconProps> = (
    { width = 36, height = 36, color = ICON_COLOR }
) => {
    return (
        <SvgLoader width={width} height={height} path={Church}>
            <SvgProxy selector="rect" fill={color} />
        </SvgLoader>
    );
}
