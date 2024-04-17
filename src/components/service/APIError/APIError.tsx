import styled from "styled-components";
import React from "react";

const StyledError = styled.div`
    text-align: center;
    padding: 20px;
    border: 3px solid rgba(0, 117, 186, 1);
    max-width: 700px;
    margin: 50px auto;

    & h1 {
        font-size: 24px;
        font-weight: 600;
    }

    & pre {
        color: red;
        margin: 30px 0;
        font-size: 24px;
    }
`;

interface ErrorFallbackProps extends React.ComponentProps<'div'> {
    error?: string;
}

export const APIError: React.FunctionComponent<ErrorFallbackProps> = ({ error = "", children }) => {

    return (
        <StyledError>
            <h1>К сожалению, произошла ошибка:</h1>
            <pre color="red">{error}</pre>
            {children}
        </StyledError>
    );
}
