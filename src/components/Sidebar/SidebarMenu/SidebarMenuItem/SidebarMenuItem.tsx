import React from 'react'

import { MenuItemType } from '../../../../redux/features/sidebarSlice';
import styled from 'styled-components';
import { SidebarMenuItemSubmenu } from './SidebarMenuItemSubmenu/SidebarMenuItemSubmenu';
import { SubmenuToggleButton } from '../../MenuItems/MenuItem/SubmenuToggleButton/SubmenuToggleButton';
import { SubmenuItem } from '../../MenuItems/MenuItem/MenuItemSubmenu/SubmenuItem/SubmenuItem';

const StyledMenuItem = styled.li<{ $sidebarExpanded: boolean }>`
    margin: 0.75em 0;
    
    display: grid;
    gap: ${props => props.$sidebarExpanded ? "0.5em 1em" : "0.5em 0em"};
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "image name" ". submenu";
    align-items: center;

    transition: gap 500ms;
`;


const StyledIcon = styled.div`
    grid-area: "image";

    img {
        width: 2.5em;
    }
`

const StyledRight = styled.div`
    grid-area: "name";
    display: flex;
    justify-content: space-between;
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
    grid-area: "submenu"; 
`

type SidebarMenuItemProps = {
    sidebarExpanded: boolean;
    isActive: boolean;
} & MenuItemType;

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ sidebarExpanded, isActive, ...menuItem }) => {
    const MenuItemStyles = `
        relative hover:bg-sidebar-blue-transparrent hover:text-black text-gray-600
        ${isActive && "bg-sidebar-blue-transparrent text-black"}
    `;
    return (
        <StyledMenuItem $sidebarExpanded={sidebarExpanded}>

            <StyledIcon>
                <img src={menuItem.icon} alt={menuItem.name} />
            </StyledIcon>

            <StyledRight>
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

            {/* Mock element for grid-areas to work: */}
            <div></div>

            <StyledSubmenu>
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
