import React from "react";
import styled from "styled-components";

import ImagePreloader from "../../../assets/images/Preloader.svg";

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
                    <PreloaderImage />
                    <PreloaderText />
                </>
            }
        </StyledPreloader>
    );
}

const StyledPreloaderImage = styled.img``

/* When the Components that calls Preloader does not pass a src attribute */
StyledPreloaderImage.defaultProps = {
    src: ImagePreloader,
};

export const PreloaderImage: React.FunctionComponent<React.ComponentProps<'img'>> = ({ ...props }) => {
    return (
        <StyledPreloaderImage {...props} />
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
