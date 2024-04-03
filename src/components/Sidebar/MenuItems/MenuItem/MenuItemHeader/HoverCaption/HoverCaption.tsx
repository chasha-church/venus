import React from 'react'
import styled from 'styled-components';

type HoverCaptionProps = {
    caption: string;
    visible: boolean;
    sidebarExpanded: boolean;
}

const tailwindStyles = `

    -translate-x-3
     group-hover:translate-x-0
`;

const StyledCaption = styled.div<{ $visible: boolean; }>`
    position: absolute;
    left: 100%;
    top: 50%;

    background-color: #C4ECFF;
    border-radius: 0.5em;

    margin-left: 0.5em;
    padding: 0.5em 1em;

    font-weight: 600;

    cursor: default;

    transition: all 300ms;
    visibility: ${props => props.$visible ? "visible" : "hidden"};
    opacity: ${props => props.$visible ? "100%" : "20%"};
    transform: 
        translateY(-50%) 
        ${props => props.$visible ? "translateX(0)" : "translateX(-1em)"}
    ;
`

export const HoverCaption: React.FC<HoverCaptionProps> = ({ caption, visible, sidebarExpanded }) => {
    return !sidebarExpanded && <StyledCaption $visible={visible}>{caption}</StyledCaption>
}
