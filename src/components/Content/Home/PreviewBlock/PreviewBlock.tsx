import React from 'react'
import {Button, Carousel, ConfigProvider} from 'antd';

import tmpImage from '../../../../assets/images/measuring_progress-750x375.jpg';
import tmpImage2 from '../../../../assets/images/in_progress_v.jpg';
import styled from "styled-components";
import { MainLable } from './MainLable/MainLable';

type PreviewBlockProps = {}

const ScheduleButton = styled(Button)`
    width: fit-content;
    height: 4.5vh;

    color: white;
    border-radius: 15px;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    left: 1.4%;
    bottom: 4%;

    font-family: 'Oswald', serif;
    font-weight: 1000;
    font-size: 1.5vh;
    text-align: center;
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
                <MainLable></MainLable>
                <Carousel autoplay>
                    <HomeImage src={tmpImage}/>
                    <HomeImage src={tmpImage}/>
                    <HomeImage src={tmpImage}/>
                    <HomeImage src={tmpImage2}/>
                </Carousel>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#F0A202',
                        },
                    }}
                >
                    <ScheduleButton type="primary">Расписание богослужений</ScheduleButton>
                </ConfigProvider>

            </CarouselWrapper>
    )
}
