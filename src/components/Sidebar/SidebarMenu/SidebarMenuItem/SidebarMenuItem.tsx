import React, { useState, useContext } from 'react';
import { useAppSelector } from '../../../../redux/hooks/hooks';

import styled from 'styled-components';

import {
    MenuItemType,
    selectActiveItemId,
} from '../../../../redux/features/sidebarSlice';
import { SidebarMenuItemSubmenu } from './SidebarMenuItemSubmenu/SidebarMenuItemSubmenu';
import { SubmenuToggleButton } from './SubmenuToggleButton/SubmenuToggleButton';
import { SidebarMenuItemHeader } from './SidebarMenuItemHeader/SidebarMenuItemHeader';
import { SidebarContext } from '../../Sidebar';

const StyledMenuItem = styled.li<{ $isActive: boolean }>`
    position: relative;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.colors.lightPrimary};
    }

    background-color: ${(props) =>
        props.$isActive
            ? props.theme.colors.lightPrimary
            : props.theme.colors.background};
`;

type SidebarMenuItemProps = {} & MenuItemType;

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
    ...menuItem
}) => {
    const activeItemId = useAppSelector(selectActiveItemId);
    const isActive = menuItem.id === activeItemId;

    /* TODO: Fix unwanted renders */
    return (
        <StyledMenuItem $isActive={isActive}>
            <SidebarMenuItemHeader
                isActive={isActive}
                id={menuItem.id}
                url={menuItem.url}
                name={menuItem.name}
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
};
