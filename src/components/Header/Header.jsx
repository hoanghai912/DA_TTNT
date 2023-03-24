import './Header.css';
import { AiOutlineMenu } from 'react-icons/ai';
// import { BsSun } from 'react-icons/bs';
// import { BsMoonStars } from 'react-icons/bs';
import { SlMagnifier } from 'react-icons/sl';
import {useState} from 'react'
    

const Header = () => {
    const [mainTheme,setMainTheme] = useState(true)
    const [menuClass,setMenuClass] = useState(true)
    return <div className="header-container">
        <AiOutlineMenu className={menuClass?"menu":"menu-tranform"} onClick={()=>setMenuClass((state)=>!state)}/>
        <div className="search-moon-sun">
            {
                mainTheme?
                <img alt="sun" src={'./assets/icon/top_db_day_sun_icon.png'} className="sun theme" onClick={() => setMainTheme(false)}/>
                :
                <img alt="sun" src={'./assets/icon/top_db_night_moon_icon.png'} className="moon theme" onClick={() => setMainTheme(true)}/>
            }
            <SlMagnifier className="search"/>
        </div>
    </div>;
}
 
export default Header;