import { FunctionComponent, useEffect } from "react";

import styled from "styled-components";
import { NewsCard } from "./NewsCard/NewsCard";
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks';
import { fetchNews, selectCurrentNews, selectNewsPageSize, selectNextNewsPage } from '../../../../redux/features/newsSlice';
import { Preloader } from "../../../common/Preloader/Preloader";
import { Heading } from "../../../common/Heading/Heading";


const NewsCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 85px;
`;

type NewsBlockProps = {};

export const NewsBlock: FunctionComponent<NewsBlockProps> = ({ }) => {

    const news = useAppSelector(selectCurrentNews);
    const pageSize = useAppSelector(selectNewsPageSize);
    const page = useAppSelector(selectNextNewsPage);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchNews({ pageSize, page }));
    }, []);

    const newsCards = news?.map(news => <NewsCard key={news.news_content_id} newsData={news} />)

    /* In case that data has not been fetched yet: */
    if (!news) return <Preloader />
    
    return (
        <div>
            <Heading value="Новости" />
            <NewsCardContainer>
                {newsCards}
            </NewsCardContainer>
        </div>
    );
}
