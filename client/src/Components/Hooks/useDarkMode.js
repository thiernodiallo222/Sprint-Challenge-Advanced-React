import { useLocalStorage } from './useLocalStorage';
import React, { useEffect } from 'react';


export const useDarkMode = (DarkMode) => {
    const [mode, setMode] = useLocalStorage('DarkMode');

    useEffect(() => {

        if (mode === true) {
       document.body.classList.add('dark-mode');
        } else if (mode === false){
            document.body.classList.remove('dark-mode');
        }
}, [mode])
    
    return [mode, setMode];
}



