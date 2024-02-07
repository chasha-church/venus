import { FunctionComponent, useEffect } from "react";

import styled from "styled-components";
import { ScheduleItem } from "./ScheduleItem/ScheduleItem";

// import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks';
// import { fetchNews, selectCurrentNews, selectNewsPageSize, selectNextNewsPage } from '../../../../redux/features/newsSlice';

const StyledContainer = styled.div`
    margin-top: 70px;

    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
`

type ScheduleProps = {};

export const Schedule: FunctionComponent<ScheduleProps> = ({ }) => {

    // const news = useAppSelector(selectCurrentNews);
    // const pageSize = useAppSelector(selectNewsPageSize);
    // const page = useAppSelector(selectNextNewsPage);

    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(fetchNews({ pageSize, page }));
    // }, []);

    // const newsCards = news.map(news => <NewsCard key={news.news_content_id} newsData={news} />)

    return (
        <StyledContainer>
            <ScheduleItem />
            <ScheduleItem />
            <ScheduleItem />
            <ScheduleItem />
            <ScheduleItem />
            <ScheduleItem />
            <ScheduleItem />
        </StyledContainer>
    );
}