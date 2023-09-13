import ThemeSwitch from "../darkTheme/themeSwitch"
import './header.css'

export default function Header(){
    
    return(
        <header>
            <div className="header">Build Your CV</div>
            <img src="/favicon.ico" alt="logo"/>
            <ThemeSwitch/>
        </header>
    )
}