import React from 'react'
import { Button, ConfigProvider } from 'antd';

import styled from "styled-components";

type NewsBlockProps = {
    image: string;
}

const CardImage = styled.img`
    object-fit: cover;
`;

const InnerCardContainer = styled.div`
    flex: 190px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    margin: 5vh 80px;
    
    box-shadow: 0 0 0.5em 0.3em rgba(0, 0, 0, 0.25) ;
`;

const CardDate = styled.div`
    align-self: end;
    padding: 0 5px 0 0;
    margin: 5px 0 0 0;
`;

const CardTitle = styled.div`
    margin: 5px 10px;
`;

const DetailsButton = styled(Button)`
    margin: 0 0 15px 0;
`;

export const NewsCard: React.FC<NewsBlockProps> = ({ image }) => {
    return (
        <InnerCardContainer >
            <CardImage src={image} />
            <CardDate>14.08.2023</CardDate>
            <CardTitle>Открытый турнир памяти Героя Республики Беларусь Никиты Куконенко, приуроченном ко Дню защитников Отечества</CardTitle>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#F0A202",
                    },
                }}
            >
                <DetailsButton>Подробнее</DetailsButton>
            </ConfigProvider>
        </InnerCardContainer>
    );
}
