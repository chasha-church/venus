import React, { createContext } from 'react'

import { MenuItems } from './MenuItems/MenuItems'
import { SidebarFooter } from './SidebarFooter/SidebarFooter'
import { SidebarHeader } from './SidebarHeader/SidebarHeader';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { selectSidebarExpanded, setSidebarExpanded } from '../../redux/features/sidebarSlice';
import { ToggleSidebar } from './ToggleSidebar/ToggleSidebar';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    /* SVH is a new CSS unit and not all browsers use it yet */
    height: 100vh;
    height: 100svh;

    padding: 1em;

    background-color: lightgreen;
    background-color: #fff;
    color: rgb(75 85 99);

    border-right: 1px solid #e5e7eb;

    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
`

type SidebarProps = {};

// export const SidebarContext = createContext({ sidebarExpanded: false, setExpanded: () => { } });

export const Sidebar: React.FC<SidebarProps> = ({ }) => {

    const dispatch = useAppDispatch();
    const sidebarExpanded = useAppSelector(selectSidebarExpanded);
    const setExpanded = () => {
        dispatch(setSidebarExpanded(sidebarExpanded));
    }

    return (
        <StyledSidebar>
            {/* <SidebarContext.Provider value={{ sidebarExpanded, setExpanded }}> */}
            <ToggleSidebar sidebarExpanded={sidebarExpanded} setExpanded={setExpanded} />
            {/* <aside className={`fixed top-0 l-0 z-10 flex flex-col justify-between h-screen bg-white border-r`}> */}
            {/* <nav className={`
                overflow-y-scroll overflow-x-hidden
                scrollbar scrollbar-w-1.5 scrollbar-thumb-rounded scrollbar-thumb-scrollThumb scrollbar-track-transparent
            `}>
                    
                    <MenuItems expanded={sidebarExpanded} />
                </nav> */}
            {/* </aside> */}
            <SidebarHeader sidebarExpanded={sidebarExpanded} />

            <SidebarFooter sidebarExpanded={sidebarExpanded} />
            {/* </SidebarContext.Provider> */}
        </StyledSidebar >
    )
}
