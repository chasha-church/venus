import React from 'react'
import { ChashaIcon } from '../../common/Icons/ChashaIcon';

type SidebarHeaderProps = {
    expanded: boolean;
    setExpanded: () => void;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ expanded }) => {

    return (
        <div className={`flex items-center ${expanded ? "" : "justify-center"}`}>
            <ChashaIcon width={68} height={92} />
            <span
                className={`overflow-hidden font-bold text-gray-600 transition-all mt-2 ${expanded ? "" : "w-0 ml-0"}`}>
                Неупиваемая Чаша
            </span>
        </div>
    );
}
