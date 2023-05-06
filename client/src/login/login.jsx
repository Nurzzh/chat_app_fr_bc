import { useCallback, useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router'

const Login = ()  => {
    const [data, setData] = useState()
    
    const submit = useCallback(()=>{
        console.log(data);
    },[data])

    const router =useNavigate()
    
    return (
        <div className='login__body'>
            <div className='login__header'>
                <button className='login__btn' onClick={()=> router('/login')}>Вход</button>
                <button className='register__btn' onClick={()=> router('/register')}>Регистрация</button>
            </div>
            <div className='login__form'>
                <input placeholder='E-mail' onChange={e => setData(prev =>({...prev, email:e.target.value}))}/>
                <input type='password' placeholder='Пароль' onChange={e => setData(prev =>({...prev, password:e.target.value}))}/>
                <input type='checkbox' onChange={e => setData(prev =>({...prev, checkbox:e.target.checked}))}/> 
                <p>Запомнить меня</p>
                <button className='login__btn__big' onClick={submit}>Войти</button>
                <hr></hr>
                <p>Забыли пароль?</p>
            </div>
        </div>
    )
}

export default Login