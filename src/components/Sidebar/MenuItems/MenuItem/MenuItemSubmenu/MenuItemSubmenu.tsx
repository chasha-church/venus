import React, { ReactNode } from 'react'
import { SubmenuItem } from './SubmenuItem/SubmenuItem';
import { SubmenuExpandedType, SubmenuType } from '../../../../../redux/slices/sidebarSlice';
import { useAppSelector } from '../../../../../redux/hooks/hooks';

type MenuItemSubmenuProps = {
    id: number;
    submenu: SubmenuType;
    submenuExpanded: SubmenuExpandedType;
    expanded: boolean;
}

type ReturnTypeCreateSubmenu = Array<ReactNode> | null;

export const MenuItemSubmenu: React.FC<MenuItemSubmenuProps> = ({ id, submenu, submenuExpanded, expanded }) => {

    const createSubmenu = (): ReturnTypeCreateSubmenu => {
        if (submenu) {
            return submenu.map(submenuItem =>
                <SubmenuItem
                    id={id}
                    key={submenuItem.id}
                    name={submenuItem.name}
                    submenuExpanded={submenuExpanded}
                    expanded={expanded}
                />
            )
        }
        else return null;
    }

    return (
        <ul className={`transition-all overflow-hidden ${expanded ? "h-auto" : "w-0 h-0"}`}>
            {createSubmenu()}
        </ul>
    );
}