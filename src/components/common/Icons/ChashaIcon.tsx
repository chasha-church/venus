// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';
import Chasha from '../../../assets/images/ChashaIcon.svg';
import { ComponentProps } from 'react';

export const ChashaIcon: React.FC<ComponentProps<'svg'>> = (
    { ...styles }
) => {
    return (
        <SvgLoader path={Chasha} {...styles} >
            <SvgProxy selector="rect" />
        </SvgLoader>
    );
};
