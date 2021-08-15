import {useEffect} from 'react';

export const useDocumentTitle = (title) => {

    useEffect(() => {
        if (typeof title === 'string' && title.trim().length > 0) {
            //console.log('Did update');
            document.title = title;
        }

    }, [title]);

};
