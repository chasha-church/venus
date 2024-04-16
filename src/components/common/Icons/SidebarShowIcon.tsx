// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';
import SidebarShow from '../../../assets/images/SidebarShowIcon.svg';
import { ComponentProps } from 'react';

export const SidebarShowIcon: React.FC<ComponentProps<'svg'>> = (
    { width = 30, height = 30 }
) => {
    return (
        <SvgLoader width={width} height={height} path={SidebarShow}>
            <SvgProxy selector="rect" />
        </SvgLoader>
    );
}