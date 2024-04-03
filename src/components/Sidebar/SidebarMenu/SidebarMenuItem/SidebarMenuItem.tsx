import React, { useState } from 'react'

import { MenuItemType, setActiveItem } from '../../../../redux/features/sidebarSlice';
import styled from 'styled-components';
import { SidebarMenuItemSubmenu } from './SidebarMenuItemSubmenu/SidebarMenuItemSubmenu';
import { SubmenuToggleButton } from '../../MenuItems/MenuItem/SubmenuToggleButton/SubmenuToggleButton';
import { SubmenuItem } from '../../MenuItems/MenuItem/MenuItemSubmenu/SubmenuItem/SubmenuItem';
import { StyledSidebarGrid } from '../../StyledSidebarGrid';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { HoverCaption } from '../../MenuItems/MenuItem/MenuItemHeader/HoverCaption/HoverCaption';

const StyledMenuItem = styled.li<{ $isActive: boolean; }>`
    cursor: pointer;

    &:hover {
        background-color: #C4ECFF;
    }

    background-color: ${props => props.$isActive ? "#C4ECFF" : "#fff"};
`;

const StyledHeader = styled.div`
    position: relative;
`

const StyledActiveStripe = styled.div<{ $isActive: boolean; }>`
    width: 0.5em;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;

    transition: background-color 300ms;
    background-color: ${props => props.$isActive ? "#0075BA" : "transparent"};
`

const StyledIcon = styled.img`
    width: 2.5em;
`

const StyledName = styled.div<{ $sidebarExpanded: boolean; }>`

    display: grid;
    grid-template-columns: ${props => props.$sidebarExpanded ? "1fr" : "0fr"};
    transition: grid-template-columns 500ms; 

    overflow: hidden;

    span {
        overflow: hidden;
        text-wrap: nowrap;
        font-weight: 600;
    }
`

const StyledSubmenuGrid = styled(StyledSidebarGrid) <{ $sidebarExpanded: boolean; }>`
    padding-top: 0;
    padding-bottom: 0;
`

type SidebarMenuItemProps = {
    sidebarExpanded: boolean;
    isActive: boolean;
} & MenuItemType;

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ sidebarExpanded, isActive, ...menuItem }) => {
    const dispatch = useAppDispatch();
    const onSetActiveItem = () => {
        dispatch(setActiveItem(menuItem.id));
    }

    const [hoverCaptionVisible, setHoverCaptionVisible] = useState<boolean>(false);
    const toggleHoverCaption = () => {
        setHoverCaptionVisible(visible => !visible);
    }

    return (
        <StyledMenuItem
            $isActive={isActive}
            onMouseEnter={toggleHoverCaption}
            onMouseLeave={toggleHoverCaption}
        >

            <StyledHeader onClick={onSetActiveItem}>
                <StyledActiveStripe $isActive={isActive} />

                <StyledSidebarGrid>
                    <StyledIcon src={menuItem.icon} alt={menuItem.name} />
                    <StyledName $sidebarExpanded={sidebarExpanded} >
                        <span>{menuItem.name}</span>
                    </StyledName>
                </StyledSidebarGrid>

                <SubmenuToggleButton
                    id={menuItem.id}
                    submenu={menuItem.submenu}
                    submenuExpanded={menuItem.submenuExpanded}
                    sidebarExpanded={sidebarExpanded}
                />

                <HoverCaption
                    caption={menuItem.name}
                    visible={hoverCaptionVisible}
                    sidebarExpanded={sidebarExpanded}
                />
            </StyledHeader>


            <StyledSubmenuGrid $sidebarExpanded={sidebarExpanded}>
                {/* Mock element for grid: */}
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
            </StyledSubmenuGrid>

        </StyledMenuItem>
    );

}
