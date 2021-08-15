/*import {useEffect} from "react";

export const useWindowEvent = (type, listener, options) => {

    useEffect(() => {

        if (typeof listener !== 'function') {
            console.warn('listener is not a function');
            return undefined;
        }

        console.log('Component Did Mount ');

        window.addEventListener(type, listener, options);

        return () => {
            console.log('Component Did Unmount');
            window.removeEventListener(type, listener, options);
        };
    }, []);

};
*/