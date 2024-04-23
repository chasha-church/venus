import React from 'react';
import styled from 'styled-components';
import {Outlet} from 'react-router-dom';

type ContentProps = {}

const StyledContent = styled.div`
    /* Margin from Sidebar */
    margin-left: var(--content-margin);
`;

export const Content: React.FC<ContentProps> = () => {
    return (
        <StyledContent>
            <Outlet />
        </StyledContent>
    );
};
