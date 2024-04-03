import React from 'react'
import styled from 'styled-components';

const StyledSubmenu = styled.ul`
`

type MenuItemSubmenuProps = {
    children: React.ReactNode;
}

export const SidebarMenuItemSubmenu: React.FC<MenuItemSubmenuProps> = ({ children }) => {

    return (
        <StyledSubmenu>
            {children}
        </StyledSubmenu>
    );
}
