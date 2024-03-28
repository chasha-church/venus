import React from 'react'
import { useAppDispatch } from '../../../../../redux/hooks/hooks';
import { 
    SubmenuExpandedType,
    setSubmenuExpanded
} from '../../../../../redux/features/sidebarSlice';
import { SubmenuToggleIcon } from '../../../../common/Icons/SubmenuToggleIcon';

type SubmenuToggleButtonProps = {
    id: number;
    expanded: boolean;
    submenuExpanded: SubmenuExpandedType;
}

export const SubmenuToggleButton: React.FC<SubmenuToggleButtonProps> = (
    { id, expanded, submenuExpanded }
) => {
    const dispatch = useAppDispatch();
    const openSubmenu = () => {
        dispatch(setSubmenuExpanded(id))
    }

    return (
        <button 
            className={
                `absolute top-4 right-0 p-1 bg-transparent
                ${expanded ? "block" : "hidden"}
                ${submenuExpanded ? "rotate-180" : "rotate-0"}`
            }
            onClick={openSubmenu}
        >
            <SubmenuToggleIcon />
        </button>
    );
}   
