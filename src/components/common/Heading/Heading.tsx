import React from 'react'
import styled from 'styled-components';
// @ts-ignore
import { SvgLoader, SvgProxy } from 'react-svgmt';

import HeadingShapeLeft from '../../../assets/images/HeadingShapeLeft.svg';
import HeadingShapeRight from '../../../assets/images/HeadingShapeRight.svg';

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

    const shapeColor = "#D9D9D9";
    return (
        <StyledHeading {...props}>
            {
                children
                || <>
                    <HeadingIcon>
                        <SvgLoader path={HeadingShapeLeft}>
                            <SvgProxy selector="rect" fill={shapeColor} />
                        </SvgLoader>
                    </HeadingIcon>
                    <HeadingText>{value}</HeadingText>
                    <HeadingIcon>
                        <SvgLoader path={HeadingShapeRight}>
                            <SvgProxy selector="rect" fill={shapeColor} />
                        </SvgLoader>
                    </HeadingIcon>
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

const StyledHeadingIcon = styled.div``;

export const HeadingIcon: React.FunctionComponent<React.ComponentProps<'div'>> = ({ children, ...props }) => {
    return (
        <StyledHeadingIcon {...props}>
            {children}
        </StyledHeadingIcon>
    )
}