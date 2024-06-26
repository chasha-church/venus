import React from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { Image, FloatButton } from 'antd';
import MockImage from '../../../../assets/images/Church.png';
import {
    selectSidebarNewsExpanded,
    setSidebarNewsExpanded,
} from '../../../../redux/features/sidebarNewsSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks';

const Data = {
    news_content_id: 320,
    title: 'Масленичное гуляние в приходе',
    text: '    Обряд величания молодоженов, масленичные песни и народные танцы, веселые конкурсы и, конечно, блинное изобилие с чаем из горячего самовара ожидали всех прихожан и гостей на Масленичном гулянии. Особыми гостями праздника стали воспитанники социально-педагогического центра с приютом Ленинского района г.Минска. Ребята с удовольствием приняли участие во всех конкурсах на силу, быстроту и меткость, а также тепло пообщались за чаем с учащимися воскресной школы прихода. Фоторепортаж',
    view_data: null,
    main_asset_url:
        'https://chashaby.s3.eu-central-1.amazonaws.com/photo_2023-03-26_21-23-44.jpg',
    assets_url: [
        'https://chashaby.s3.eu-central-1.amazonaws.com/photo_2023-03-26_21-23-44.jpg',
        'https://chashaby.s3.eu-central-1.amazonaws.com/photo_2023-03-26_21-34-54.jpg',
    ],
    created_date: '2023-03-26T18:32:51',
    created_by_id: 1,
    updated_date: '2023-11-29T15:42:20',
    updated_by_id: 1,
};

const StyledNewsItemDetailsWrapper = styled.div`
    flex: 25rem;

    overflow-y: scroll;
    height: 100vh;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min-content;
    gap: 0.5rem;

    grid-template-areas:
        'mainAsset mainAsset'
        'header header'
        'text text'
        'date date'
        'assets assets';

    padding: 1em 1em;

    @media (max-width: 909px) {
        height: 100%;
        overflow-y: hidden;
    }
`;

const StyledNewsMainImageWrapper = styled.div`
    width: 40vw;
    margin: auto;

    grid-area: mainAsset;
`;

const StyledNewsHeader = styled.p`
    font-size: 2em;
    text-align: center;
    margin: 1.5rem auto;

    grid-area: header;
`;

const StyledNewsText = styled.p`
    font-size: 1.2em;
    line-height: 1.5rem;

    grid-area: text;
`;

const StyledNewsCreatedDate = styled.div`
    text-align: right;

    grid-area: date;
`;

const StyledNewsAssetImage = styled(Image)`
    object-fit: cover;
`;

type NewsItemDetailsProps = {};

export const NewsItemDetails: React.FC<NewsItemDetailsProps> = ({}) => {
    const parseDate = (date: string): string =>
        date.slice(0, 10).split('-').reverse().join('.');
    const dispatch = useAppDispatch();
    const returnBackToNewsListOnClick = () => {
        dispatch(setSidebarNewsExpanded(false));
    };

    const sidebarNewsExpanded = useAppSelector(selectSidebarNewsExpanded);
    return (
        <StyledNewsItemDetailsWrapper>
            <FloatButton
                style={{
                    top: '1rem',
                    right: '1.5rem',
                    display: `${sidebarNewsExpanded ? 'inherit' : 'none'}`,
                    transition: 'display 500ms',
                }}
                onClick={returnBackToNewsListOnClick}
                icon={<CloseOutlined />}
            />
            <StyledNewsMainImageWrapper>
                <Image
                    width={'100%'}
                    src={Data.main_asset_url}
                />
            </StyledNewsMainImageWrapper>
            <StyledNewsHeader>{Data.title}</StyledNewsHeader>
            <StyledNewsText>{Data.text}</StyledNewsText>
            <StyledNewsCreatedDate>
                {parseDate(Data.created_date)}
            </StyledNewsCreatedDate>
            <StyledNewsAssetImage
                height={'100%'}
                src={Data.assets_url[0]}
            />
            <StyledNewsAssetImage
                height={'100%'}
                src={MockImage}
            />
            <StyledNewsAssetImage
                height={'100%'}
                src={Data.assets_url[1]}
            />
            <StyledNewsAssetImage
                height={'100%'}
                src={MockImage}
            />

            <StyledNewsAssetImage
                height={'100%'}
                src={MockImage}
            />
            <StyledNewsAssetImage
                height={'100%'}
                src={MockImage}
            />
            <StyledNewsAssetImage
                height={'100%'}
                src={MockImage}
            />
            <StyledNewsAssetImage
                height={'100%'}
                src={MockImage}
            />
            <StyledNewsAssetImage
                height={'100%'}
                src={MockImage}
            />
            <StyledNewsAssetImage
                height={'100%'}
                src={MockImage}
            />
            <StyledNewsAssetImage
                height={'100%'}
                src={MockImage}
            />
            <StyledNewsAssetImage
                height={'100%'}
                src={MockImage}
            />
            <StyledNewsAssetImage
                height={'100%'}
                src={MockImage}
            />
        </StyledNewsItemDetailsWrapper>
    );
};
