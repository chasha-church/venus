import React from 'react'
import styled from "styled-components";
import chashaMergeImage from '../../../../../assets/images/chasha.svg';

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

    font-size: 2em;
    font-weight: 600;
    line-height: 1.4;
    color: black;

    border: 2px solid #0075BA;
    border-right: none;
    background: white;
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

    border: 2px solid #0075BA;
    background: white;
`;

const ChashaMerge = styled.img`
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
                <ChashaMerge src={chashaMergeImage}/>
            </MainTextWrapper>
            <DecorationEdge />
        </FlexContainer>
    )
}
