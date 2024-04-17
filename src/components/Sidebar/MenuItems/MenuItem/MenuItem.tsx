import React from 'react'
import { MenuItemHeader } from './MenuItemHeader/MenuItemHeader';
import { MenuItemSubmenu } from './MenuItemSubmenu/MenuItemSubmenu';
import { SubmenuExpandedType, SubmenuType } from '../../../../redux/features/sidebarSlice';
import { SubmenuToggleButton } from '../../SidebarMenu/SidebarMenuItem/SubmenuToggleButton/SubmenuToggleButton';

type MenuItemProps = {
    id: number;
    icon: string;
    name: string;
    expanded: boolean;
    submenu: SubmenuType | null;
    submenuExpanded: SubmenuExpandedType;
    isActive: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ id, icon, name, expanded, submenu, submenuExpanded, isActive }) => {

    const MenuItemStyles = `
        relative hover:bg-sidebar-blue-transparrent hover:text-black text-gray-600
        ${isActive && "bg-sidebar-blue-transparrent text-black"}
    `;

    return (
        <li className={MenuItemStyles}>
            <MenuItemHeader icon={icon} name={name} id={id} submenuExpanded={submenuExpanded} expanded={expanded} isActive={isActive} submenu={submenu} />
            {submenu && <SubmenuToggleButton id={id} submenuExpanded={submenuExpanded} expanded={expanded} />}
            {submenu && <MenuItemSubmenu id={id} submenu={submenu} submenuExpanded={submenuExpanded} expanded={expanded} />}
        </li>
    )
}
