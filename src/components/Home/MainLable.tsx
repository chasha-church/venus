import React from 'react'
import styled from "styled-components";
import chashaMergeImage from '../../assets/images/chasha.svg';


type MainLable = {}

const FlexContainer = styled.div`
    display: flex;
    height: fit-content;
`

const MainText = styled.div`
    flex: 4;

    padding-left: 30px;

    font-size: 4vh;
    font-family: 'Oswald', serif;
    color: black;

    background: rgb(9, 189, 212);
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
    background: rgb(9, 189, 212);
`;

const ChashaMerge = styled.img`
    position: absolute;
    left: 44%;
    top: 0;
    z-index: 1;
`;

export const MainLable: React.FC<MainLable> = () => {
    return (
        <div>
            <FlexContainer>
                <MainText>Храм в честь иконы Божьей Матери “Неупиваемая Чаша”
                    <ChashaMerge src={chashaMergeImage}/>
                </MainText>
                <DecorationEdge></DecorationEdge>
            </FlexContainer>
        </div>
    )
}
