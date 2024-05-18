import React from 'react';
import { Avatar } from 'antd';
import styled from 'styled-components';
import MockImage from '../../../../../assets/images/Church.png';

const StyledNewsListItemWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;

    padding: 1em 0.5em;
    margin: 0.5em 0.5em;
    border: 0.15em solid ${({ theme }) => theme.colors.primary};
    border-radius: 0.5em;
    transition: 0.3s;

    &:hover {
        margin-left: 1.2em;
        cursor: pointer;
    }
`;

const StyledNewsItemAvatar = styled(Avatar)`
    flex-shrink: 0;
`;

const StyledNewsItemTitle = styled.p`
    flex: 4;
    
    font-size: 1rem;
    margin: 1em 1em;
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

    const parseDate = (date: string): string =>
        date.slice(0, 10).split('-').reverse().join('.');

    return (
        <StyledNewsListItemWrapper>
            <StyledNewsItemAvatar
                shape="square"
                size={{ xs: 40, sm: 40, md: 64, lg: 80, xl: 100, xxl: 140 }}
                src={data.main_asset_url || MockImage}
            />
            <StyledNewsItemTitle>{data.title}</StyledNewsItemTitle>
            <StyledNewsItemDate>
                {parseDate(data.created_date)}
            </StyledNewsItemDate>
        </StyledNewsListItemWrapper>
    );
};
