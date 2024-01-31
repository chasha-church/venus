import React from 'react'
import { Button, ConfigProvider } from 'antd';

import styled from "styled-components";
import { NewsItemType } from '../../../../../redux/features/newsSlice';

type NewsBlockProps = {
    newsData: NewsItemType;
}

const CardImage = styled.img`
    object-fit: cover; // property not working here
`;

const InnerCardContainer = styled.div`
    flex: 190px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;
    margin: 5vh 80px;
    
    box-shadow: 0 0 0.5em 0.3em rgba(0, 0, 0, 0.25) ;
`;

const CardDate = styled.div`
    align-self: end;
    padding: 0 5px 0 0;
    margin: 10px 0 0 0;
    font-style: italic;
    font-weight: 500;
`;

const CardTitle = styled.div`
    margin: 25px 10px;
    text-align: center;
`;

const DetailsButton = styled(Button)`
    margin: 0 0 15px 0;
`;

export const NewsCard: React.FC<NewsBlockProps> = ({ newsData }) => {
    const parseData = (data: string): string => data.slice(0, 10).split("-").reverse().join(".");

    return (
        <InnerCardContainer >
            <CardImage src={newsData.main_asset_url} />
            <CardDate>{parseData(newsData.created_date)}</CardDate>
            <CardTitle>{newsData.title}</CardTitle>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#F0A202",
                    },
                }}
            >
                <DetailsButton>Подробнее</DetailsButton>
            </ConfigProvider>
        </InnerCardContainer>
    );
}
