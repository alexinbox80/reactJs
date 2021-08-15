import {useState} from 'react';

export const useToggle = (initToggle) => {

    const [toggle, setToggle] = useState(initToggle || false);

    const onToggle = () => setToggle(!toggle);

    //console.log(toggle);

    return {
        toggle,
        setToggle,
        onToggle
    }
};
