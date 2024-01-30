import React from 'react'

import { MenuItems } from './MenuItems/MenuItems'
import { SidebarFooter } from './SidebarFooter/SidebarFooter'
import { SidebarHeader } from './SidebarHeader/SidebarHeader';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { selectSidebarExpanded, setSidebarExpanded } from '../../redux/features/sidebarSlice';


type SidebarProps = {};

export const Sidebar: React.FC<SidebarProps> = ({ }) => {

    const dispatch = useAppDispatch();
    const sidebarExpanded = useAppSelector(selectSidebarExpanded);
    const setExpanded = () => {
        dispatch(setSidebarExpanded(sidebarExpanded));
    }

    return (
        <aside className={`fixed top-0 l-0 transition-all z-10`}>
            <nav className={`h-screen inline-flex flex-col bg-white border-r shadow-sm`}>
                <SidebarHeader expanded={sidebarExpanded} setExpanded={setExpanded} />
                <MenuItems expanded={sidebarExpanded} />
                <SidebarFooter expanded={sidebarExpanded} />
            </nav>
        </aside>
    )
}
