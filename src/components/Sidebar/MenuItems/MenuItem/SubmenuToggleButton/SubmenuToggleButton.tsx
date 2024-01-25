import React from 'react'
import { useAppDispatch } from '../../../../../redux/hooks/hooks';
import { SubmenuExpandedType, setSubmenuExpanded } from '../../../../../redux/slices/sidebarSlice';

import SubmenuToggleIcon from '../src/assets/images/SubmenuToggleIcon.svg';

type SubmenuToggleButtonProps = {
    id: number;
    expanded: boolean;
    submenuExpanded: SubmenuExpandedType;
}

export const SubmenuToggleButton: React.FC<SubmenuToggleButtonProps> = ({ id, expanded, submenuExpanded }) => {
    const dispatch = useAppDispatch();
    const openSubmenu = () => {
        dispatch(setSubmenuExpanded(id))
    }

    return (
        <button className={`absolute top-5 right-0 p-1 bg-transparent ${expanded ? "block" : "hidden"}`} onClick={openSubmenu}>
            <img
                src={SubmenuToggleIcon}
                alt="Submenu-toggle-icon"
                className={`
                    w-5 transition-all duration-300 
                    ${submenuExpanded ? "rotate-180" : "rotate-0"}
                `}
            />
        </button>
    );
}   
