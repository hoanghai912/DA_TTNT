import './Dashboard.css';
import React, { useState } from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import { BsFillDoorOpenFill } from 'react-icons/bs';
import { TbAirConditioningDisabled } from 'react-icons/tb';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import ReactSwitch from 'react-switch';
import { Link } from 'react-router-dom';

import {useControlmode} from '../Context/ControlMode'
    
const Dashboard = () => {
    const {setControlmode} = useControlmode()
    const [airChecked, setAirChecked] = useState(true);
    const [doorChecked, setDoorChecked] = useState(true);
    const [lightChecked, setLightChecked] = useState(true);
    const [deviceScreenClass, setDeviceScreenClass] = useState("device-screen-data tempe-screen-data");
    const handleAirChange = val => {
        setAirChecked(val)
    }
    const handleDoorChange = val => {
        setDoorChecked(val)
    }
    const handleLightChange = val => {
        setLightChecked(val)
    }
    return <div className="dashboard-container">
        <div className={deviceScreenClass}>
            <p>22°C</p>
            <div className="device-nav">
                <img alt="tempe" src={'./assets/icon/db_temp_bubble.png'} className="tempe icon-nav" 
                    onClick={()=>{
                        setDeviceScreenClass('device-screen-data tempe-screen-data')
                    }}
                />
                <img alt="humid" src={'./assets/icon/db_humid_bubble.png'} className="humid icon-nav"
                    onClick={()=>{
                        setDeviceScreenClass('device-screen-data humid-screen-data')
                    }}
                />
                <img alt="light" src={'./assets/icon/db_light_bubble.png'} className="light icon-nav"
                    onClick={()=>{
                        setDeviceScreenClass('device-screen-data light-screen-data')
                    }}
                />
            </div>
        </div>
        <div className="devices">
            <Link to={"/airconditioner"} className="device-container air-cond">
                <div className="first-part air-part">
                    <TbAirConditioningDisabled className="air-icon" onClick={()=>setControlmode("Air Conditioner")}/>
                    <ReactSwitch
                        checked={airChecked}
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
                </div>
                <div className="device-wrapper" onClick={()=>setControlmode("Air Conditioner")}>
                    <p className="device-name">Air Conditioner</p>
                    <p className="device-status">Connected</p>
                </div>
            </Link>

            <Link to={"/lightbulb"} className="device-container light-bulb">
                <div className="first-part light-part">
                    <FaRegLightbulb className="light-icon"  onClick={()=>setControlmode("Light Bulb")}/>
                    <ReactSwitch
                        checked={lightChecked}
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
                </div>
                <div className="device-wrapper"  onClick={()=>setControlmode("Light Bulb")}>
                    <p className="device-name">Light Bulb</p>
                    <p className="device-status">Connected</p>
                </div>
            </Link>

            <Link to={"/door"} className="device-container door">
                <div className="first-part door-part">
                    <BsFillDoorOpenFill className="door-icon" onClick={()=>setControlmode("Door")}/>
                    <ReactSwitch
                        checked={doorChecked}
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
                </div>
                <div className="device-wrapper" onClick={()=>setControlmode("Door")}>
                    <p className="device-name">Door</p>
                    <p className="device-status">Connected</p>
                </div>
            </Link>

            <div className="device-container add-device">
                <div className="add-box">
                    <BsFillPlusCircleFill className="add-icon"/>
                    <p>Add Device</p>
                </div>
            </div>
        </div>
    </div>;
}
 
export default Dashboard;