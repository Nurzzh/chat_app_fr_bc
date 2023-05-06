import { useNavigate } from 'react-router'
import './Register.css'     

const Register = ()  => {
    
    const router =useNavigate()
    return (
        <div className='register__body'>
            <div className='register__header'>
                <button className='login__btn' onClick={()=> router('/login')}>Вход</button>
                <button className='register__btn' onClick={()=> router('/register')}>Регистрация</button>
            </div>
            <div className='register__form'>
                <input placeholder='Имя'></input>
                <input placeholder='Фамилия'></input>
                <input placeholder='E-mail'></input>
                <input type='password' placeholder='Пароль'></input>
                <input type='password' placeholder='Потвердить пароль'></input>
                <button className='register__btn__big'>Регистрация</button>
            </div>
        </div>
    )
}

export default Register


