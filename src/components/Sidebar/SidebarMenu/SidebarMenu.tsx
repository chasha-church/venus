import React from 'react'

import { useAppSelector } from '../../../redux/hooks/hooks';
import { selectActiveItemId, selectMenuItems } from '../../../redux/features/sidebarSlice';
import { SidebarMenuItem } from './SidebarMenuItem/SidebarMenuItem';
import styled from 'styled-components';

const StyledMenu = styled.nav`
`;

const StyledMenuList = styled.ul`
    margin-top: 2em;
`

type SidebarMenuProps = {
    sidebarExpanded: boolean;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ sidebarExpanded }) => {

    const menuItems = useAppSelector(selectMenuItems);
    const activeItemId = useAppSelector(selectActiveItemId);

    return (
        <StyledMenu>
            <StyledMenuList>
                {menuItems.map(menuItem =>
                    <SidebarMenuItem
                        key={menuItem.id}
                        sidebarExpanded={sidebarExpanded}
                        isActive={menuItem.id === activeItemId}
                        {...menuItem}
                    />
                )}
            </StyledMenuList>
        </StyledMenu>
    );

}
