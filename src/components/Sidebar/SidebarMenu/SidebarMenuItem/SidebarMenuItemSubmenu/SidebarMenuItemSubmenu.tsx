import React, { useContext } from 'react';
import styled from 'styled-components';
import {
    SubmenuExpandedType,
    SubmenuType,
} from '../../../../../redux/features/sidebarSlice';
import { SubmenuItem } from './SubmenuItem/SubmenuItem';
import { StyledSidebarGrid } from '../../../StyledSidebarGrid/StyledSidebarGrid';
import { SidebarContext } from '../../../Sidebar';

const StyledSubmenu = styled.ul``;

const StyledSubmenuGrid = styled(StyledSidebarGrid)<{
    $sidebarExpanded: boolean;
}>`
    padding-top: 0;
    padding-bottom: 0;
`;

type MenuItemSubmenuProps = {
    id: number;
    submenu: SubmenuType;
    submenuExpanded: SubmenuExpandedType;
};

export const SidebarMenuItemSubmenu: React.FC<MenuItemSubmenuProps> = ({
    ...menuItem
}) => {
    const { sidebarExpanded } = useContext(SidebarContext);

    return (
        <StyledSubmenuGrid $sidebarExpanded={sidebarExpanded}>
            {/* Mock element for grid: */}
            <div></div>
            <StyledSubmenu>
                {menuItem.submenu?.map((submenuItem) => (
                    <SubmenuItem
                        key={submenuItem.id}
                        id={menuItem.id}
                        submenuExpanded={menuItem.submenuExpanded}
                        name={submenuItem.name}
                    />
                ))}
            </StyledSubmenu>
        </StyledSubmenuGrid>
    );
};
