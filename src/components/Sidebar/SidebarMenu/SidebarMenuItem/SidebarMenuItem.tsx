import React, { useState, useContext } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks';

import styled from 'styled-components';

import { MenuItemType, selectActiveItemId } from '../../../../redux/features/sidebarSlice';
import { SidebarMenuItemSubmenu } from './SidebarMenuItemSubmenu/SidebarMenuItemSubmenu';
import { SubmenuToggleButton } from './SubmenuToggleButton/SubmenuToggleButton';
import { SidebarMenuItemHeader } from './SidebarMenuItemHeader/SidebarMenuItemHeader';

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

    const [hoverCaptionVisible, toggleHoverCaptionVisibility] = useState<boolean>(false);
    const handleHover = () => {
        toggleHoverCaptionVisibility(!hoverCaptionVisible);
    }

    return (
        <StyledMenuItem
            $isActive={isActive}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <SidebarMenuItemHeader
                isActive={isActive}
                id={menuItem.id}
                icon={menuItem.icon}
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
