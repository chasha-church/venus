import React, { useState, createContext } from 'react';

import { SidebarFooter } from './SidebarFooter/SidebarFooter';
import { SidebarHeader } from './SidebarHeader/SidebarHeader';
import { SidebarMenu } from './SidebarMenu/SidebarMenu';

import styled from 'styled-components';

const StyledSidebar = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    /* SVH is a new CSS unit and not all browsers use it yet */
    height: 100svh;
    height: 100vh;

    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.lightGrayText};

    border-right: 1px solid ${({ theme }) => theme.colors.lightGrayBorder};

    display: flex;
    flex-direction: column;
`;

export const SidebarContext = createContext({
    sidebarExpanded: false,
    toggleSidebarExpanded: () => {},
});

type SidebarProps = {};

export const Sidebar: React.FC<SidebarProps> = ({}) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const toggleSidebarExpanded = () => {
        setExpanded(!expanded);
    };

    const openSidebar = () => {
        setExpanded(true);
    };
    const closeSidebar = () => {
        setExpanded(false);
    };

    return (
        <SidebarContext.Provider
            value={{ sidebarExpanded: expanded, toggleSidebarExpanded }}
        >
            <StyledSidebar
                onMouseEnter={openSidebar}
                onMouseLeave={closeSidebar}
            >
                <SidebarHeader />
                <SidebarMenu />
                <SidebarFooter />
            </StyledSidebar>
        </SidebarContext.Provider>
    );
};
