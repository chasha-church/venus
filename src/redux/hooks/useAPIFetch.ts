import { useAppSelector } from './hooks';
import { SelectorType } from './../features/scheduleSlice';
import { useEffect } from 'react';


/* This hook manages fetching the data and returning it(with errors and pending status). The logic happens in Redux store */
export const useAPIFetch = <X, Y, Z>(
    effectCallback: () => void,
    effectDeps: any[],
    selectors: { data: SelectorType<X>, isPending: SelectorType<Y>, error: SelectorType<Z> }
) => {

    const data = useAppSelector(selectors.data);
    const isPending = useAppSelector(selectors.isPending);
    const error = useAppSelector(selectors.error);

    useEffect(() => {
        effectCallback();
    }, [...effectDeps]);

    return { data, isPending, error };
};
