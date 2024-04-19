import { FunctionComponent } from "react";
import styled from "styled-components";

import { Heading } from "../../../common/Heading/Heading";
import { Schedule } from "./Schedule/Schedule";

const StyledParagraph = styled.p`
    text-align: center;
    margin-top: 70px;
    font-size: ${({ theme }) => theme.fonts.fontSize.md};
`

type ScheduleBlockProps = {};

export const ScheduleBlock: FunctionComponent<ScheduleBlockProps> = (props) => {
    return (
        <section>
            <Heading
                value="Расписание богослужений"
                id="schedule"
            />
            <StyledParagraph>Храм открыт ежедневно с 8:00 до 21:00</StyledParagraph>
            <Schedule />
        </section>
    );
}
