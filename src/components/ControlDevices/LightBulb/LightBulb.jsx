import './LightBulb.css';
import {BsLightningFill} from 'react-icons/bs';
import {FaSyncAlt} from 'react-icons/fa';
import ReactSwitch from 'react-switch';
import { useState } from 'react';
import { SketchPicker  } from 'react-color';

const LightBulb = () => {
    const [lightStatus, setLightStatus] = useState(true)
    const [lightColor, setLightColor] = useState({
        background: '#fff',
    })
    const handleLightChange = (val) => {
        setLightStatus(val)
    }
    const handleChange = (color) => {
        setLightColor(color.hex)
    }
    return <div className="light-container">
        <div className="light-mode-selection">
            <div className="manual-mode mode">
                <BsLightningFill/>
                <p>Manual</p>
            </div>
            <div className="auto-mode mode">
                <FaSyncAlt/>
                <p>Heat</p>
            </div>
        </div>
        <div className="color-place" style={{backgroundColor:lightColor}}>
            <SketchPicker 
                color={ lightColor}
                onChangeComplete={ handleChange } 
            />
        </div>
        <div className="control-light">
            <ReactSwitch
                checked={lightStatus}
                onChange={handleLightChange}
                className="control-btn"
                onColor="#edeea0"
                onHandleColor="#eaed5f"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}  
            />
            <p>Turn on</p>
        </div>
    </div>;
}
 
export default LightBulb;