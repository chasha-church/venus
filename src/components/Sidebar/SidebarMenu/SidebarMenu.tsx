import React from 'react'
import styled from 'styled-components';

import { useAppSelector } from '../../../redux/hooks/hooks';
import { selectMenuItems } from '../../../redux/features/sidebarSlice';
import { SidebarMenuItem } from './SidebarMenuItem/SidebarMenuItem';
import { IconMatcher } from '../../../utils/IconMatcher';

const StyledMenuList = styled.ul`
`

type SidebarMenuProps = {}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ }) => {

    const menuItems = useAppSelector(selectMenuItems);

    return (
        <nav>
            <StyledMenuList>
                {menuItems.map(menuItem =>
                    <SidebarMenuItem
                        key={menuItem.id}
                        {...menuItem}
                    />
                )}
            </StyledMenuList>
        </nav>
    );

}
