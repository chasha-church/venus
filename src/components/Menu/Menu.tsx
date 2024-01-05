import React, { useState, createContext } from 'react'

import styles from './Menu.module.css'

import ChaliceIcon from '../../assets/images/ChaliceIcon.png'
import SidebarHideIcon from '../../assets/images/SidebarHideIcon.svg'
import SidebarShowIcon from '../../assets/images/SidebarShowIcon.svg'

type MenuProps = {
    children: React.ReactNode;
}

export const MenuContext = createContext(true);

export const Menu: React.FC<MenuProps> = ({ children }) => {

    const [expanded, setExpanded] = useState(true);

    return (
        <aside className={`h-screen transition-all`}>
            <nav className="h-full inline-flex flex-col bg-white border-r shadow-sm">

                <div className="relative p-4 pb-2 flex items-center">
                    <img src={ChaliceIcon} className="w-12 cursor-pointer" alt="Logo" />
                    <span
                        className={`overflow-hidden font-bold text-gray-600 transition-all ${expanded ? "w-auto ml-2" : "w-0 ml-0"}`}>
                        Неупиваемая Чаша
                    </span>
                    <button onClick={() => setExpanded(!expanded)} className="absolute -right-4 rounded-lg">
                        <img src={expanded ? SidebarHideIcon : SidebarShowIcon} className="w-8" alt="Toggle-icon" />
                    </button>
                </div>

                <MenuContext.Provider value={expanded}>
                    <ul className="flex-1 my-5">{children}</ul>
                </MenuContext.Provider>

                <div className={`transition-all border-t flex p-4 ${expanded ? "block" : "hidden"}`}>
                    <span className="font-semibold text-gray-600">Неупиваемая Чаша, 2024</span>
                </div>

            </nav>
        </aside>
    )
}
