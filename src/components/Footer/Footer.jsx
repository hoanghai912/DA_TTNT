import './Footer.css';
import { AiOutlineBarChart } from 'react-icons/ai';
import { BsFillBellFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import {useControlmode} from '../Context/ControlMode'


const Footer = () => {
    const {setControlmode} = useControlmode()
    return <div className="footer-container">
        <Link to={"/dashboard"} className="reset-link" onClick={()=>setControlmode(null)}>
            <div className="home-icon">
                <img src={"./assets/home_icon.png"} alt="home"/>
            </div>
        </Link>
        <div className="report-notify">
            <Link to={"/temperature"} className="reset-link"  onClick={()=>setControlmode(null)}>
                <div className="nav-wrapper">
                    <AiOutlineBarChart className="report nav"/>
                    <p>Report & Statistic</p>
                </div>
            </Link>
            <Link to={"/notification"} className="reset-link"  onClick={()=>setControlmode(null)}>
                <div className="nav-wrapper">
                    <BsFillBellFill className="notify nav"/>
                    <p>Notification</p>
                </div>
            </Link>
        </div>
    </div>;
}
 
export default Footer;