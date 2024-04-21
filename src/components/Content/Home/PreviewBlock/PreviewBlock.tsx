import React from 'react';
import { Button, Carousel, ConfigProvider } from 'antd';

const Church = './images/Church.png';
const ChurchInside = './images/Church_inside.jpg';
const Church_2 = './images/Church_2.jpg';

import styled from 'styled-components';
import { MainLable } from './MainLable/MainLable';
import { PRIMARY_COLOR } from '../../../../constants/colors';

type PreviewBlockProps = {};

const ScheduleButton = styled(Button)`
    width: fit-content;
    height: 4.5vh;

    padding: 20px 15px;

    background-color: ${({ theme }) => theme.colors.background};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    left: 1.4%;
    bottom: 4%;

    font-weight: 700;
    font-size: ${({ theme }) => theme.fonts.fontSize.sm};
    text-align: center;
`;

const CarouselWrapper = styled.div`
    position: relative;
    margin: 0;
    padding: 0;
`;

const HomeImage = styled.img`
    height: 100vh;
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
                        colorPrimary: PRIMARY_COLOR,
                    },
                }}
            >
                <ScheduleButton href="#schedule">
                    Расписание богослужений
                </ScheduleButton>
            </ConfigProvider>
        </CarouselWrapper>
    );
};
