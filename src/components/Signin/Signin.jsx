import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { Link } from "react-router-dom";
import './Signin.css';

const Signin = () => {
    const [inputs, setInputs] = useState({});

    const Navigate = useNavigate();

    const handleChange = (event) =>
    {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }


    const handleClick = (event) =>
    {
        event.preventDefault();
        if ('abc' === inputs.username && 'abc' === inputs.password) {
            Navigate("/dashboard");
            
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
          
        <p className="title-signin">Welcome Back!</p>

        <br />
        <div >
            <form className="loginForm">
                <div className="input-icon">
                    <i className="icon"><FaRegUserCircle></FaRegUserCircle></i>
                    <input type="text" placeholder="Username" name="username" className="username" onChange={ handleChange } /> <br />
                </div>
                <div className="line-break"></div>
                <br />

                <div className="input-icon">
                    <i className="icon"><FaLock></FaLock></i>
                    <input type="password" placeholder="Password" name="password" className="password" onChange={ handleChange } />
                </div>
                
                
                <div className="line-break"></div>
                <img onClick = {handleClick} className="submit-signinup" src={"./assets/icon/submit_icon.png"} alt="logo"/>
            </form>
        </div> 
        
        <div className="signup-text">
            <p>or </p>
            <Link to='/signup'>
                <p className="signuptext">sign up!</p>
            </Link>
            
        </div>
    </div>
    )
}

export default Signin;