import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.div`
`;

const StyledHeaderContent = styled.div<{ $sidebarExpanded: boolean }>`
    width: 100%;
    
    display: flex;
    justify-items: center;
    align-items: center;

    img {
        cursor: pointer;
        width: 3rem;
    }

    & > div.title {
        /* These properties make the width of title text animate while collapsing! 
        Great solution with grid */
        display: grid;
        grid-template-columns: ${props => props.$sidebarExpanded ? "1fr" : "0fr"};
        transition: grid-template-columns 500ms;
    }

    span {
        overflow: hidden;

        font-weight: bold;
        text-wrap: nowrap;

        transition: margin 500ms;

        margin-left: ${props => props.$sidebarExpanded ? "0.25em" : "0"};
        margin-right: ${props => props.$sidebarExpanded ? "0.5em" : "0"};
    }
`

const ChaliceIcon = './images/ChaliceIcon.png'


interface SidebarHeaderProps extends React.ComponentProps<"div"> {
    sidebarExpanded: boolean,
};


export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ sidebarExpanded, children }) => {
    return (
        <StyledHeader>
            <StyledHeaderContent $sidebarExpanded={sidebarExpanded}>
                <img src={ChaliceIcon} alt="Logo" />
                <div className="title">
                    <span>Неупиваемая Чаша</span>
                </div>
            </StyledHeaderContent>
            {children}
        </StyledHeader>
    );
};