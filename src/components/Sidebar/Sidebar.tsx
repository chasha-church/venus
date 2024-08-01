import React, { useState, createContext } from 'react';

import { SidebarFooter } from './SidebarFooter/SidebarFooter';
import { SidebarHeader } from './SidebarHeader/SidebarHeader';
import { SidebarMenu } from './SidebarMenu/SidebarMenu';

import styled from 'styled-components';
import { size, device } from '../../styles/BreakPoints';
import { useScreenSize } from '../../redux/hooks/useScreenSize';
import { useDisableScroll } from '../../redux/hooks/useDisableScroll';

const StyledSidebar = styled.aside<{ $sidebarExpanded: boolean }>`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;

    z-index: 10;

    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.lightGrayText};

    border-right: 1px solid ${({ theme }) => theme.colors.lightGrayBorder};

    display: flex;
    flex-direction: column;

    @media only screen and (${device.sm}) {
        right: 0;
        bottom: ${(props) => (props.$sidebarExpanded ? '0' : 'unset')};
    }
`;

export const SidebarContext = createContext({
    sidebarExpanded: false,
    toggleSidebarExpanded: () => {},
});

type SidebarProps = {};

export const Sidebar: React.FC<SidebarProps> = ({}) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    // Detect the size of device to prevent hover events (Mobile only)
    const screenSize = useScreenSize();
    const isMobileVersion = screenSize.width <= size.sm;

    // Disable scroll when sidebar is expanded (Mobile only)
    useDisableScroll(expanded, isMobileVersion);

    const toggleSidebarExpanded = () => {
        setExpanded(!expanded);
    };

    const openSidebar = () => {
        if (isMobileVersion) return;
        setExpanded(true);
    };
    const closeSidebar = () => {
        if (isMobileVersion) return;
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
