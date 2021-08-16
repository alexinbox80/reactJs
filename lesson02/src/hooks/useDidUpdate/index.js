import {useEffect, useRef} from "react";

export const useDidUpdate = (fn, dependencies) => {
    const mounted = useRef(false);

    if (typeof fn !== 'function') {
        throw new Error('First argument must be a function');
    }

    useEffect(() => {
        /*
        if (typeof(fn) !== 'function') {
            console.warn('fn is not a function!');
            return undefined;
        }
        */

        if (mounted.current) {
            fn();
        } else {
            mounted.current = true;
        }
    }, dependencies);
};
