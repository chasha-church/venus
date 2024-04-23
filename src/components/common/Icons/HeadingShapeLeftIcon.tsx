import HeadingShapeLeft from '../../../assets/images/HeadingShapeLeft.svg';
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';
import { ComponentProps } from 'react';

export const HeadingShapeLeftIcon: React.FC<ComponentProps<'svg'>> = 
    ({ width = 96, height = 26 }
) => {
    return (
        <SvgLoader width={width} height={height} path={HeadingShapeLeft}>
            <SvgProxy selector="rect" />
        </SvgLoader>
    );
}