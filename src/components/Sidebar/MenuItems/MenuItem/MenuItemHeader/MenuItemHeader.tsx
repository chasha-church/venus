import React from 'react'
import { ActiveItemStripe } from './ActiveItemStripe/ActiveItemStripe';
import { SubmenuToggleButton } from '../SubmenuToggleButton/SubmenuToggleButton';
import { HoverCaption } from './HoverCaption/HoverCaption';
import { useAppDispatch } from '../../../../../redux/hooks/hooks';
import { SubmenuExpandedType, SubmenuType, setActiveItem } from '../../../../../redux/slices/sidebarSlice';

type MenuItemHeaderProps = {
    id: number;
    icon: string;
    name: string;
    expanded: boolean;
    submenuExpanded: SubmenuExpandedType;
    submenu: SubmenuType;
    isActive?: boolean;
}

export const MenuItemHeader: React.FC<MenuItemHeaderProps> = ({ id, icon, name, expanded, submenuExpanded, submenu, isActive = false }) => {
    const MenuItemHeaderStyles = `
        relative px-2 py-3
        font-medium cursor-pointer transition-colors group
    `;

    const dispatch = useAppDispatch();
    const setActiveMenuItem = () => {
        dispatch(setActiveItem(id))
    }

    return (
        <div className={MenuItemHeaderStyles} onClick={setActiveMenuItem}>
            <ActiveItemStripe isActive={isActive} />
            <div className="flex justify-between items-center pl-2.5">
                <div className={`flex items-center h-12`}>
                    <img src={icon} className="w-10 " alt="Menu-icon" />
                    <span className={`
                        text-base font-semibold ml-4 overflow-hidden transition-all flex items-center   
                        ${expanded ? "h-full w-44" : "h-0 w-0"}
                    `}>{name}</span>
                </div>
            </div>
            <HoverCaption caption={name} expanded={expanded} />
        </div>
    );
}
