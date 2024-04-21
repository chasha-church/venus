import { ComponentProps } from 'react';
import Collaboration from '../../../assets/images/CollaborationIcon.svg';
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';

export const CollaborationIcon: React.FC<ComponentProps<'svg'>> = (
    { width = 36, height = 36 }
) => {
    return (
        <SvgLoader width={width} height={height} path={Collaboration}>
            <SvgProxy selector="rect" />
        </SvgLoader>
    );
};
