import React from 'react'
import styled from 'styled-components';

import { HeadingShapeLeftIcon } from '../Icons/HeadingShapeLeftIcon';
import { HeadingShapeRightIcon } from '../Icons/HeadingShapeRightIcon';

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
                    <HeadingIcon>
                        <HeadingShapeLeftIcon />
                    </HeadingIcon>
                    <HeadingText>{value}</HeadingText>
                    <HeadingIcon>
                        <HeadingShapeRightIcon />
                    </HeadingIcon>
                </>
            }
        </StyledHeading>
    )
}

const StyledHeadingText = styled.h2``;

export const HeadingText: React.FunctionComponent<React.ComponentProps<'h2'>> = (
    { children, ...props }
) => {
    return (
        <StyledHeadingText {...props}>
            {children}
        </StyledHeadingText>
    )
}

const StyledHeadingIcon = styled.div``;

export const HeadingIcon: React.FunctionComponent<React.ComponentProps<'div'>> = (
    { children, ...props }
) => {
    return (
        <StyledHeadingIcon {...props}>
            {children}
        </StyledHeadingIcon>
    )
}
