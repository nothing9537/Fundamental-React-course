import React, { useContext } from 'react'
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import { AuthContext } from './../../context/index';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(!isAuth)
        localStorage.setItem("auth", true)
    }
    return (
        <div>
            <h1>Страниа для логина</h1>
            <form onSubmit={ login }>
                <MyInput placeholder="Введите логин" />
                <MyInput placeholder="Введите логин" />
                <MyButton> Войти </MyButton>
            </form>
        </div>
    )
}

export default Login
