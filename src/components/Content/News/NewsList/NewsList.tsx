import React from 'react';
import {NewsListItem} from './NewsListItem/NewsListItem';
import styled from 'styled-components';

const data = Array.from({ length: 23 }).map((_, i) => ({
    news_content_id: `${i}`,
    title: `Открытый турнир памяти Героя Республики Беларусь Никиты Куконенко, приуроченном ко Дню защитников Отечества №${i}`,
    main_asset_url: 'https://chashaby.s3.eu-central-1.amazonaws.com/photo_2023-03-26_21-34-54.jpg',
    created_date: '2023-03-26T18:42:18',
}));

const NewsListWrapper = styled.div`
    flex: 25em;
    
    overflow-y:scroll;
    height: 100vh;

    @media (max-width: 900px) {
        height: 100%;
        overflow-y: hidden;
    }
`;

type NewsListProps = {}

export const NewsList: React.FC<NewsListProps> = ({}) => {
    return (
        <NewsListWrapper>
            {
                data.map((item) => <NewsListItem key={item.news_content_id} data={item}/>)
            }
        </NewsListWrapper>
    );
};
