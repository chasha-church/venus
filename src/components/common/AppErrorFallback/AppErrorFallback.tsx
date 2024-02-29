import {
    ErrorBoundary,
    FallbackProps,
    useErrorBoundary,
} from "react-error-boundary";

export function AppErrorFallback(props: FallbackProps) {
    const { error, resetErrorBoundary } = props;

    return (
        <div className="error-page min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-5xl font-semibold text-red-600 mb-4 leading-tight">К сожалению, произошла ошибка.<br />Приложение временно недоступно 🌍</h1>
                <p className="text-2xl text-gray-300 font-semibold">{error.message}</p>
                <button className="mt-8 py-2 px-3 bg-sidebar-blue text-white rounded-md font-medium" onClick={resetErrorBoundary}>
                    Перезагрузить страницу
                </button>
            </div>
        </div>
    );
}
