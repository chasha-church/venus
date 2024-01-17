import React, { ReactNode } from 'react'
import { MenuItem } from './MenuItem/MenuItem';
import { useAppSelector } from '../../../redux/hooks/hooks';
import { selectActiveItemId, selectMenuItems } from '../../../redux/slices/sidebarSlice';

type MenuItemsProps = {
    expanded: boolean;
}

export const MenuItems: React.FC<MenuItemsProps> = ({ expanded }) => {

    const menuItems = useAppSelector(selectMenuItems);
    const activeItemId = useAppSelector(selectActiveItemId);

    const createMenuItems = (): Array<ReactNode> => {
        return menuItems.map(
            menuItem => <MenuItem
                            key={menuItem.id}
                            id={menuItem.id}
                            name={menuItem.name}
                            icon={menuItem.icon}
                            submenu={menuItem.submenu}
                            submenuExpanded={menuItem.submenuExpanded}
                            expanded={expanded}
                            isActive={menuItem.id === activeItemId}
                        />
        )
    }

    return (
        <ul className="flex-1 mt-5 mb-3">
            {createMenuItems()}
        </ul>
    );
    
}