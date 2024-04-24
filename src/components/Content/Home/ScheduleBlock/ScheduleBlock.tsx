import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Heading } from '../../../common/Heading/Heading';
import { Schedule } from './Schedule/Schedule';

const StyledParagraph = styled.p`
    text-align: center;
    margin-top: 70px;
    font-size: ${({ theme }) => theme.fonts.fontSize.md};
    line-height: ${({ theme }) => theme.fonts.fontSize.md};
`;

type ScheduleBlockProps = {};

export const ScheduleBlock: FunctionComponent<ScheduleBlockProps> = (props) => {
    const handleParentHover = (e: React.MouseEvent) => {
        debugger;
        console.log('Parent hovered');
        console.log(e.target);
    };

    const handleChildHover = (e: React.MouseEvent) => {
        console.log('Child hovered');
        console.log(e.target);
        // e.stopPropagation();
    };
    return (
        <section>
            <Heading
                value="Расписание богослужений"
                id="schedule"
            />
            <StyledParagraph>
                Храм открыт ежедневно с 8:00 до 21:00
            </StyledParagraph>
            <Schedule />
            <div
                onMouseEnter={handleParentHover}
                onMouseLeave={handleParentHover}
                style={{
                    padding: '2em',
                    backgroundColor: 'cyan',
                    marginTop: '2em',
                }}
            >
                <button
                    onMouseEnter={handleChildHover}
                    onMouseLeave={handleChildHover}
                    style={{
                        position: 'relative',
                        top: '-3em',
                        backgroundColor: '#00AA00',
                        padding: '1em',
                    }}
                >
                    Click me
                </button>
            </div>
        </section>
    );
};
