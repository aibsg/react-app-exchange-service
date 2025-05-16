import "./IntroHeader.css"
import Button from "../Button/Button"
import logo from "../../../public/logo.svg"

export default function IntroHeader(){
    return(
        <header className="intro-header">
            <div className="header-container">
                <img src={logo} alt="logo" className="logo" />
                <div className="reg-container">
                    <Button text="Войти" className="login" href="/login"/>
                    <Button text="Зарегистрироваться" className="register" href="/register"/>
                </div> 
            </div> 
        </header>
    )
}