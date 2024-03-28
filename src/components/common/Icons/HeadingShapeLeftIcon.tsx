import React from 'react'
import { SHAPE_COLOR } from '../../../constants/colors';
import HeadingShapeLeft from '../../../assets/images/HeadingShapeLeft.svg';
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';

type HeadingShapeRightIconProps = {
    width?: number,
    height?: number,
    color?: string
}

export const HeadingShapeLeftIcon: React.FC<HeadingShapeRightIconProps> = 
    ({ width = 96, height = 26, color = SHAPE_COLOR }
) => {
    return (
        <SvgLoader width={width} height={height} path={HeadingShapeLeft}>
            <SvgProxy selector="rect" fill={color} />
        </SvgLoader>
    );
}