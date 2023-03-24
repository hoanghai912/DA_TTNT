import './Notification.css';
import {useState} from 'react';
import ReactSwitch from 'react-switch';
import {BsCheckAll} from 'react-icons/bs'
const Notification = () => {
    const [onStatusClass, setOnStatusClass] = useState("on-notify active-status")
    const [offStatusClass, setOffStatusClass] = useState("off-notify")
    const [checked,setChecked] = useState(true);

    const handleChange = (val) =>{
        setChecked(val);
    }
    return <div className="notification-container">
        <div className="status-bar">
            <p className="status-text">Status</p>
            <div className="notify-status">
                <p className={onStatusClass} 
                    onClick={()=>{
                        setOnStatusClass("on-notify active-status");
                        setOffStatusClass("off-notify");
                    }}
                >
                    ON
                </p>
                <p className={offStatusClass}
                    onClick={()=>{
                        setOnStatusClass("on-notify");
                        setOffStatusClass("off-notify active-status");
                    }}
                >
                    OFF
                </p>
            </div>
        </div>
        <div className="notify-time">
            <p className="label-table">Time</p>
            <div className="notify-label notify-task">
                <p className="notify-no">No.</p>
                <p className="notify-timetable">Timetable</p>
                <p className="notify-task-status">Status</p>
            </div>
            <div className="notify-task">
                <p className="notify-no">1</p>
                <p className="notify-timetable">12:00 AM (UTC+7)</p>
                <ReactSwitch
                        checked={checked}
                        onChange={handleChange}
                        className="control-btn"
                        onColor="#89dbf4"
                        onHandleColor="#2dc2f0"
                        handleDiameter={10}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={48}
                />
            </div>
            <div className="notify-task">
                <p className="notify-no">2</p>
                <p className="notify-timetable">5:00 AM (UTC+7)</p>
                <ReactSwitch
                        checked={checked}
                        onChange={handleChange}
                        className="control-btn"
                        onColor="#89dbf4"
                        onHandleColor="#2dc2f0"
                        handleDiameter={10}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={48}
                />
            </div>
        </div>
        <div className="notify-edit">
            <button className="notify-btn notify-add">Add</button>
            <button className="notify-btn notify-delete">Delete</button>
        </div>
        <dir className="notify-history">
            <p className="notify-history-label">History</p>
            <div className="notify-wrapper">
                <div className="notify-box">
                    <BsCheckAll className="notify-check"/>
                    <div className="notify-name">Notification 1</div>
                </div>
                <p className="notify-description">July 1st, 2022 at 12:00 AM (UTC+7)</p>
            </div>
            <p className="notify-history-label">History</p>
            <div className="notify-wrapper">
                <div className="notify-box">
                    <BsCheckAll className="notify-check"/>
                    <div className="notify-name">Notification 2</div>
                </div>
                <p className="notify-description">July 1st, 2022 at 5:00 AM (UTC+7)</p>
            </div>
        </dir>
    </div>;
}
 
export default Notification;