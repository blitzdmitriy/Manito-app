import { Link } from 'react-router'
import './Header.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="conteiner">
                <div className="header-box">
                    <Link to= {'/'} className="header-logo">
                        <img src="/image/logo.svg" alt="logo" />
                        <span>Manito</span>
                    </Link>
                    <div className="header-controls">
                        <button className="btn btn-outline">Вход и регистрация</button>
                        <button className="btn btn-primary">Подать объявление</button>
                    </div>

                    <div className="header-burger">
                        <img src="/image/burger.svg" alt="burger" />
                    </div>
                </div>
            </div>
        </header>
    )
}