import React, {useEffect} from 'react';
import styled from 'styled-components';
import {CloseOutlined} from '@ant-design/icons';
import {Image, FloatButton} from 'antd';

import {useAppDispatch} from '../../../../redux/hooks/hooks';
import {useAPIFetch} from '../../../../redux/hooks/useAPIFetch';
import {Preloader} from '../../../common/Preloader/Preloader';
import {APIError} from '../../../service/APIError/APIError';
import {
    fetchNewsDetails,
    selectCurrentNewsDetails, selectNewsDetailsFetchError,
    selectNewsDetailsIsPending
} from '../../../../redux/features/newsDetailsSlice';
import MockImage from '../../../../assets/images/Church.png';
import {useParams} from 'react-router-dom';

const StyledNewsItemDetailsWrapper = styled.div`
    max-width: 800px;
    margin: 3em auto;
    padding: 0 3em;

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
`;

const StyledNewsMainImageWrapper = styled.div`
    text-align: center;

    grid-area: mainAsset;
`;

const StyledNewsMainImage = styled(Image)`
    object-fit: cover;

    margin: auto;
`;

const StyledNewsHeader = styled.h1`
    font-size: 2em;
    line-height: 1.2em;
    text-align: center;
    margin: 1.5rem auto;

    grid-area: header;
`;

const StyledNewsText = styled.p`
    font-size: 1.2em;
    line-height: 1.5rem;
    text-align: justify;
    margin-bottom: 1.5em;

    grid-area: text;
`;

const StyledNewsCreatedDate = styled.div`
    text-align: right;

    grid-area: date;
`;

const StyledNewsAssetImage = styled(Image)`
    object-fit: cover;

    grid-area: assets;
`;

type NewsDetailsProps = {};

export const NewsDetails: React.FC<NewsDetailsProps> = () => {
    const {newsContentId} = useParams();

    const returnBackToNewsListOnClick = () => {
        history.back();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const parseDate = (date: string): string =>
        date.slice(0, 10).split('-').reverse().join('.');

    const dispatch = useAppDispatch();

    let newsDetailsContent;

    if (newsContentId) {
        const {
            data: newsDetails,
            isPending: isPending,
            error: fetchError,
        } = useAPIFetch(
            () => {
                dispatch(fetchNewsDetails({newsContentId}));
            },
            [newsContentId],
            {
                data: selectCurrentNewsDetails,
                isPending: selectNewsDetailsIsPending,
                error: selectNewsDetailsFetchError,
            }
        );

        newsDetailsContent = <>
            <StyledNewsMainImageWrapper>
                <StyledNewsMainImage
                    height={'35vh'}
                    src={newsDetails.main_asset_url || MockImage}
                />
            </StyledNewsMainImageWrapper>

            <StyledNewsHeader>{newsDetails.title}</StyledNewsHeader>
            <StyledNewsText>{newsDetails.text}</StyledNewsText>
            <StyledNewsCreatedDate>
                {parseDate(newsDetails.created_date)}
            </StyledNewsCreatedDate>

            {newsDetails.assets_url.map((url) => (
                <StyledNewsAssetImage
                    height={'100%'}
                    key={url}
                    src={url}
                />
            ))}
        </>;

        /* In case that data has not been fetched yet: */
        if (isPending) {
            newsDetailsContent = <Preloader/>;
        }

        /* In case that error happened while fetching: */
        if (fetchError) {
            newsDetailsContent = <APIError error={fetchError}/>;
        }

    } else {
        newsDetailsContent = <APIError error='Информация недоступна.'/>;
    }

    return (
        <StyledNewsItemDetailsWrapper>
            <FloatButton
                style={{
                    top: '1rem',
                    right: '1.5rem',
                    display: 'inherit',
                    transition: 'display 500ms',
                }}
                onClick={returnBackToNewsListOnClick}
                icon={<CloseOutlined/>}
            />
            {newsDetailsContent}
        </StyledNewsItemDetailsWrapper>
    );
};
