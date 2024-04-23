import { ComponentProps } from 'react';
import Donate from '../../../assets/images/DonateIcon.svg';
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';

export const DonateIcon: React.FC<ComponentProps<'svg'>> = (
    { width = 36, height = 36 }
) => {
    return (
        <SvgLoader width={width} height={height} path={Donate}>
            <SvgProxy selector="rect" />
        </SvgLoader>
    );
};