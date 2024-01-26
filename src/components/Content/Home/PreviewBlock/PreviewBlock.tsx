import React from 'react'
import { Button, Carousel, ConfigProvider } from 'antd';

const Church = './images/Church.png';
const ChurchInside = "./images/Church_inside.jpg";
const Church_2 = "./images/Church_2.jpg";

import styled from "styled-components";
import { MainLable } from './MainLable/MainLable';

type PreviewBlockProps = {}

const ScheduleButton = styled(Button)`
    width: fit-content;
    height: 4.5vh;

    padding: 20px 15px;

    color: white;
    border-radius: 10px;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    left: 1.4%;
    bottom: 4%;

    font-weight: 700;
    font-size: 1em;
    text-align: center;

    /* background: #F0A202;
    border: none; */
`

const CarouselWrapper = styled.div`
    position: relative;
    margin: 0;
    padding: 0;
`;

const HomeImage = styled.img`
    max-height: 100vh;
    object-fit: cover;
`;


export const PreviewBlock: React.FC<PreviewBlockProps> = () => {
    return (
        <CarouselWrapper>
            <MainLable />
            <Carousel autoplay>
                <HomeImage src={Church} />
                <HomeImage src={ChurchInside} />
                <HomeImage src={Church_2} />
            </Carousel>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#F0A202",
                    },
                }}
            >
                <ScheduleButton>Расписание богослужений</ScheduleButton>
            </ConfigProvider>
        </CarouselWrapper>
    )
}
