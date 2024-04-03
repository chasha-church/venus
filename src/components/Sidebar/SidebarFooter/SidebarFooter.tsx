import { SiderContext } from 'antd/es/layout/Sider';
import React, { useContext } from 'react'
import styled from 'styled-components';

const StyledFooter = styled.div<{ $sidebarExpanded: boolean }>`
    margin-top: auto;
    border-top: ${props => props.$sidebarExpanded ? "1px solid #e5e7eb" : "none"};
    
    /* These properties make the width of footer text animate while collapsing! 
    Great solution with grid */
    display: grid;
    grid-template-columns: ${props => props.$sidebarExpanded ? "1fr" : "0fr"};
    transition: grid-template-columns 500ms;

    padding: 1.5em;

    & > span:first-child {
        overflow: hidden;

        text-wrap: nowrap;
        display: block;
        text-align: center;

        font-weight: 600;
    }
`;

type SidebarFooterProps = {
    sidebarExpanded: boolean,
};

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ sidebarExpanded }) => {
    return (
        <StyledFooter $sidebarExpanded={sidebarExpanded}>
            <span>Неупиваемая Чаша, 2024</span>
        </StyledFooter>
    );
};
