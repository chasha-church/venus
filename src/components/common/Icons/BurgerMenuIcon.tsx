// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';
import Burger from '../../../assets/images/BurgerMenu.svg';
import { ComponentProps } from 'react';

export const BurgerMenuIcon: React.FC<ComponentProps<'svg'>> = ({ ...styles }) => {
    return (
        <SvgLoader
            path={Burger}
            {...styles}
        >
            <SvgProxy selector="rect" />
        </SvgLoader>
    );
};
