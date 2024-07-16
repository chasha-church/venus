import { FunctionComponent } from 'react';
import styled from 'styled-components';
import {
    useAppDispatch,
    useAppSelector,
} from '../../../../../redux/hooks/hooks';
import {
    fetchNews,
    selectCurrentNews,
    selectNewsFetchError,
    selectNewsIsPending,
    selectNewsPageSize,
    selectNextNewsPage,
} from '../../../../../redux/features/homeNewsSlice';
import { NewsCard } from './NewsCard/NewsCard';
import { Preloader } from '../../../../common/Preloader/Preloader';
import { APIError } from '../../../../service/APIError/APIError';
import { useAPIFetch } from '../../../../../redux/hooks/useAPIFetch';

const NewsCardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0;
`;

export const News: FunctionComponent = ({}) => {
    const pageSize = useAppSelector(selectNewsPageSize);
    const page = useAppSelector(selectNextNewsPage);

    const dispatch = useAppDispatch();

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

    const newsCards = news?.map((news) => (
        <NewsCard
            key={news.news_content_id}
            newsData={news}
        />
    ));

    return <NewsCardContainer>{newsCards}</NewsCardContainer>;
};
