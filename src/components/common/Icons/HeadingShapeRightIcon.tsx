import React from 'react'
import { SHAPE_COLOR } from '../../../constants/colors';

// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';

import HeadingShapeRight from '../../../assets/images/HeadingShapeRight.svg';

type HeadingShapeRightIconProps = {
    width?: number,
    height?: number,
    color?: string
}

export const HeadingShapeRightIcon: React.FC<HeadingShapeRightIconProps> = 
    ({ width = 96, height = 26, color = SHAPE_COLOR }
) => {
    return (
        <SvgLoader width={width} height={height} path={HeadingShapeRight}>
            <SvgProxy selector="rect" fill={color} />
        </SvgLoader>
    );
}