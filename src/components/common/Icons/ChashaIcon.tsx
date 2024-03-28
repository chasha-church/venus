import React from 'react'
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';
import Chasha from '../../../assets/images/ChashaIcon.svg';

type ChashaIconProps = {
    width?: number,
    height?: number,
}

export const ChashaIcon: React.FC<ChashaIconProps> = (
    { width = 36, height = 36 }
) => {
    return (
        <SvgLoader width={width} height={height} path={Chasha}>
            <SvgProxy selector="rect" />
        </SvgLoader>
    );
}
