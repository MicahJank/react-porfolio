import { useState } from 'react';

export const useSessionStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        // const item = window.localStorage.getItem(key);
        const item = window.sessionStorage.getItem(key);

        return item ? item : initialValue;
    });

    const setValue = value => {
        setStoredValue(value);
        window.sessionStorage.setItem(key, value);
    };

    return [storedValue, setValue];
}