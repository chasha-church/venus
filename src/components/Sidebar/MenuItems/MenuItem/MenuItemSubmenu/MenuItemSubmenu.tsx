import React from 'react'
import { SubmenuItem } from './SubmenuItem/SubmenuItem';
import { SubmenuExpandedType, SubmenuType } from '../../../../../redux/slices/sidebarSlice';

type MenuItemSubmenuProps = {
    id: number;
    submenu: SubmenuType;
    submenuExpanded: SubmenuExpandedType;
    expanded: boolean;
}

export const MenuItemSubmenu: React.FC<MenuItemSubmenuProps> = ({ id, submenu, submenuExpanded, expanded }) => {
    const submenuItems = submenu?.map(submenuItem =>
        <SubmenuItem
            id={id}
            key={submenuItem.id}
            name={submenuItem.name}
            submenuExpanded={submenuExpanded}
            expanded={expanded}
        />
    );

    return (
        <ul className={`transition-all overflow-hidden ${expanded ? "h-auto" : "w-0 h-0"}`}>{submenuItems}</ul>
    );
}