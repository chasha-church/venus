import { useRouteError } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

type RouteErrorProps = {};
type RouteErrorObject = {
    statusText: string | null;
    message: string | null;
};

const StyledBlockQuote = styled.blockquote`
    margin: 8rem 4rem;
    font-size: ${({ theme }) => theme.fonts.fontSize.lg};
`;

export const RouteError: React.FC<RouteErrorProps> = ({}) => {
    const error: RouteErrorObject = useRouteError() as RouteErrorObject;
    console.error(error);

    return (
        <div>
            <h1>Ой!</h1>
            <p>Что-то пошло не так. </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <StyledBlockQuote>
                <p>
                    Мы редко думаем о том, что имеем, но всегда беспокоимся о
                    том, чего у нас нет.
                </p>
                <cite>Артур Шопенгауэр</cite>
            </StyledBlockQuote>

            <StyledBlockQuote>
                <p>
                    Свобода ничего не стоит, если она не включает в себя свободу
                    ошибаться.
                </p>
                <cite>Махатма Ганди</cite>
            </StyledBlockQuote>
        </div>
    );
};
