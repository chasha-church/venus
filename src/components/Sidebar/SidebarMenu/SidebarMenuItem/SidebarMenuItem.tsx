import React from 'react'

import { MenuItemType } from '../../../../redux/features/sidebarSlice';
import styled from 'styled-components';
import { SidebarMenuItemSubmenu } from './SidebarMenuItemSubmenu/SidebarMenuItemSubmenu';
import { SubmenuToggleButton } from '../../MenuItems/MenuItem/SubmenuToggleButton/SubmenuToggleButton';
import { SubmenuItem } from '../../MenuItems/MenuItem/MenuItemSubmenu/SubmenuItem/SubmenuItem';

const StyledMenuItem = styled.li`
    padding: 1em;
    background-color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #C4ECFF;
    }
`;

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
`

const StyledIcon = styled.div`
    width: 3em;
    text-align: center;

    img {
        width: 2.5em;
        display: inline-block;
    }
`

const StyledRight = styled.div<{ $sidebarExpanded: boolean }>`
    display: flex;
    margin-left: ${props => props.$sidebarExpanded ? "0.5em" : "0"};
    transition: margin 500ms;
`

const StyledName = styled.div<{ $sidebarExpanded: boolean; }>`

    display: grid;
    grid-template-columns: ${props => props.$sidebarExpanded ? "1fr" : "0fr"};

    transition: grid-template-columns 500ms; 

    span {
        overflow: hidden;
        text-wrap: nowrap;
        font-weight: 600;
    }
`

const StyledSubmenu = styled.div`
    display: flex;
    div {
        width: 3em;
    }
`

type SidebarMenuItemProps = {
    sidebarExpanded: boolean;
    isActive: boolean;
} & MenuItemType;

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ sidebarExpanded, isActive, ...menuItem }) => {

    return (
        <StyledMenuItem>

            <StyledHeader>
                <StyledIcon>
                    <img src={menuItem.icon} alt={menuItem.name} />
                </StyledIcon>

                <StyledRight $sidebarExpanded={sidebarExpanded}>
                    <StyledName $sidebarExpanded={sidebarExpanded} >
                        <span>{menuItem.name}</span>
                    </StyledName>
                    <SubmenuToggleButton
                        id={menuItem.id}
                        submenu={menuItem.submenu}
                        submenuExpanded={menuItem.submenuExpanded}
                        sidebarExpanded={sidebarExpanded}
                    />
                </StyledRight>
            </StyledHeader>

            <StyledSubmenu>
                {/* Mock element for padding: */}
                <div></div>
                <SidebarMenuItemSubmenu>
                    {menuItem.submenu?.map(submenuItem =>
                        <SubmenuItem
                            key={submenuItem.id}
                            id={menuItem.id}
                            submenuExpanded={menuItem.submenuExpanded}
                            name={submenuItem.name}
                            sidebarExpanded={sidebarExpanded}
                        />
                    )}
                </SidebarMenuItemSubmenu>
            </StyledSubmenu>

        </StyledMenuItem>
    );

}
