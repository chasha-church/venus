import React, { useContext } from 'react';
import styled from 'styled-components';

import { ToggleSidebar } from './ToggleSidebar/ToggleSidebar';
import { StyledSidebarGrid } from '../StyledSidebarGrid/StyledSidebarGrid';
import { SidebarContext } from '../Sidebar';

import { ChashaIcon } from '../../common/Icons/ChashaIcon';
import { Link } from 'react-router-dom';
import { device } from '../../../styles/BreakPoints';

const StyledHeaderContent = styled.div`
    height: var(--sidebar-height);
    position: relative;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrayBorder};
`;

const StyledHeaderGrid = styled(StyledSidebarGrid)<{
    $sidebarExpanded?: boolean;
}>`
    padding-top: 0;
    padding-bottom: 0;
`;

const StyledTitle = styled.div<{ $sidebarExpanded: boolean }>`
    /* These properties make the width of title text animate while collapsing! 
    Great solution with grid */
    display: grid;
    grid-template-columns: ${(props) =>
        props.$sidebarExpanded ? '1fr' : '0fr'};

    transition: grid-template-columns 500ms;
    overflow: hidden;

    span {
        cursor: pointer;
        overflow: hidden;

        font-weight: bold;
        white-space: nowrap;

        transition: margin 500ms;
        margin-right: ${(props) => (props.$sidebarExpanded ? '0.5em' : '0')};
    }

    @media only screen and (${device.sm}) {
        grid-template-columns: 1fr;
    }
`;

type SidebarHeaderProps = {};

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({}) => {
    const { sidebarExpanded } = useContext(SidebarContext);

    return (
        <StyledHeaderContent>
            <Link to="/">
                <StyledHeaderGrid>
                    <ChashaIcon width={'3em'} />
                    <StyledTitle $sidebarExpanded={sidebarExpanded}>
                        <span>Неупиваемая Чаша</span>
                    </StyledTitle>
                </StyledHeaderGrid>
            </Link>
            <ToggleSidebar />
        </StyledHeaderContent>
    );
};
