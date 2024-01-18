import React from 'react'

import styled from "styled-components";
import {NewsCard} from "./NewsCard/NewsCard";
import tmpImage from '../../../../assets/images/measuring_progress-750x375.jpg';
import tmpImage1 from '../../../../assets/images/in_progress.jpg';
import tmpImage2 from '../../../../assets/images/in_progress_v.jpg';
import newsDecorLeft from '../../../../assets/images/news_decor_left.svg';
import newsDecorRight from '../../../../assets/images/news_decor_right.svg';
import SVG from "react-inlinesvg";

type NewsBlockProps = {}

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

const StyledSVG = styled(SVG)<SVGProps>`

    margin: 0 30px;
    width: 93px;
    height: 25px;

    & path {
        fill: ${({color}) => color};
    }
`;

export const NewsBlock: React.FC<NewsBlockProps> = () => {
    const color = "red";
    return (
        <>
            <NewsLable>
                <StyledSVG color={color} src={newsDecorLeft}/>
                Новости
                <StyledSVG color={color} src={newsDecorRight}/>
            </NewsLable>
            <NewsCardContainer>
                <NewsCard image={tmpImage}/>
                <NewsCard image={tmpImage1}/>
                <NewsCard image={tmpImage2}/>
            </NewsCardContainer>
        </>
    );
}
