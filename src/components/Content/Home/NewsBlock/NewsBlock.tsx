import { FunctionComponent, useEffect } from "react";

import styled from "styled-components";
import { NewsCard } from "./NewsCard/NewsCard";
import newsDecorLeft from '../../../../assets/images/news_decor_left.svg';
import newsDecorRight from '../../../../assets/images/news_decor_right.svg';
import SVG from "react-inlinesvg";
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks';
import { fetchNews, selectCurrentNews, selectNewsPageSize, selectNextNewsPage } from '../../../../redux/features/newsSlice';

const NewsLable = styled.div`
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

const NewsDecorSVG = styled.svg`
    color: black;
`;

const NewsHeaderDecor = styled(newsDecorLeft)`
    height: 40px;
    fill: black;
`;

interface SVGProps {
    color: string;
}

const StyledSVG = styled(SVG) <SVGProps>`
    display: inline;

    margin: 0 30px;

    width: 93px;
    height: 25px;

    & path {
        fill: ${({ color }) => color};
    }
`;

type NewsBlockProps = {};

export const NewsBlock: FunctionComponent<NewsBlockProps> = ({ }) => {
    const color = "red"; // Doesn't apply

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
            <NewsLable>
                <StyledSVG color={color} src={newsDecorLeft} />
                Новости
                <StyledSVG color={color} src={newsDecorRight} />
            </NewsLable>
            <NewsCardContainer>
                {newsCards}
            </NewsCardContainer>
        </div>
    );
}
