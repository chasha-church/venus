import React from 'react'
import {Avatar} from "antd";
import styled from "styled-components";

const NewsListItemWrapper = styled.div`
    display: flex;
    padding: 0.5rem 0.5rem;
`

const StyledNewsItemAvatar = styled(Avatar)`
    flex-shrink: 0;
`

const StyledNewsItemTitle = styled.p`
    font-size: 1em;
`

const StyledNewsItemDate = styled.span`
    font-size: 1em;
`

type NewsListItemType = {
    "news_content_id": string,
    "title": string,
    "main_asset_url": string,
    "created_date": string,
}

type NewsListItemProps = {
    data: NewsListItemType
}

export const NewsListItem: React.FC<NewsListItemProps> = ({data}) => {
    const parseDate = (date: string): string => date.slice(0, 10).split("-").reverse().join(".");

    return <NewsListItemWrapper>
        <StyledNewsItemAvatar shape="square"
                size={{xs: 40, sm: 40, md: 64, lg: 80, xl: 100, xxl: 140, }}
                src={data.main_asset_url}/>
        <StyledNewsItemTitle>{data.title}</StyledNewsItemTitle>
        <StyledNewsItemDate>{parseDate(data.created_date)}</StyledNewsItemDate>
    </NewsListItemWrapper>
}
