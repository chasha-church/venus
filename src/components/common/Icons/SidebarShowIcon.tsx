// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';
import SidebarShow from '../../../assets/images/SidebarShowIcon.svg';
import { ComponentProps } from 'react';

export const SidebarShowIcon: React.FC<ComponentProps<'svg'>> = (
    { ...styles }
) => {
    return (
        <SvgLoader {...styles} path={SidebarShow}>
            <SvgProxy selector="rect" />
        </SvgLoader>
    );
};