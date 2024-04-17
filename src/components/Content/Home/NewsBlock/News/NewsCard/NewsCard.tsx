import React from 'react'

import styled from "styled-components";
import { NewsListItemType } from '../../../../../../redux/features/newsSlice';
import MockImage from "../../../../../../assets/images/Church.png";
import { PRIMARY_COLOR } from '../../../../../../constants/colors';
import {Link} from "react-router-dom";
import {Button, ConfigProvider} from 'antd';

const CardImage = styled.img`
    object-fit: cover;
    height: 50%;
    width: 100%;
`;

const InnerCardContainer = styled.div`
    flex: 190px;
    
    min-width: 250px;
    max-width: 40%;
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

type NewsBlockProps = {
    newsData: NewsListItemType;
}

export const NewsCard: React.FC<NewsBlockProps> = ({ newsData }) => {
    const parseDate = (date: string): string => date.slice(0, 10).split("-").reverse().join(".");

    return (
        <InnerCardContainer >
            <CardImage src={newsData.main_asset_url || MockImage} />
            <CardDate>{parseDate(newsData.created_date)}</CardDate>
            <CardTitle>{newsData.title}</CardTitle>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: PRIMARY_COLOR,
                    },
                }}
            >
                <Link to={`/news/${newsData.news_content_id}`}>
                    <DetailsButton>Подробнее</DetailsButton>
                </Link>
            </ConfigProvider>
        </InnerCardContainer>
    );
}
