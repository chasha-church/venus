import React, { useContext } from 'react'
import styled from 'styled-components';
import { ToggleSidebar } from '../ToggleSidebar/ToggleSidebar';
import { StyledSidebarGrid } from '../StyledSidebarGrid';
import { SidebarContext } from '../Sidebar';


const StyledHeaderContent = styled.div`
    position: relative;
`

const StyledIcon = styled.img`
    width: 3em;
`

const StyledTitle = styled.div<{ $sidebarExpanded: boolean }>`
    /* These properties make the width of title text animate while collapsing! 
    Great solution with grid */
    display: grid;
    grid-template-columns: ${props => props.$sidebarExpanded ? "1fr" : "0fr"};
    transition: grid-template-columns 500ms;
    overflow: hidden;

    span {
        cursor: pointer;
        overflow: hidden;

        font-weight: bold;
        text-wrap: nowrap;

        transition: margin 500ms;
        margin-right: ${props => props.$sidebarExpanded ? "0.5em" : "0"};
    }
`

const ChaliceIcon = './images/ChaliceIcon.png'


type SidebarHeaderProps = { };


export const SidebarHeader: React.FC<SidebarHeaderProps> = ({}) => {

    const { sidebarExpanded } = useContext(SidebarContext);
    
    return (
        <StyledHeaderContent>
            <StyledSidebarGrid>
                <StyledIcon src={ChaliceIcon} alt="Logo" />
                <StyledTitle $sidebarExpanded={sidebarExpanded}>
                    <span>Неупиваемая Чаша</span>
                </StyledTitle>
            </StyledSidebarGrid>
            <ToggleSidebar />
        </StyledHeaderContent>
    );
};