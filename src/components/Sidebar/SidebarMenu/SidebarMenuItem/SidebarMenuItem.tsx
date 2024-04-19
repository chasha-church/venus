import React, { useState, useContext } from 'react'
import { useAppSelector } from '../../../../redux/hooks/hooks';

import styled from 'styled-components';

import { MenuItemType, selectActiveItemId, sidebarReducer } from '../../../../redux/features/sidebarSlice';
import { SidebarMenuItemSubmenu } from './SidebarMenuItemSubmenu/SidebarMenuItemSubmenu';
import { SubmenuToggleButton } from './SubmenuToggleButton/SubmenuToggleButton';
import { SidebarMenuItemHeader } from './SidebarMenuItemHeader/SidebarMenuItemHeader';
import { SidebarContext } from '../../Sidebar';

const StyledMenuItem = styled.li<{ $isActive: boolean; }>`
    position: relative;
    cursor: pointer;

    &:hover {
        background-color: #C4ECFF;
    }

    background-color: ${props => props.$isActive ? "#C4ECFF" : "#fff"};
`;

type SidebarMenuItemProps = {} & MenuItemType;

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ ...menuItem }) => {
    const activeItemId = useAppSelector(selectActiveItemId);
    const isActive = menuItem.id === activeItemId;

    const { sidebarExpanded } = useContext(SidebarContext);

    // State for hover caption
    const [hoverCaptionVisible, toggleHoverCaptionVisibility] = useState<boolean>(false);
    const handleHover = () => {
        if (!sidebarExpanded) toggleHoverCaptionVisibility(!hoverCaptionVisible);
    }

    /* TODO: Fix unwanted renders */
    return (
        <StyledMenuItem
            $isActive={isActive}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <SidebarMenuItemHeader
                isActive={isActive}
                id={menuItem.id}
                name={menuItem.name}
                hoverCaptionVisible={hoverCaptionVisible}
            />

            <SidebarMenuItemSubmenu
                id={menuItem.id}
                submenu={menuItem.submenu}
                submenuExpanded={menuItem.submenuExpanded}
            />

            <SubmenuToggleButton
                id={menuItem.id}
                submenu={menuItem.submenu}
                submenuExpanded={menuItem.submenuExpanded}
            />

        </StyledMenuItem>
    );
}
