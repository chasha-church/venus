import React from 'react'

const ChaliceIcon = './images/ChaliceIcon.png'

type SidebarHeaderProps = {
    expanded: boolean;
    setExpanded: () => void;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ expanded, setExpanded }) => {

    return (
        <div className={`flex items-center pl-4 pt-4 ${expanded ? "pr-8" : "pr-4"}`}>
            <img src={ChaliceIcon} className="w-12 cursor-pointer" alt="Logo" />
            <span
                className={`overflow-hidden font-bold text-gray-600 transition-all ${expanded ? "ml-2" : "w-0 ml-0"}`}>
                Неупиваемая Чаша
            </span>
        </div>
    );
}
