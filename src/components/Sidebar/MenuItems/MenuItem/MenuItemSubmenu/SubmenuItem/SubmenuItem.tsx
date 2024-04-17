import React from 'react'
import {SubmenuExpandedType, setActiveItem} from '../../../../../../redux/features/sidebarSlice';
import {useAppDispatch} from '../../../../../../redux/hooks/hooks';
import {Link} from "react-router-dom";


type SubmenuItemProps = {
    id: number;
    name: string;
    url: string;
    submenuExpanded: SubmenuExpandedType;
    expanded: boolean;
}

export const SubmenuItem: React.FC<SubmenuItemProps> = ({id, name, url, expanded, submenuExpanded}) => {

    const dispatch = useAppDispatch();
    const setActiveMenuItem = () => {
        dispatch(setActiveItem(id))
    }

    return (
        <Link to={url}>
            <li onClick={setActiveMenuItem} className={`
            cursor-pointer text-sm overflow-hidden transition-all max-w-48
            ${submenuExpanded ? "h-auto pt-2 pb-3" : "h-0 py-0"}
            `}>
                {name}
            </li>
        </Link>
    )
}
