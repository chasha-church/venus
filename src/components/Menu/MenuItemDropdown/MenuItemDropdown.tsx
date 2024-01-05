import React, { useContext } from 'react'

import styles from './MenuItemDropdown.module.css'

import SubmenuToggleIcon from '../../../assets/images/SubmenuToggleIcon.svg';
import { MenuContext } from '../Menu';

type MenuItemDropdownProps = {
    icon: string;
    text: string;
    isActive: boolean;
    children?: React.ReactNode;
}

export const MenuItemDropdown: React.FC<MenuItemDropdownProps> = ({ icon, text, isActive, children = "" }) => {
    const expanded = useContext(MenuContext);

    return (
        <li className={`
            relative px-2 py-3
            font-medium rounded-md cursor-pointer transition-colors group
            ${isActive
                ? "bg-sidebar-blue-transparrent text-black"
                : "hover:bg-sidebar-blue-transparrent hover:text-black text-gray-600"
            }
        `}>
            {isActive && <div className="h-full absolute -left-2.5 top-0 w-1.5 bg-sidebar-blue"></div>}
            <div className="flex items-center pl-2.5">
                <img src={icon} className="w-10 " alt="Menu-icon" />
                <div className={`
                    flex justify-between overflow-hidden transition-all
                    ${expanded ? "w-52" : "w-0"}
                `}>
                    <span className="text-base font-semibold ml-4">{text}</span>
                    <button>
                        <img src={SubmenuToggleIcon} className="w-5" alt="Submenu-toggle-icon" />
                    </button>
                </div>
                {!expanded && <div className={`
                    absolute left-full rounded-md px-2 py-1 ml-3 bg-sidebar-blue-transparrent
                    invisible opacity-20 -translate-x-3 transition-all text-black cursor-default
                    group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                `}>{text}</div>}
            </div>
            {/* <div>
                {children}
            </div> */}
        </li>
    )
}
