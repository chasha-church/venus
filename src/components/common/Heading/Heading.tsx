import React from 'react'
import styled from 'styled-components';
import headingShapeLeft from '../../../assets/images/HeadingShapeLeft.svg';
import headingShapeRight from '../../../assets/images/HeadingShapeRight.svg';
import { SvgContainer } from '../../Content/Home/NewsBlock/SvgContainer/SvgContainer';

type HeadingProps = {
    value: string;
}

const shapeColor = "#D9D9D9";

const StyledHeading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    align-items: center;
    
    margin: 70px 0 30px 0;
    font-size: 48px;
    text-align: center;
`;

// svg container to extend
// heading to extend

export const Heading: React.FC<HeadingProps> = ({ value }) => {
    return (
        <StyledHeading>
            <SvgContainer path={headingShapeLeft} color={shapeColor} />
            <span>{value}</span>
            <SvgContainer path={headingShapeRight} color={shapeColor} />
        </StyledHeading>
    )
}
