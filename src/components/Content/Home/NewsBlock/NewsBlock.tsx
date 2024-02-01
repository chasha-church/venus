import { FunctionComponent, useEffect } from "react";

import styled from "styled-components";
import { NewsCard } from "./NewsCard/NewsCard";
import headingShapeLeft from '../../../../assets/images/HeadingShapeLeft.svg';
import headingShapeRight from '../../../../assets/images/HeadingShapeRight.svg';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks';
import { fetchNews, selectCurrentNews, selectNewsPageSize, selectNextNewsPage } from '../../../../redux/features/newsSlice';
import {SvgContainer} from "../../../common/SvgContainer/SvgContainer";

const NewsHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    align-items: center;
    
    margin: 70px 0 30px 0;
    font-size: 48px;
    text-align: center;
`;

const NewsCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 85px;
`;

type NewsBlockProps = {};

export const NewsBlock: FunctionComponent<NewsBlockProps> = ({ }) => {
    const headingShapeColor = "#D9D9D9";

    const news = useAppSelector(selectCurrentNews);
    const pageSize = useAppSelector(selectNewsPageSize);
    const page = useAppSelector(selectNextNewsPage);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchNews({ pageSize, page }));
    }, []);

    const newsCards = news.map(news => <NewsCard key={news.news_content_id} newsData={news} />)

    return (
        <div>
            <NewsHeader>
                <SvgContainer path={headingShapeLeft} color={headingShapeColor}/>
                <span>Новости</span>
                <SvgContainer path={headingShapeRight} color={headingShapeColor}/>
            </NewsHeader>
            <NewsCardContainer>
                {newsCards}
            </NewsCardContainer>
        </div>
    );
}
