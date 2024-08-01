import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../../../redux/hooks/hooks';
import { selectMenuItems } from '../../../redux/features/sidebarSlice';
import { SidebarMenuItem } from './SidebarMenuItem/SidebarMenuItem';
import { SidebarContext } from '../Sidebar';
import { device, size } from '../../../styles/BreakPoints';
import { useScreenSize } from '../../../redux/hooks/useScreenSize';

// const StyledNavWrapper = styled.nav<{ $sidebarExpanded: boolean }>`
// @media only screen and (${device.sm}) {
//     display: grid;
//     grid-template-rows: ${(props) =>
//         props.$sidebarExpanded ? '1fr' : '0fr'};
//     transition: all 1000ms;
//     overflow: hidden;

//     // CSS-selector that gets first child of this component
//     & > * {
//         overflow: hidden;
//     }
// }
// `;

const StyledNav = styled.nav<{ $sidebarExpanded: boolean }>`
    overflow: ${(props) => (props.$sidebarExpanded ? 'auto' : 'hidden')};
    visibility: ${(props) => (props.$sidebarExpanded ? 'visible' : 'hidden')};

    &::-webkit-scrollbar {
        width: ${(props) =>
            props.$sidebarExpanded ? 'var(--sidebar-scroll-width)' : '0'};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.colors.inputPlaceholder};
        border-radius: 10px;
    }

    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.colors.inputPlaceholder}
        transparent;
`;

const StyledMenuList = styled.ul`
    /* Invisibiltity was inherited from StyledNav parent, so we need to overwrite it */
    visibility: visible;
`;

type SidebarMenuProps = {};

export const SidebarMenu: React.FC<SidebarMenuProps> = ({}) => {
    const menuItems = useAppSelector(selectMenuItems);
    const { sidebarExpanded } = useContext(SidebarContext);

    const screenSize = useScreenSize();
    const isMobileVersion = screenSize.width <= size.sm;

    return (
        // <StyledNavWrapper $sidebarExpanded={sidebarExpanded}>
        // </StyledNavWrapper>
        <StyledNav $sidebarExpanded={sidebarExpanded}>
            <StyledMenuList>
                {menuItems.map((menuItem) => (
                    <SidebarMenuItem
                        key={menuItem.id}
                        {...menuItem}
                    />
                ))}
            </StyledMenuList>
        </StyledNav>
    );
};
