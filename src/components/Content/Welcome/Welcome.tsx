import React from 'react'

import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks/hooks';
import { selectSidebarExpanded } from '../../../redux/slices/sidebarSlice';

type WelcomeProps = {
    welcomeText: string;
}

const StyledWelcome = styled.div`
    padding-left: 30px;
    margin-left: 80px;
    background-color: #0075BA;
    height: 80vh;
`

export const Welcome: React.FC<WelcomeProps> = ({ welcomeText }) => {
    return (
        <StyledWelcome>
            <h1>{welcomeText}</h1>
        </StyledWelcome>
    )
}