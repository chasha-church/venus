import { useEffect } from 'react';

export const useDisableScroll = (
    expanded: boolean,
    isMobileVersion: boolean
) => {
    useEffect(() => {
        if (expanded && isMobileVersion) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [expanded, isMobileVersion]);
};
