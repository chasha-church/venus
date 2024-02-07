import React from 'react'

import SidebarHideIcon from '../../../assets/images/SidebarHideIcon.svg'
import SidebarShowIcon from '../../../assets/images/SidebarShowIcon.svg'

type ToggleSidebarProps = {
    expanded: boolean;
    setExpanded: () => void;
}

export const ToggleSidebar: React.FC<ToggleSidebarProps> = ({ expanded, setExpanded }) => {

    return (
        <button onClick={setExpanded} className="absolute z-10 -right-3 top-8 rounded-lg bg-transparent">
            <img src={expanded ? SidebarHideIcon : SidebarShowIcon} className="w-8" alt="Toggle-icon" />
        </button>
    )
}