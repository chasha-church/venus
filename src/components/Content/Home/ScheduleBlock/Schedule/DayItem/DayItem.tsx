import { FunctionComponent } from "react";

import styled from "styled-components";
import { WeekDay } from "../../../../../../redux/features/scheduleSlice";
import { getMonthName } from "../../../../../../utils/getMonthName";
import { DateHelper } from "../../../../../../utils/DateHelper";


const StyledContainer = styled.div<{ $isToday: boolean; }>`
    max-width: 900px;

    margin: 0 auto;
    margin-bottom: 15px;
    padding: 15px;

    font-size: ${({ theme }) => theme.fonts.fontSize.sm};

    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.25);

    border: ${props => props.$isToday
        ? `2px solid ${props.theme.colors.primaryTextColor}`
        : "none"};
`

const StyledHeader = styled.div`
    display: flex;
    align-items: baseline;
`

const StyledDay = styled.div`

    & span {
        display: flex;
        flex-wrap: no-wrap;
        align-items: baseline;
    }

    & b {
        font-size: ${({ theme }) => theme.fonts.fontSize.lg};
        font-weight: 600;
        margin-right: 5px;
    }

    & p {
        margin-top: 5px;
        position: relative;
        left: -2px;
    }
`

const StyledDash = styled.span`
    margin: 0 15px;
    position: relative;
    top: -1px;
`

const StyledDayInfo = styled.p`
    line-height: 1.5;
`

const StyledHoliday = styled.span`
    color: ${({ theme }) => theme.colors.primaryTextColor};
`

const StyledInfoItems = styled.ul`
    margin-top: 30px;
`

const StyledInfoItem = styled.li`
    margin-top: 10px;
    & time {
        font-size: ${({ theme }) => theme.fonts.fontSize.md};
    }
`

type DayItemProps = {
    dayInfo: WeekDay;
    maxPeopleToShow: number;
    children?: React.ReactNode;
};

export const DayItem: FunctionComponent<DayItemProps> = (
    { dayInfo, maxPeopleToShow, children }
) => {

    const [day, month] = dayInfo.date.split("-").reverse().slice(0, 2);

    const currentDay = DateHelper.getCurrentDay();

    const displayMonth = (month: number): string => {
        return getMonthName(month);
    }

    const displayFirstLetterCapitalized = (str: string): string => {
        return str[0].toUpperCase() + str.slice(1);
    }

    return (
        <StyledContainer $isToday={Number(day) === currentDay}>

            <StyledHeader>
                <StyledDay>
                    <span><b>{Number(day)}</b> {displayMonth(Number(month))}</span>
                    <p>({dayInfo.day_of_week})</p>
                </StyledDay>
                <StyledDash>—</StyledDash>
                <StyledDayInfo>
                    {dayInfo.holidays.map(holiday => <StyledHoliday key={holiday.name}>{holiday.name}. </StyledHoliday>)}
                    {dayInfo.people.slice(0, maxPeopleToShow).map(person =>
                        <span key={person.name}>{displayFirstLetterCapitalized(person.name)}. </span>
                    )}
                </StyledDayInfo>
            </StyledHeader>

            <StyledInfoItems>
                {dayInfo.events?.map(event =>
                    <StyledInfoItem key={`${event.time}-${event.title}`}>
                        <time>{event.time}</time> – <span>{event.title}</span>
                    </StyledInfoItem>
                )}
                {/* When no events */}
                {!dayInfo.events && <StyledInfoItem>Богослужений нет</StyledInfoItem>}
            </StyledInfoItems>

            {children}

        </StyledContainer>
    );
}
