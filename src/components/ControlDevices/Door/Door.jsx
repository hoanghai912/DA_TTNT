import './Door.css';
import {FaHandPaper} from 'react-icons/fa';
import {FaSyncAlt} from 'react-icons/fa';
import ReactSwitch from 'react-switch';
import { useState } from 'react';
const Door = () => {
    const [doorStatus, setDoorStatus] = useState(true)

    const handleDoorChange = (val) => {
        setDoorStatus(val)
    }
    return <div className="door-container">
        <div className="door-mode-selection">
            <div className="manual-mode mode">
                <FaHandPaper/>
                <p>Manual</p>
            </div>
            <div className="auto-mode mode">
                <FaSyncAlt/>
                <p>Auto</p>
            </div>
        </div>
        <div className="camera-place">
            <p>Camera</p>
        </div>
        <div className="control-door">
            <ReactSwitch
                checked={doorStatus}
                onChange={handleDoorChange}
                className="control-btn"
                onColor="#eab4a2"
                onHandleColor="#E67C5A"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}  
            />
            <p>Unlock</p>
        </div>
    </div>;
}
 
export default Door;