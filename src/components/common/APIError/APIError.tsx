import styled from "styled-components";

const StyledError = styled.div`
    text-align: center;
    padding: 20px;
    border: 3px solid rgba(0, 117, 186, 1);
    max-width: 700px;
    margin: 50px auto;

    & h1 {
        font-size: ${props => props.theme.fonts.fontSize.md};
        font-weight: 600;
    }

    & pre {
        color: red;
        margin: 30px 0;
        font-size: ${props => props.theme.fonts.fontSize.md};
    }
`;

interface ErrorFallbackProps extends React.ComponentProps<'div'> {
    error?: string;
}

export const APIError: React.FunctionComponent<ErrorFallbackProps> = ({ error = "", children }) => {

    return (
        <StyledError>
            <span>К сожалению, произошла ошибка:</span>
            <pre color="red">{error}</pre>
            {children}
        </StyledError>
    );
}
