import React, { useState, createContext } from 'react'

import { SidebarFooter } from './SidebarFooter/SidebarFooter'
import { SidebarHeader } from './SidebarHeader/SidebarHeader';

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

    background-color: #fff;
    color: rgb(75 85 99);

    border-right: 1px solid #e5e7eb;

    display: flex;
    flex-direction: column;
`

type SidebarProps = {};


/* 
    ---
    1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + 1 hours of ticket work
    --- 
*/

export const SidebarContext = createContext({ sidebarExpanded: false, setSidebarExpanded: () => { } });

export const Sidebar: React.FC<SidebarProps> = ({ }) => {

    const [expanded, setExpanded] = useState<boolean>(false);

    const setSidebarExpanded = () => {
        setExpanded(!expanded);
    }

    return (
        <SidebarContext.Provider value={{ sidebarExpanded: expanded, setSidebarExpanded }}>
            <StyledSidebar>
                <SidebarHeader />
                <SidebarMenu />
                <SidebarFooter />
            </StyledSidebar >
        </SidebarContext.Provider>
    )
}
