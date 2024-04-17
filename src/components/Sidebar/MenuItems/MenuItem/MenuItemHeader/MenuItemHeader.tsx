import React, { ReactNode } from 'react'
import { ActiveItemStripe } from './ActiveItemStripe/ActiveItemStripe';
import { HoverCaption } from './HoverCaption/HoverCaption';
import { useAppDispatch } from '../../../../../redux/hooks/hooks';
import { 
    SubmenuExpandedType,
    SubmenuType,
    setActiveItem
} from '../../../../../redux/features/sidebarSlice';
import {HashLink} from 'react-router-hash-link';

type IconProps = {
    width: number,
    height: number,
    color: string
}

type MenuItemHeaderProps = {
    id: number;
    name: string;
    icon: ReactNode;
    url: string;
    expanded: boolean;
    submenuExpanded: SubmenuExpandedType;
    submenu: SubmenuType;
    isActive?: boolean;
}

export const MenuItemHeader: React.FC<MenuItemHeaderProps> = (
    { id, name, icon, url, expanded, submenuExpanded, submenu, isActive = false }
) => {

    const MenuItemHeaderStyles = `
        relative py-3 font-medium cursor-pointer transition-colors group
    `;

    const dispatch = useAppDispatch();
    const setActiveMenuItem = () => {
        dispatch(setActiveItem(id))
    }

    return (
        <HashLink to={url}>
            <div className={MenuItemHeaderStyles} onClick={setActiveMenuItem}>
                <ActiveItemStripe isActive={isActive}/>
                <div className={`flex ${!expanded && "justify-center"} items-center pl-4`}>
                    {icon}
                    <span className={`
                        text-base font-semibold ml-4 overflow-hidden transition-all 
                        ${expanded ? "h-full w-44" : "h-0 w-0"}
                    `}>{name}</span>
                </div>
                {/* TODO: Fix the caption so it is seen */}
                <HoverCaption caption={name} expanded={expanded}/>
            </div>
        </HashLink>
    );
}
