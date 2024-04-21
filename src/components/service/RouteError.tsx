import {useRouteError} from 'react-router-dom';
import React from 'react';

type RouteErrorProps = {}
type RouteErrorObject = {
    'statusText': string | null,
    'message': string | null,
}

export const RouteError: React.FC<RouteErrorProps> = ({}) => {
    const error:RouteErrorObject = useRouteError() as RouteErrorObject;
    console.error(error);

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred. </p>
            <p><i>{error.statusText || error.message}</i></p>
        </div>
    );
};
