import { ComponentProps } from 'react';
import Church from '../../../assets/images/ChurchIcon.svg';
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';

export const ChurchIcon: React.FC<ComponentProps<'svg'>> = (
    { width = 36, height = 36 }
) => {
    return (
        <SvgLoader width={width} height={height} path={Church}>
            <SvgProxy selector="rect" />
        </SvgLoader>
    );
}
