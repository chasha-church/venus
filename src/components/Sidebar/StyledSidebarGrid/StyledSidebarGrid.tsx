import styled from 'styled-components';

export const StyledSidebarGrid = styled.div<{ $sidebarExpanded?: boolean; }>`
    display: grid;    
    align-items: center;

    grid-template-columns: var(--sidebar-grid-left-col) 1fr;
    column-gap: var(--sidebar-grid-gap);

    padding: var(--sidebar-grid-padding);

    & :first-child {
        justify-self: center;    
    }
    & :last-child {
        justify-self: start;
    }
`;
