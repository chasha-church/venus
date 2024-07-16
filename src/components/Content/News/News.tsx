import React from 'react';
import { NewsList } from './NewsList/NewsList';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import {
    fetchNews,
    selectCurrentNews,
    selectNewsFetchError,
    selectNewsIsPending,
    selectNewsPageSize,
    selectNextNewsPage,
} from '../../../redux/features/newsSlice';
import { useAPIFetch } from '../../../redux/hooks/useAPIFetch';
import { Preloader } from '../../common/Preloader/Preloader';
import { APIError } from '../../service/APIError/APIError';

type NewsProps = {};

const StyledNewsWrapper = styled.div`
    @media (max-width: 600px) {
        font-size: 10px;
    }
`;

export const News: React.FC<NewsProps> = ({}) => {
    const dispatch = useAppDispatch();

    const pageSize = useAppSelector(selectNewsPageSize);
    const page = useAppSelector(selectNextNewsPage);

    const {
        data: news,
        isPending,
        error: fetchError,
    } = useAPIFetch(
        () => {
            dispatch(fetchNews({ pageSize, page }));
        },
        [pageSize, page],
        {
            data: selectCurrentNews,
            isPending: selectNewsIsPending,
            error: selectNewsFetchError,
        }
    );

    /* In case that data has not been fetched yet: */
    if (isPending) return <Preloader />;

    /* In case that error happened while fetching: */
    if (fetchError) return <APIError error={fetchError} />;

    if (news == null) {
        return <div>Новостей нет</div>;
    }

    return (
        <StyledNewsWrapper>
            <NewsList data={news} />
        </StyledNewsWrapper>
    );
};
