import React, { useContext } from 'react'
import styled, { DefaultTheme } from 'styled-components';
import { SidebarContext } from '../Sidebar';
import { defaultTheme } from '../../../styles/Theme';


const StyledFooter = styled.div<{ $sidebarExpanded: boolean }>`
    margin-top: auto;
    border-top: ${props => props.$sidebarExpanded ? `1px solid ${props.theme.colors.lightGrayBorder}` : "none"};
    
    /* These properties make the width of footer text animate while collapsing! 
    Great solution with grid: */
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

type SidebarFooterProps = {};

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ }) => {

    const { sidebarExpanded } = useContext(SidebarContext);
    const currentYear = new Date().getFullYear();
    
    return (
        <StyledFooter $sidebarExpanded={sidebarExpanded}>
            <span>Неупиваемая Чаша, {currentYear}</span>
        </StyledFooter>
    );
}
