import { FunctionComponent, useEffect } from "react";

import styled from "styled-components";
import { NewsCard } from "./NewsCard/NewsCard";
import tmpImage from '../../../../assets/images/measuring_progress-750x375.jpg';
import tmpImage1 from '../../../../assets/images/in_progress.jpg';
import tmpImage2 from '../../../../assets/images/in_progress_v.jpg';
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

    const newsMap = news.map(news =>
        <div key={news.id} style={{margin: "20px", fontSize: "20px", padding: "10px", border: "2px solid grey"}}>
            <b>{news.caption}</b>
            <img src="" alt={news.image} />
        </div>
    )

    return (
        <div>
            <NewsLable>
                <StyledSVG color={color} src={newsDecorLeft} />
                Новости
                <StyledSVG color={color} src={newsDecorRight} />
            </NewsLable>
            <NewsCardContainer>
                <NewsCard image={tmpImage} />
                <NewsCard image={tmpImage1} />
                <NewsCard image={tmpImage2} />
            </NewsCardContainer>
            <div style={{display: "flex", justifyContent: "center"}}>
                {newsMap}
            </div>
        </div>
    );
}