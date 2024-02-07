import { FunctionComponent } from "react";

import styled from "styled-components";


const StyledContainer = styled.div`
    max-width: 900px;

    margin: 0 auto;
    margin-bottom: 15px;
    padding: 15px;

    font-size: 18px;

    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.25);
`

const StyledHeader = styled.div`
    display: flex;
    align-items: baseline;

    & b {
        font-size: 28px;
        font-weight: 600;
        margin-right: 5px;
    }

    & span {
        margin: 0 15px;
        position: relative;
        top: -1px;
    }
`
const StyledDayWord = styled.p`
    margin-top: 1px;
    position: relative;
    left: -2px;
`

const StyledInfoItems = styled.ul`
    margin-top: 25px;
`

const StyledInfoItem = styled.li`
    & time {
        font-size: 20px;
    }
`


type ScheduleItemProps = {
    day?: string;
};

export const ScheduleItem: FunctionComponent<ScheduleItemProps> = ({ day = "среда" }) => {

    return (
        <StyledContainer>
            
            <StyledHeader>
                <time>
                    <b>23</b> августа
                </time>
                <span>—</span>
                <p>Попразднство Преображения. Мчч. архидиакона Лаврентия и иже с ним (258)</p>
            </StyledHeader>

            <StyledDayWord>({day})</StyledDayWord>

            <StyledInfoItems>
                <StyledInfoItem>
                    <time>9.00</time> – <span>Литургия</span>
                </StyledInfoItem>
            </StyledInfoItems>

        </StyledContainer>
    );
}