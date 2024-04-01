import React from 'react'
import styled from 'styled-components';
import { ToggleSidebar } from '../ToggleSidebar/ToggleSidebar';

const StyledHeader = styled.div`
`;

const StyledHeaderContent = styled.div<{ $sidebarExpanded: boolean }>`
    position: relative;
    
    display: flex;
    align-items: center;

    padding: 1em;
`

const StyledIcon = styled.div`
    width: 3em;
    text-align: center;

    img {
        cursor: pointer;
        display: inline-block;
    }
`

const StyledTitle = styled.div<{ $sidebarExpanded: boolean }>`
    /* These properties make the width of title text animate while collapsing! 
    Great solution with grid */
    display: grid;
    grid-template-columns: ${props => props.$sidebarExpanded ? "1fr" : "0fr"};
    transition: grid-template-columns 500ms;

    span {
        cursor: pointer;
        overflow: hidden;

        font-weight: bold;
        text-wrap: nowrap;

        transition: margin 500ms;

        margin-left: ${props => props.$sidebarExpanded ? "0.5em" : "0"};
        margin-right: ${props => props.$sidebarExpanded ? "1em" : "0"};
    }
`

const ChaliceIcon = './images/ChaliceIcon.png'


interface SidebarHeaderProps extends React.ComponentProps<"div"> {
    sidebarExpanded: boolean,
    setExpanded: () => void;
};


export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ sidebarExpanded, setExpanded }) => {
    return (
        <StyledHeader>
            <StyledHeaderContent $sidebarExpanded={sidebarExpanded}>
                <StyledIcon>
                    <img src={ChaliceIcon} alt="Logo" />
                </StyledIcon>
                <StyledTitle $sidebarExpanded={sidebarExpanded}>
                    <span>Неупиваемая Чаша</span>
                </StyledTitle>
                <ToggleSidebar sidebarExpanded={sidebarExpanded} setExpanded={setExpanded} />
            </StyledHeaderContent>
        </StyledHeader>
    );
};