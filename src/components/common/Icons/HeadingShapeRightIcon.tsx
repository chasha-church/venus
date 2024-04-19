// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';

import HeadingShapeRight from '../../../assets/images/HeadingShapeRight.svg';
import { ComponentProps } from 'react';

export const HeadingShapeRightIcon: React.FC<ComponentProps<'svg'>> = (
    { width = 96, height = 26 }
) => {
    return (
        <SvgLoader width={width} height={height} path={HeadingShapeRight}>
            <SvgProxy selector="rect" />
        </SvgLoader>
    );
}