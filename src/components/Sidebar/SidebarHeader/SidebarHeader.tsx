import React, { Dispatch, SetStateAction } from 'react'

import ChaliceIcon from '../../../assets/images/ChaliceIcon.png'
import { ToggleSidebar } from './ToggleSidebar/ToggleSidebar';

type SidebarHeaderProps = {
    expanded: boolean;
    setExpanded: () => void;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ expanded, setExpanded }) => {

    return (
        <div className="relative p-4 pb-2 flex items-center">
            <img src={ChaliceIcon} className="w-12 cursor-pointer" alt="Logo" />
            <span
                className={`overflow-hidden font-bold text-gray-600 transition-all ${expanded ? "ml-2" : "w-0 ml-0"}`}>
                Неупиваемая Чаша
            </span>
            <ToggleSidebar expanded={expanded} setExpanded={setExpanded} />
        </div>
    );
}