import React from 'react'
import { ICON_COLOR } from '../../../constants/colors';
import Collaboration from '../../../assets/images/CollaborationIcon.svg';
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';

type CollaborationIconProps = {
    width?: number,
    height?: number,
    color?: string
}

export const CollaborationIcon: React.FC<CollaborationIconProps> = (
    { width = 36, height = 36, color = ICON_COLOR }
) => {
    return (
        <SvgLoader width={width} height={height} path={Collaboration}>
            <SvgProxy selector="rect" fill={color} />
        </SvgLoader>
    );
}
