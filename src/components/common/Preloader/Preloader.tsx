import React from "react";
import styled from "styled-components";
import { PreloaderIcon } from "../Icons/PreloaderIcon";

const StyledPreloader = styled.div`
    width: fit-content;
    margin: 50px auto;
    text-align: center;
`

export const Preloader: React.FunctionComponent<React.ComponentProps<'div'>> = ({ children, ...props }) => {
    return (
        <StyledPreloader {...props}>
            {
                children
                || <>
                    <PreloaderIcon />
                    <PreloaderText />
                </>
            }
        </StyledPreloader>
    );
}

const StyledPreloaderText = styled.p`
    font-size: 20px;
`

export const PreloaderText: React.FunctionComponent<React.ComponentProps<'p'>> = ({ children, ...props }) => {
    return (
        <StyledPreloaderText {...props}>
            {children || "Идет загрузка..."}
        </StyledPreloaderText>
    );
}
