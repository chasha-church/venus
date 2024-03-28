import { SiderContext } from 'antd/es/layout/Sider';
import React, { useContext } from 'react'
import styled from 'styled-components';

const StyledFooter = styled.div<{ $sidebarExpanded: boolean }>`
    /* overflow: hidden; */
    display: ${props => props.$sidebarExpanded ? "block" : "none"};
    border-top: 1px solid #e5e7eb;

    padding: 1em;

    span:first-child::before {
        content: "",
        position: absolute;
    }

    span:first-child {
        display: block;
        text-align: center;

        font-weight: 600;
    }
`;

interface SidebarFooterProps extends React.ComponentProps<"div"> {
    sidebarExpanded: boolean,
};

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ sidebarExpanded, children }) => {
    return (
        <StyledFooter $sidebarExpanded={sidebarExpanded}>
            <span>Неупиваемая Чаша, 2024</span>
            {children}
        </StyledFooter>
    );
};
