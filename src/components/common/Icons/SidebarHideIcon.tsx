import { ComponentProps } from 'react';
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';
import SidebarHide from '../../../assets/images/SidebarHideIcon.svg';

export const SidebarHideIcon: React.FC<ComponentProps<'svg'>> = ({
    width = 30,
    height = 30,
}) => {
    return (
        <SvgLoader
            width={width}
            height={height}
            path={SidebarHide}
        >
            <SvgProxy selector="rect" />
        </SvgLoader>
    );
};
