import { FunctionComponent } from "react";

import styled from "styled-components";
import { DayItem } from "./DayItem/DayItem";

import {
    fetchWeekSchedule, selectCurrentWeek, selectMaxPeopleToShow, selectWeekSchedule,
    selectWeekScheduleFetchError, selectWeekScheduleIsPending, WeekDay, WeekSchedule
} from "../../../../../redux/features/scheduleSlice";

import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks/hooks";
import { Preloader } from "../../../../common/Preloader/Preloader";
import { useAPIFetch } from "../../../../../redux/hooks/useAPIFetch";
import { APIError } from "../../../../service/APIError/APIError";

const StyledContainer = styled.div`
    margin-top: 70px;
`

type ScheduleProps = {};


export const Schedule: FunctionComponent<ScheduleProps> = ({ }) => {

    const maxPeopleToShow = useAppSelector(selectMaxPeopleToShow);
    const currentWeek = useAppSelector(selectCurrentWeek);
    const dispatch = useAppDispatch();

    const { data: weekSchedule, isPending, error: fetchError } = useAPIFetch(
        () => { dispatch(fetchWeekSchedule(currentWeek)) },
        [currentWeek],
        { data: selectWeekSchedule, isPending: selectWeekScheduleIsPending, error: selectWeekScheduleFetchError }
    );

    /* In case that data has not been fetched yet: */
    if (isPending) return <Preloader />

    /* In case that error happened while fetching: */
    if (fetchError) return <APIError error={fetchError} />

    const dayItems = weekSchedule?.map((day: WeekDay) =>
        <DayItem key={day.id} dayInfo={day} maxPeopleToShow={maxPeopleToShow} />
    )

    return (
        <StyledContainer>
            {dayItems}
        </StyledContainer>
    );
}
