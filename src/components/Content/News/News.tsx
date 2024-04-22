import React, {createContext, useState} from 'react';
import {NewsList} from './NewsList/NewsList';
import {NewsItemDetails} from './NewsDetails/NewsDetails';
import styled from 'styled-components';
import {useAppSelector} from "../../../redux/hooks/hooks";
import {selectSidebarNewsExpanded} from "../../../redux/features/sidebarNewsSlice";

type NewsProps = {}

const StyledNewsWrapper = styled.div<{ $sidebarNewsExpanded: boolean }>`
    display: grid;
    grid-template-columns: ${props => props.$sidebarNewsExpanded ? '0fr 1fr' : '1fr 0'};
    transition: grid-template-columns 500ms;
    overflow: hidden;

    ${props => props.$sidebarNewsExpanded ? 'overflow-y: hidden' : ''};
    

    @media (max-width: 600px) {
        font-size: 10px;
    }
`;

export const News: React.FC<NewsProps> = ({}) => {
    const sidebarNewsExpanded = useAppSelector(selectSidebarNewsExpanded);

    return (
        <StyledNewsWrapper $sidebarNewsExpanded={sidebarNewsExpanded}>
            <NewsList/>
            <NewsItemDetails/>
        </StyledNewsWrapper>
    );
};
