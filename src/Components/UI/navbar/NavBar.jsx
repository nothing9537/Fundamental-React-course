import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import classes from "./Navbar.module.css"
import { AuthContext } from './../../../context/index';
import MyButton from './../button/MyButton';

const Navbar = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem("auth")
    }

    return(
        <div className={ classes.navbar }>
            { isAuth
                ?
                <MyButton onClick={ logout }>
                Выйти
                </MyButton>
                :
                <div></div>
            }
            <div className={ classes.navbar__links }>
                <Link to="/about" className={ classes.navbar__links }>О сайте</Link>
                <Link to="/posts" className={ classes.navbar__links }>Посты</Link>
            </div>
        </div>
    )
}

export default Navbar