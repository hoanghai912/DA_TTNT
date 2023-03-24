import './Welcome.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
    // const header = document.getElementsByClassName('header-container')
    // header.item(0).style.display = 'none'
    // const footer = document.getElementsByClassName('footer-container')
    // footer.item(0).style.display = 'none'

    return (
    <div className="welcome-container">
        <img className="welcome-logo" src={"./assets/icon/logo_home_button.png"} alt="logo"/>
        <div className="logo-tex">
            <p className="smart-tex">smart </p>
            <p className="home-tex"> HOME</p>
        </div>

        <img className="houses-logo" src={"./assets/icon/houses.png"} alt="logo"/>
        <div className="rectangle-house">
            <Link to='/signin' style={{textDecoration:'none'}}>
                <div className="sign-inup-button sign-in">
                    Sign in
                </div>
            </Link>
            
            <Link to='/signup' style={{textDecoration:'none'}}>
                <div className="sign-inup-button sign-up" >
                    Sign up
                </div>
            </Link>
            

        </div>
        
    </div>
    )
}

export default Welcome;