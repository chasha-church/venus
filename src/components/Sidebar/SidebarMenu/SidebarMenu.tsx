import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../../../redux/hooks/hooks';
import { selectMenuItems } from '../../../redux/features/sidebarSlice';
import { SidebarMenuItem } from './SidebarMenuItem/SidebarMenuItem';
import { SidebarContext } from '../Sidebar';

const StyledNav = styled.nav<{ $sidebarExpanded: boolean }>``;

const StyledMenuList = styled.ul``;

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
