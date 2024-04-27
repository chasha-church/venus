import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../../../redux/hooks/hooks';
import { selectMenuItems } from '../../../redux/features/sidebarSlice';
import { SidebarMenuItem } from './SidebarMenuItem/SidebarMenuItem';
import { SidebarContext } from '../Sidebar';

const StyledNav = styled.nav<{ $sidebarExpanded: boolean }>`
    overflow: auto;
    oveflow-y: scroll;
    visibility: ${(props) => (props.$sidebarExpanded ? 'visible' : 'hidden')};

    margin-right: ${(props) => (props.$sidebarExpanded ? '0.25em' : '0')};
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

    return (
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
