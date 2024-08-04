import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { device } from '../../styles/BreakPoints';

type ContentProps = {};

const StyledContent = styled.div`
    /* Margin from Sidebar */
    margin-left: var(--content-margin);

    @media only screen and (${device.sm}) {
        margin-left: 0;
        margin-top: var(--content-margin);
    }
`;

export const Content: React.FC<ContentProps> = () => {
    return (
        <StyledContent>
            <Outlet />
        </StyledContent>
    );
};
