import React from 'react'
import styled from 'styled-components';
import headingShapeLeft from '../../../assets/images/HeadingShapeLeft.svg';
import headingShapeRight from '../../../assets/images/HeadingShapeRight.svg';
import { SvgContainer } from '../../Content/Home/NewsBlock/SvgContainer/SvgContainer';

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

interface HeadingProps extends React.ComponentProps<'div'> {
    value?: string;
}

export const Heading: React.FunctionComponent<HeadingProps> = ({ value = "", children, ...props }) => {
    return (
        <StyledHeading {...props}>
            {
                children
                || <>
                    <HeadingIcon />
                    <HeadingText>{value}</HeadingText>
                    <HeadingIcon type={"right"} />
                </>
            }
        </StyledHeading>
    )
}

const StyledHeadingText = styled.span``;

export const HeadingText: React.FunctionComponent<React.ComponentProps<'span'>> = ({ children, ...props }) => {
    return (
        <StyledHeadingText {...props}>
            {children}
        </StyledHeadingText>
    )
}

const StyledHeadingIcon = styled.img<HeadingIconProps>`
   transform: ${props => props.type === "right" ? "scaleX(-1)" : "" };
`;

/* When the Compoennts that calls Heading does not pass a src attribute */
StyledHeadingIcon.defaultProps = {
    src: headingShapeLeft,
};

interface HeadingIconProps extends React.ComponentProps<'img'> {
    type?: string;
}

export const HeadingIcon: React.FunctionComponent<HeadingIconProps> = ({ children, ...props }) => {
    return (
        <StyledHeadingIcon {...props}>
            {children}
        </StyledHeadingIcon>
    )
}

{/* <SvgContainer path={headingShapeLeft} color={shapeColor} />
            <span>{value}</span>
            <SvgContainer path={headingShapeRight} color={shapeColor} /> */}

// const shapeColor = "#D9D9D9";
