import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { Link } from "react-router-dom";
import './Signup.css';

const Signin = () => {
    const [inputs, setInputs] = useState({});

    const Navigate = useNavigate();

    const handleChange = (event) =>
    {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }


    const handleClick = function(event)
    {
        event.preventDefault();
        if ((undefined !== inputs.username && undefined !== inputs.password) && undefined !== inputs.retype) {
            Navigate("/Dashboard");
            
        }
        else
        {
            window.alert("Tài khoản đăng nhập hoặc mật khẩu sai");
            document.getElementsByClassName("loginForm")[0].reset();
        }
    }

    return (
    <div className="Signin-container">
        <div className="rectangle">
            <img className="houses-logo-wit" src={"./assets/icon/houses-wit.png"} alt="logo"/>
        </div>
          
        <p className="title-signin">Let's get Started!</p>

        <br />
        <div >
            <form className="loginForm">
                <div className="input-icon">
                    <i className="icon"><FaRegUserCircle></FaRegUserCircle></i>
                    <input type="text" placeholder="Username" name="username" className="username" onChange={ handleChange } /> <br />
                </div>
                <div className="line-break"></div>

                <div className="input-icon">
                    <i className="icon"><FaLock></FaLock></i>
                    <input type="password" placeholder="Password" name="password" className="password" onChange={ handleChange } />
                </div>
                <div className="line-break"></div>

                <div className="input-icon">
                    <i className="icon"><FaLock></FaLock></i>
                    <input type="password" placeholder="Re-type Password" name="retype" className="password" onChange={ handleChange } />
                </div>
                
                
                <div className="line-break"></div>
                <img onClick = {handleClick} className="submit-signinup" src={"./assets/icon/submit_icon.png"} alt="logo"/>
            </form>
        </div> 
        
        <div className="signin-text">
            <p>or </p>
            <Link to='/signin'>
                <p className="signintext">sign in!</p>
            </Link>
            
        </div>
    </div>
    )
}

export default Signin;