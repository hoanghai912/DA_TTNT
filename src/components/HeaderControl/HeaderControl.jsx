import './HeaderControl.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
// import { BsSun } from 'react-icons/bs';
// import { BsMoonStars } from 'react-icons/bs';
import { SlMagnifier } from 'react-icons/sl';
import {useControlmode} from '../Context/ControlMode'
import { Link } from 'react-router-dom';

const HeaderControl = () => {
    const {controlmode,setControlmode} = useControlmode()
    return <div className="header-container">
        <Link to={"/dashboard"}  className="back-dashboard"  onClick={()=>setControlmode(null)}>
            <AiOutlineArrowLeft/>
        </Link>
        <p className="device-name">{controlmode}</p>
        <SlMagnifier className="search"/>
    </div>;
}
 
export default HeaderControl;