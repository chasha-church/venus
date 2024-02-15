import { FunctionComponent, useEffect } from "react";

import styled from "styled-components";
import { DayItem } from "./DayItem/DayItem";

import { fetchWeekSchedule, selectMaxPeopleToShow, selectWeekSchedule } from "../../../../../redux/features/scheduleSlice";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks/hooks";
import { Preloader } from "../../../../common/Preloader/Preloader";

const StyledContainer = styled.div`
    margin-top: 70px;
`

type ScheduleProps = {};

export const Schedule: FunctionComponent<ScheduleProps> = ({ }) => {

    const weekSchedule = useAppSelector(selectWeekSchedule);
    const maxPeopleToShow = useAppSelector(selectMaxPeopleToShow);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchWeekSchedule());
    }, []);

    const dayItems = weekSchedule?.map(day =>
        <DayItem key={day.id} dayInfo={day} maxPeopleToShow={maxPeopleToShow} />
    )


    /* In case that data has not been fetched yet: */
    if (!weekSchedule) return <Preloader />

    return (
        <StyledContainer>
            {dayItems}
        </StyledContainer>
    );
}