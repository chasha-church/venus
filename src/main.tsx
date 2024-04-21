import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import App from './App';

import './index.css';
import { ErrorBoundary } from 'react-error-boundary';
import { AppErrorFallback } from './components/service/AppErrorFallback/AppErrorFallback';
import type {Router as RemixRouter} from '@remix-run/router/dist/router';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Home} from './components/Content/Home/Home';
import {RouteError} from './components/service/RouteError';
import {News} from './components/Content/News/News';

const router: RemixRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <RouteError/>,
        children: [
            {
                path: '',
                element: <Home/>,
            },
            {
                path: 'news/',
                children: [
                    {
                        path: '',
                        element: <News/>,
                    },
                    {
                        path: ':newsContentId',
                        element: <News/>,
                    },
                ]
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary FallbackComponent={AppErrorFallback}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>,
);
