import { FunctionComponent, useEffect, useState } from "react";

import styled from "styled-components";
import { DayItem } from "./DayItem/DayItem";

import { 
    fetchWeekSchedule, selectCurrentWeek, selectMaxPeopleToShow, selectWeekSchedule,
    selectWeekScheduleFetchError, selectWeekScheduleIsPending, WeekDay
} from "../../../../../redux/features/scheduleSlice";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks/hooks";
import { Preloader } from "../../../../common/Preloader/Preloader";
import { useAPIFetch } from "../../../../../redux/hooks/useFetch";

const StyledContainer = styled.div`
    margin-top: 70px;
`

type ScheduleProps = {};

export const Schedule: FunctionComponent<ScheduleProps> = ({ }) => {


    const maxPeopleToShow = useAppSelector(selectMaxPeopleToShow);
    const currentWeek = useAppSelector(selectCurrentWeek);
    // const isPending = useAppSelector(selectWeekScheduleIsPending);
    // const fetchError = useAppSelector(selectWeekScheduleFetchError);

    let weekSchedule = useAppSelector(selectWeekSchedule);
    const {data, isPending, error} = useAPIFetch(fetchWeekSchedule, [currentWeek]);
    weekSchedule = weekSchedule ?? data;

    const dayItems = weekSchedule?.map(day =>
        <DayItem key={day.id} dayInfo={day} maxPeopleToShow={maxPeopleToShow} />
    )

    /* In case that data has not been fetched yet: */
    if (isPending) return <Preloader />

    /* In case that error happened while fetching: */
    if (error) return <div>{error}</div>

    return (
        <StyledContainer>
            {dayItems}
        </StyledContainer>
    );
}
