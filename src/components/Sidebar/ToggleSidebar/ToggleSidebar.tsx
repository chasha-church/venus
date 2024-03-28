import React from 'react'
import { SidebarHideIcon } from '../../common/Icons/SidebarHideIcon';
import { SidebarShowIcon } from '../../common/Icons/SidebarShowIcon';

type ToggleSidebarProps = {
    expanded: boolean;
    setExpanded: () => void;
}

export const ToggleSidebar: React.FC<ToggleSidebarProps> = ({ expanded, setExpanded }) => {

    return (
        <button onClick={setExpanded} className="absolute z-10 -right-3 top-8 rounded-lg bg-transparent">
            {
                expanded
                    ? <SidebarHideIcon />
                    : <SidebarShowIcon />
            }
        </button>
    )
}
