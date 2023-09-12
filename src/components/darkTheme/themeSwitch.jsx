import { useState } from 'react';
import './themeSwitch.css'

export default function ThemeSwitch(){
    const [theme, setTheme] = useState('dark');
    const HandleButtonClick = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
        const root = document.documentElement;
        root.className === 'dark' ? root.removeAttribute('class') : root.className = 'dark';
    }

    return <span className="tt" onClick={HandleButtonClick}>{theme==='dark' ? "🌙" : "☀️"}</span>
}