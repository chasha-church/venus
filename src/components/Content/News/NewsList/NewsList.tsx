import React from 'react';
import { NewsListItem } from './NewsListItem/NewsListItem';
import styled from 'styled-components';
import { NewsListItemType } from '../../../../redux/features/newsSlice';
import {Link} from 'react-router-dom';

const NewsListWrapper = styled.div`
    flex: 25em;

    overflow-y: scroll;
    height: 100vh;

    @media (max-width: 900px) {
        height: 100%;
        overflow-y: hidden;
    }
`;

type NewsListProps = {
    data: Array<NewsListItemType>
};

export const NewsList: React.FC<NewsListProps> = ({data}) => {
    return (
        <NewsListWrapper>
            {data.map((item) => (
                <Link key={item.news_content_id} to={`/news/${item.news_content_id}`}>
                    <NewsListItem
                        data={item}
                    />
                </Link>
            ))}
        </NewsListWrapper>
    );
};
