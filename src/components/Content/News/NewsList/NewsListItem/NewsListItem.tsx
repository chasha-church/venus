import React from 'react';
import { Avatar } from 'antd';
import styled from 'styled-components';
import { useAppDispatch } from '../../../../../redux/hooks/hooks';
import {setNewsContentId} from '../../../../../redux/features/newsDetailsSlice';
import {useGetSidebarNewsExpanded} from '../../News';

const StyledNewsListItemWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 0.5rem;
    margin: 0.5rem 0.5rem;
    border: 0.15rem solid ${({ theme }) => theme.colors.primary};
    border-radius: 0.5rem;
    transition: 0.3s;

    &:hover {
        margin-left: 1.2rem;
        cursor: pointer;
    }
`;

const StyledNewsItemAvatar = styled(Avatar)`
    flex-shrink: 0;
`;

const StyledNewsItemTitle = styled.p`
    flex: 4;
    
    font-size: 1em;
    margin: 1rem 1rem;
`;

const StyledNewsItemDate = styled.div`
    flex: 1;
    flex-shrink: 0;
    
    font-size: 1em;
    margin: auto;
    width: fit-content;
`;

type NewsListItemType = {
    news_content_id: number;
    title: string;
    main_asset_url: string;
    created_date: string;
};

type NewsListItemProps = {
    data: NewsListItemType;
};

export const NewsListItem: React.FC<NewsListItemProps> = ({ data }) => {
    const {setSidebarNewsExpanded} = useGetSidebarNewsExpanded();

    const parseDate = (date: string): string =>
        date.slice(0, 10).split('-').reverse().join('.');

    const dispatch = useAppDispatch();
    const newsItemOnClick = () => {
        dispatch(setNewsContentId(data.news_content_id));
        setSidebarNewsExpanded(true);
    };

    return (
        <StyledNewsListItemWrapper onClick={newsItemOnClick}>
            <StyledNewsItemAvatar
                shape="square"
                size={{ xs: 40, sm: 40, md: 64, lg: 80, xl: 100, xxl: 140 }}
                src={data.main_asset_url}
            />
            <StyledNewsItemTitle>{data.title}</StyledNewsItemTitle>
            <StyledNewsItemDate>
                {parseDate(data.created_date)}
            </StyledNewsItemDate>
        </StyledNewsListItemWrapper>
    );
};
