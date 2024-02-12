import React from 'react'
import { SubmenuExpandedType, setActiveItem } from '../../../../../../redux/features/sidebarSlice';
import { useAppDispatch } from '../../../../../../redux/hooks/hooks';



type SubmenuItemProps = {
    id: number;
    name: string;
    submenuExpanded: SubmenuExpandedType;
    expanded: boolean;
}

export const SubmenuItem: React.FC<SubmenuItemProps> = ({ id, name, expanded, submenuExpanded }) => {

    const dispatch = useAppDispatch();
    const setActiveMenuItem = () => {
        dispatch(setActiveItem(id))
    }

    return (
        <li onClick={setActiveMenuItem} className={`
            cursor-pointer text-sm overflow-hidden transition-all max-w-48
            ${submenuExpanded ? "h-auto pt-2 pb-3" : "h-0 py-0"}
        `}>{name}</li>
    )
}
