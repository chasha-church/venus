import React from 'react'

import { MenuItems } from './MenuItems/MenuItems'
import { SidebarFooter } from './SidebarFooter/SidebarFooter'
import { SidebarHeader } from './SidebarHeader/SidebarHeader';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { selectSidebarExpanded, setSidebarExpanded } from '../../redux/features/sidebarSlice';
import { ToggleSidebar } from './ToggleSidebar/ToggleSidebar';
import styled from 'styled-components';


type SidebarProps = {};

const StyledAside = styled.aside`
    background: ${({ theme }) => theme.colors.background};
`

export const Sidebar: React.FC<SidebarProps> = ({ }) => {

    const dispatch = useAppDispatch();
    const sidebarExpanded = useAppSelector(selectSidebarExpanded);
    const setExpanded = () => {
        dispatch(setSidebarExpanded(sidebarExpanded));
    }

    return (
        <StyledAside
            className={`fixed top-0 l-0 z-10 flex flex-col justify-between h-screen border-r`}
        >
            <ToggleSidebar expanded={sidebarExpanded} setExpanded={setExpanded} />
            <nav className={`
                overflow-y-scroll overflow-x-hidden
                scrollbar scrollbar-w-1.5 scrollbar-thumb-rounded scrollbar-thumb-scrollThumb scrollbar-track-transparent
            `}>
                <SidebarHeader expanded={sidebarExpanded} setExpanded={setExpanded} />
                <MenuItems expanded={sidebarExpanded} />
            </nav>
            <SidebarFooter expanded={sidebarExpanded} />
        </StyledAside>
    )
}
