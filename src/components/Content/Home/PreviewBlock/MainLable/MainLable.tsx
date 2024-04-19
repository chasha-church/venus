import React from 'react'
import styled from "styled-components";
import { ChashaIcon } from '../../../../common/Icons/ChashaIcon';

type MainLable = {}

const FlexContainer = styled.div`
    display: flex;
    height: fit-content;
    
    position: absolute;
    top: 10%;
    z-index: 1;
`

const MainTextWrapper = styled.div`
    display: flex;
    justify-content: center;
    
    flex: 4;
    padding: 25px 0 30px 15px;

    font-size: ${({ theme }) => theme.fonts.fontSize.lg};
    font-weight: 600;
    line-height: 1.4;
    color: black;

    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-right: none;
    background: ${({ theme }) => theme.colors.background};
`;

const DecorationEdge = styled.div`
    flex: 6;
    width: 10px;
    display: block;
    position: relative;
    left: -50%;
    min-width: 300px;

    z-index: -1;
    transform: skew(-30deg);

    border: 2px solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.background};
`;

const ChashaMerge = styled.div`
    position: absolute;
    left: 40%;
    top: 5%;
    z-index: 1;
`;

export const MainLable: React.FC<MainLable> = () => {
    return (
        <FlexContainer>
            <MainTextWrapper>
                <h1>Храм в честь иконы Божьей Матери “Неупиваемая Чаша”</h1>
                <ChashaMerge>
                    <ChashaIcon width={168} height={232}/>
                </ChashaMerge>
            </MainTextWrapper>
            <DecorationEdge />
        </FlexContainer>
    )
}
