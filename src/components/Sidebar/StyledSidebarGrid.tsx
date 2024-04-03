import styled from "styled-components";

export const StyledSidebarGrid = styled.div`
    display: grid;    
    align-items: center;

    grid-template-columns: 3em 1fr;
    column-gap: 0.5em;

    padding: 1em;

    & :first-child {
        justify-self: center;    
    }
    & :last-child {
        justify-self: start;
    }
`