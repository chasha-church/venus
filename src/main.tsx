import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import App from './App';

import './index.css';
import { AppErrorFallback } from './components/service/AppErrorFallback/AppErrorFallback';
import type {Router as RemixRouter} from '@remix-run/router/dist/router';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Home} from './components/Content/Home/Home';
import {RouteError} from './components/service/RouteError';
import {News} from './components/Content/News/News';
import {defaultTheme} from './styles/Theme';
import {ThemeProvider} from 'styled-components';
import {ErrorBoundary} from 'react-error-boundary';
import {NewsDetails} from './components/Content/News/NewsDetails/NewsDetails';
import { Signin } from './components/Content/Auth/Signin';

const router: RemixRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: (
            <ThemeProvider theme={defaultTheme}>
                <RouteError />
            </ThemeProvider>
        ),
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'news/',
                children: [
                    {
                        path: '',
                        element: <News />,
                    },
                    {
                        path: ':newsContentId',
                        element: <NewsDetails/>,
                    },
                ],
            },
            {
                path: 'auth',
                children: [
                    {
                        path: 'signin',
                        element: <Signin />,
                    },
                ],
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
    </React.StrictMode>
);
