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
    padding: 15px 0 15px 30px;

    font-size: 2em;
    color: black;


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
    background: white;
`;

const ChashaMerge = styled.img`
    position: absolute;
    left: 40%;
    top: -30%;
    z-index: 1;
`;

export const MainLable: React.FC<MainLable> = () => {
    return (
        <FlexContainer>
            <MainTextWrapper>
                Храм в честь иконы Божьей Матери “Неупиваемая Чаша”
                <ChashaMerge src={chashaMergeImage}/>
            </MainTextWrapper>
            <DecorationEdge></DecorationEdge>
        </FlexContainer>
    )
}
