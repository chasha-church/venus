// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';
import Chasha from '../../../assets/images/ChashaIcon.svg';
import { ComponentProps } from 'react';

export const ChashaIcon: React.FC<ComponentProps<'svg'>> = (
    { width = 36, height = 36 }
) => {
    return (
        <SvgLoader width={width} height={height} path={Chasha}>
            <SvgProxy selector="rect" />
        </SvgLoader>
    );
}
