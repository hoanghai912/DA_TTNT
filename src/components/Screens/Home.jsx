import './Home.css';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderControl from '../HeaderControl/HeaderControl';
import Notification from '../Notification/Notification';
import { Routes, Route } from "react-router-dom";
import AirConditioner from '../ControlDevices/AirConditioner/AirConditioner'
import Door from '../ControlDevices/Door/Door'
import LightBulb from '../ControlDevices/LightBulb/LightBulb'
import Welcome from '../Welcome/Welcome'
import Signin from '../Signin/Signin'
import Signup from'../Signup/Signup'
import Heat from '../ReportStat/Heat/Heat'
import Humid from '../ReportStat/Humid/Humid'
import Light from '../ReportStat/Light/Light';
import Air from '../ReportStat/Air/Air';

import {useControlmode} from '../Context/ControlMode'
import { useLocation } from 'react-router-dom';
const Home = () => {
    const {controlmode} = useControlmode()
    const location = useLocation();
    return <div className="home-container">
        {/* {
            controlmode == null?
            <Header/>
                :
            <HeaderControl/>
            
        } */}
        {((location.pathname !== '/' && location.pathname !== '/signin') && location.pathname !== '/signup') && (controlmode == null?<Header/>:<HeaderControl/>)}
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/notification" element={<Notification/>}/>
                <Route path="/airconditioner" element={<AirConditioner/>}/>
                <Route path="/door" element={<Door/>}/>
                <Route path="/lightbulb" element={<LightBulb/>}/>
                <Route path='/temperature' element={<Heat/>}/>
                <Route path='/humidity' element={<Humid/>}/>
                <Route path='/light-intensive' element={<Light/>}/>
                <Route path='/air-quality' element={<Air/>}/>
            </Routes>
        {((location.pathname !== '/' && location.pathname !== '/signin') && location.pathname !== '/signup') && <Footer/>}
    </div>;
}
 
export default Home;