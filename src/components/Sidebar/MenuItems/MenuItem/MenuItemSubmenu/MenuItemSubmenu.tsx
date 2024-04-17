import React from 'react'
import { SubmenuItem } from './SubmenuItem/SubmenuItem';
import { SubmenuExpandedType, SubmenuType } from '../../../../../redux/features/sidebarSlice';

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
            url={submenuItem.url}
            submenuExpanded={submenuExpanded}
            expanded={expanded}
        />
    );

    return (
        <ul className={`pl-16 pr-4 ${!expanded && "w-0 h-0"} `}>{submenuItems}</ul>
    );
}
