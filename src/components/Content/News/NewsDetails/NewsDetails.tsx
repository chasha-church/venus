import React from 'react';
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
import {useGetSidebarNewsExpanded} from '../News';

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
    width: 100%;
    justify-self: center;
    overflow: hidden;

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

type NewsItemDetailsProps = {
    newsContentId: number;
};

export const NewsItemDetails: React.FC<NewsItemDetailsProps> = ({newsContentId}) => {
    const {sidebarNewsExpanded, setSidebarNewsExpanded} = useGetSidebarNewsExpanded();

    const parseDate = (date: string): string =>
        date.slice(0, 10).split('-').reverse().join('.');
    const dispatch = useAppDispatch();
    const returnBackToNewsListOnClick = () => {
        setSidebarNewsExpanded(false);
    };
    
    let newsDetailsContent;
    
    if (newsContentId != 0) {
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
                    width={'100%'}
                    src={newsDetails.main_asset_url}
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
            newsDetailsContent = <div>Error!</div>;

        }

    }
    
    else {
        newsDetailsContent = <h1>Let is try again.</h1>;
    }

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
                icon={<CloseOutlined/>}
            />
            {newsDetailsContent}
        </StyledNewsItemDetailsWrapper>
    );
};
