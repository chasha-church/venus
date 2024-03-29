import React from 'react'
import { MenuItem } from './MenuItem/MenuItem';
import { useAppSelector } from '../../../redux/hooks/hooks';
import { selectActiveItemId, selectMenuItems } from '../../../redux/features/sidebarSlice';

type MenuItemsProps = {
    expanded: boolean;
}

export const MenuItems: React.FC<MenuItemsProps> = ({ expanded }) => {

    const menuItems = useAppSelector(selectMenuItems);
    const activeItemId = useAppSelector(selectActiveItemId);

    const menuItemsMap = menuItems.map(menuItem =>
        <MenuItem
            key={menuItem.id}
            id={menuItem.id}
            name={menuItem.name}
            icon={menuItem.icon}
            submenu={menuItem.submenu}
            submenuExpanded={menuItem.submenuExpanded}
            expanded={expanded}
            isActive={menuItem.id === activeItemId}
        />
    );

    return (
        <ul className="flex-col mt-7">{menuItemsMap}</ul>
    );

}
