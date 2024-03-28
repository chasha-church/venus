import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.div`
`;
{/* <div className={`flex items-center pl-4 pt-4 ${sidebarExpanded ? "pr-8" : "pr-4"}`}> */}
// className={`overflow-hidden font-bold text-gray-600 transition-all ${sidebarExpanded ? "ml-2" : "w-0 ml-0"}`}
const StyledHeaderContent = styled.div<{ $sidebarExpanded: boolean }>`
    display: flex;
    justify-items: center;
    align-items: center;

    transition: all 0.5s ease-in-out;

    img {
        cursor: pointer;
        width: 3em;
    }

    span {
        font-weight: bold;

        overflow: hidden;

        margin-left: ${ props => props.$sidebarExpanded ? "0.25em" : "0" };
        width: ${ props => props.$sidebarExpanded ? "auto" : "0" };
    }
`

const ChaliceIcon = './images/ChaliceIcon.png'


interface SidebarHeaderProps extends React.ComponentProps<"div"> {
    sidebarExpanded: boolean,
};


export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ sidebarExpanded, children }) => {
    debugger;

    return (
        <StyledHeader>
            <StyledHeaderContent $sidebarExpanded={sidebarExpanded}>
                <img src={ChaliceIcon} alt="Logo" />
                <span>Неупиваемая Чаша</span>
            </StyledHeaderContent>
            {children}
        </StyledHeader>
    );
};