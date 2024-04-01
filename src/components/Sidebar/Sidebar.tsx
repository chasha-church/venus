import React, { createContext } from 'react'

import { SidebarFooter } from './SidebarFooter/SidebarFooter'
import { SidebarHeader } from './SidebarHeader/SidebarHeader';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { selectSidebarExpanded, setSidebarExpanded } from '../../redux/features/sidebarSlice';
import { ToggleSidebar } from './ToggleSidebar/ToggleSidebar';
import styled from 'styled-components';
import { SidebarMenu } from './SidebarMenu/SidebarMenu';

const StyledSidebar = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    /* SVH is a new CSS unit and not all browsers use it yet */
    height: 100vh;
    height: 100svh;


    background-color: lightgreen;
    background-color: #fff;
    color: rgb(75 85 99);

    border-right: 1px solid #e5e7eb;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

type SidebarProps = {};

// export const SidebarContext = createContext({ sidebarExpanded: false, setExpanded: () => { } });

/* 
    ---
    1 + 1 + 1 + 1 + 1 + 1 hours of ticket work
    --- 
*/

export const Sidebar: React.FC<SidebarProps> = ({ }) => {

    const dispatch = useAppDispatch();
    const sidebarExpanded = useAppSelector(selectSidebarExpanded);
    const setExpanded = () => {
        dispatch(setSidebarExpanded(sidebarExpanded));
    }

    return (
        <StyledSidebar>
            {/* <SidebarContext.Provider value={{ sidebarExpanded, setExpanded }}> */}
            <div>
                <SidebarHeader sidebarExpanded={sidebarExpanded} setExpanded={setExpanded} />
                <SidebarMenu sidebarExpanded={sidebarExpanded} />
            </div>
            <SidebarFooter sidebarExpanded={sidebarExpanded} />
            {/* </SidebarContext.Provider> */}
        </StyledSidebar >
    )
}
