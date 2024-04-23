import React from 'react';
import {Avatar} from 'antd';
import styled from 'styled-components';
import {useAppDispatch} from '../../../../../redux/hooks/hooks';
import {setNewsContentId, setSidebarNewsExpanded} from '../../../../../redux/features/sidebarNewsSlice';

const StyledNewsListItemWrapper = styled.div`
    display: flex;
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
    font-size: 1em;
    margin: 1rem 1rem;
`;

const StyledNewsItemDate = styled.div`
    font-size: 1em;
    margin: auto;
    width: fit-content;
`;

type NewsListItemType = {
    'news_content_id': string,
    'title': string,
    'main_asset_url': string,
    'created_date': string,
}

type NewsListItemProps = {
    data: NewsListItemType
}

export const NewsListItem: React.FC<NewsListItemProps> = ({data}) => {
    const parseDate = (date: string): string => date.slice(0, 10).split('-').reverse().join('.');

    const dispatch = useAppDispatch();
    const newsItemOnClick = () => {
        dispatch(setSidebarNewsExpanded(true));
        dispatch(setNewsContentId(Number(data.news_content_id)));
    };

    return <StyledNewsListItemWrapper onClick={newsItemOnClick}>
        <StyledNewsItemAvatar shape="square"
            size={{xs: 40, sm: 40, md: 64, lg: 80, xl: 100, xxl: 140, }}
            src={data.main_asset_url}/>
        <StyledNewsItemTitle>{data.title}</StyledNewsItemTitle>
        <StyledNewsItemDate>{parseDate(data.created_date)}</StyledNewsItemDate>
    </StyledNewsListItemWrapper>;
};
