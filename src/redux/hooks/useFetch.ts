import { useAppDispatch } from './hooks';
import { useState } from 'react';
import { useEffect } from 'react';

type HookReturnType = {
    data: any,
    isPending: boolean,
    error: any,
};

export const useAPIFetch = (fetchMethod: Function, dependency: any): HookReturnType => {

    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(false);
    const [error, setError] = useState(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMethod([...dependency]));
    }, [...dependency]);

    return {data, isPending, error};
};
