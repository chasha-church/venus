import React from 'react'

type MenuItemSubmenuProps = {
    children: React.ReactNode;
}

export const SidebarMenuItemSubmenu: React.FC<MenuItemSubmenuProps> = ({ children }) => {

    return (
        <>
            {children}
        </>
    );
}
