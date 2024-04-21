import React, { useContext } from 'react';
import styled from 'styled-components';
import { SidebarContext } from '../../../../Sidebar';

const StyledCaption = styled.div<{ $visible: boolean; }>`
    position: absolute;
    left: 100%;
    top: 50%;

    background-color: ${props => props.theme.colors.lightPrimary};
    border-radius: 0.5em;

    margin-left: 0.5em;
    padding: 0.5em 1em;

    font-weight: 600;

    cursor: default;

    transition: all 400ms;
    visibility: ${props => props.$visible ? 'visible' : 'hidden'};
    opacity: ${props => props.$visible ? '100%' : '20%'};
    transform: 
        translateY(-50%) 
        ${props => props.$visible ? 'translateX(0)' : 'translateX(-2em)'}
    ;
`;

type HoverCaptionProps = {
    caption: string;
    visible: boolean;
}

export const HoverCaption: React.FC<HoverCaptionProps> = ({ caption, visible }) => {

    const { sidebarExpanded } = useContext(SidebarContext);

    return (
        !sidebarExpanded && <StyledCaption $visible={visible}>{caption}</StyledCaption>
    );
};
