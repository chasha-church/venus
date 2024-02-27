import { FunctionComponent } from "react";
import styled from "styled-components";

import { Heading } from "../../../common/Heading/Heading";
import { Schedule } from "./Schedule/Schedule";
import { ErrorBoundary } from "react-error-boundary";

const StyledParagraph = styled.p`
    text-align: center;
    margin-top: 70px;
    font-size: 24px;
`

type ScheduleBlockProps = {};

export const ScheduleBlock: FunctionComponent<ScheduleBlockProps> = ({ }) => {
    return (
        <section>
            <Heading value="Расписание богослужений" />
            <StyledParagraph>Храм открыт ежедневно с 8:00 до 21:00</StyledParagraph>
            <Schedule />
        </section>
    );
}
