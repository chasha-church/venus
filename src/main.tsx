import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import App from './App';

import './index.css';
import { ErrorBoundary } from 'react-error-boundary';
import { AppErrorFallback } from './components/common/AppErrorFallback/AppErrorFallback';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary FallbackComponent={AppErrorFallback}>
            <Provider store={store}>
                <App />
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
);
