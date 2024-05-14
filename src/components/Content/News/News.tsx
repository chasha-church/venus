import React, {createContext, useContext, useState} from 'react';
import { NewsList } from './NewsList/NewsList';
import { NewsItemDetails } from './NewsDetails/NewsDetails';
import styled from 'styled-components';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks/hooks';
import {
    fetchNews,
    selectCurrentNews, selectNewsFetchError,
    selectNewsIsPending,
    selectNewsPageSize,
    selectNextNewsPage, setPage, setPageSize
} from '../../../redux/features/newsSlice';
import {useAPIFetch} from '../../../redux/hooks/useAPIFetch';
import {Preloader} from '../../common/Preloader/Preloader';
import {APIError} from '../../service/APIError/APIError';
import {useParams} from 'react-router-dom';

type NewsProps = {};

const StyledNewsWrapper = styled.div<{ $sidebarNewsExpanded: boolean }>`
    display: grid;
    grid-template-columns: ${(props) =>
        props.$sidebarNewsExpanded ? '0fr 1fr' : '1fr 0'};
    transition: grid-template-columns 500ms;
    overflow: hidden;

    ${(props) => (props.$sidebarNewsExpanded ? 'overflow-y: hidden' : '')};

    @media (max-width: 600px) {
        font-size: 10px;
    }
`;

interface SidebarNewsExpanded {
    sidebarNewsExpanded: boolean;
    setSidebarNewsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState: SidebarNewsExpanded = {
    sidebarNewsExpanded: false,
    setSidebarNewsExpanded: () => {},
};

const SidebarNewsContext = createContext<SidebarNewsExpanded>(initialState);

export const useGetSidebarNewsExpanded = () => {
    const object = useContext(SidebarNewsContext);
    if (!object) {
        throw new Error('useGetSidebarNewsExpanded must be used within a Provider');
    }
    return object;
};

export const News: React.FC<NewsProps> = ({}) => {

    const {newsContentId} = useParams();
    const newsContentIdNumber = newsContentId ? +newsContentId : 0;

    const [sidebarNewsExpanded, setSidebarNewsExpanded] = useState(!!newsContentId);
    const dispatch = useAppDispatch();


    dispatch(setPageSize(50));
    dispatch(setPage(2));

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

    if (news == null){
        return <div>Новостей нет</div>;
    }

    return (
        <StyledNewsWrapper $sidebarNewsExpanded={sidebarNewsExpanded}>
            <SidebarNewsContext.Provider value={{sidebarNewsExpanded, setSidebarNewsExpanded}}>
                <NewsList data={news}/>
                <NewsItemDetails newsContentId={newsContentIdNumber}/>
            </SidebarNewsContext.Provider>
        </StyledNewsWrapper>
    );
};
