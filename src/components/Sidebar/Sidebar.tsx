import React, { useState, createContext } from 'react';

import { SidebarFooter } from './SidebarFooter/SidebarFooter';
import { SidebarHeader } from './SidebarHeader/SidebarHeader';
import { SidebarMenu } from './SidebarMenu/SidebarMenu';

import styled from 'styled-components';

const StyledSidebar = styled.aside<{ $sidebarExpanded: boolean }>`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 10;

    background-color: ${({ theme }) => theme.colors.primary};
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
                $sidebarExpanded={expanded}
            >
                <SidebarHeader />
                <SidebarMenu />
                <SidebarFooter />
            </StyledSidebar>
        </SidebarContext.Provider>
    );
};
