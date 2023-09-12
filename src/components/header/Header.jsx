import ThemeSwitch from "../darkTheme/themeSwitch"
import './header.css'

export default function Header(){
    
    return(
        <header>
            <div className="header">Title Of The Page</div>
            <img src="/favicon.ico" alt="logo"/>
            <ThemeSwitch/>
        </header>
    )
}