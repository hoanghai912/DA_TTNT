import './AirConditioner.css';
import {FaWater} from 'react-icons/fa'
import {FaRegSnowflake} from 'react-icons/fa'
import {FaSyncAlt} from 'react-icons/fa'
import CircularSlider from '@fseehawer/react-circular-slider';
import {useState} from 'react';
import ReactSwitch from 'react-switch';


const AirConditioner = () => {
    const [temperature, setTemperature] = useState(0)
    const [airStatus, setAirStatus] = useState(true)

    
    const handleAirChange = (val) => {
        setAirStatus(val)
    }
    return <div className="air-cond-container">
        <div className="mode-selection">
            <div className="cool-mode mode">
                <FaRegSnowflake/>
                <p>Cool</p>
            </div>
            <div className="heat-mode mode">
                <FaWater/>
                <p>Heat</p>
            </div>
            <div className="auto-mode mode">
                <FaSyncAlt/>
                <p>Auto</p>
            </div>
        </div>

        <div className="temperature-selection">
            <CircularSlider
                label="Temperature"
                labelColor="#005a58"
                labelFontSize='2rem'
                knobColor="#0F94DA"
                knobSize={28}
                progressColorFrom="#00bfbd"
                progressColorTo="#009c9a"
                progressSize={18}
                trackColor="#eeeeee"
                trackSize={15}
                data={Array.from(Array(100).keys()).map(e=>(e+1) + " °C")} //...
                dataIndex={10}
                onChange={ value => { setTemperature(value); } }
            />
            <ReactSwitch
                checked={airStatus}
                onChange={handleAirChange}
                className="control-btn"
                onColor="#89dbf4"
                onHandleColor="#2dc2f0"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}  
            />
            <p>On</p>
        </div>

        <div className="air-option-container"> 
            <div className="direction-option-container">
                <p>Direction</p>
                <div className="direction-option">
                    <p>On</p>
                    <p>Off</p>
                </div>
            </div>

            <div className="direction-option-container">
                <p>Swing</p>
                <div className="direction-option">
                    <p>Swing</p>
                    <p>Fixed</p>
                </div>
            </div>
        </div>
    </div>;
}
 
export default AirConditioner;