import React from 'react'

import { MenuItemType } from '../../../../redux/features/sidebarSlice';
import styled from 'styled-components';
import { SidebarMenuItemSubmenu } from './SidebarMenuItemSubmenu/SidebarMenuItemSubmenu';

const StyledMenuItem = styled.li<{ $sidebarExpanded: boolean }>`
    /* padding-left: 0.25em; */

    
    display: grid;
    gap: ${props => props.$sidebarExpanded ? "1em 1em" : "1em 0em"};
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "image name" ". submenu";
    align-items: center;
`;

const StyledIcon = styled.div`
    grid-area: "image";

    img {
        width: 2.5em;
        max-width: 100%;
        margin: 0 auto;
    }
`

const StyledName = styled.div<{ $sidebarExpanded: boolean;}>`
    grid-area: "name";

    display: grid;
    grid-template-columns: ${props => props.$sidebarExpanded ? "1fr" : "0fr"};

    transition: grid-template-columns 500ms; 

    span {
        overflow: hidden;
        text-wrap: nowrap;
        font-weight: 600;
    }
`

const StyledSubmenu = styled.ul`
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

            <StyledName $sidebarExpanded={sidebarExpanded} >
                <span>{menuItem.name}</span>
            </StyledName>

            {/* Mock element for grid-areas to work: */} 
            <div></div>

            <StyledSubmenu>
                <SidebarMenuItemSubmenu />
            </StyledSubmenu>

        </StyledMenuItem>
        // <li className={MenuItemStyles}>
        //     {/* <MenuItemHeader icon={icon} name={name} id={id} submenuExpanded={submenuExpanded} expanded={expanded} isActive={isActive} submenu={submenu} /> */}
        //     {/* {submenu && <SubmenuToggleButton id={id} submenuExpanded={submenuExpanded} expanded={expanded} />} */}
        //     {/* {submenu && <MenuItemSubmenu id={id} submenu={submenu} submenuExpanded={submenuExpanded} expanded={expanded} />} */}
        // </li>
    );

}
