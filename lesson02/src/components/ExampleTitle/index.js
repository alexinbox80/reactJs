import {useEffect, useState} from 'react';
import {useDocumentTitle} from '../../hooks/useDocumentTitle';


export const ExampleTitle = (props) => {
    const [title, setTitle] = useState('');

    const onChange = (event) => {

        //console.dir(event.target);

        setTitle(event.target.value);

    };

    useEffect(() => {
        //console.log('Did mount');
        setTitle(document.title);
    }, []);

    useDocumentTitle(title);

    return (
        <div>
            <input value={title} onChange={onChange} type="text"/>
        </div>
    );
};

