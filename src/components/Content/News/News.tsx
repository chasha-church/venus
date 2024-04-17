import React from 'react'
import {NewsList} from "./NewsList/NewsList";
import {NewsItemDetails} from "./NewsDetails/NewsDetails";
import styled from "styled-components";

type NewsProps = {}

const NewsWrapper = styled.div`
    display: flex;
    flex-direction: row;   
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    
    @media (max-width: 600px) {
        font-size: 10px;
    }
`

export const News: React.FC<NewsProps> = ({}) => {
    return (
        <NewsWrapper>
            <NewsList/>
            <NewsItemDetails/>
        </NewsWrapper>
    );
}
