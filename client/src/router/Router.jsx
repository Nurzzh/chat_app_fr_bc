import {BrowserRouter, Route} from 'react-router-dom'
import { Navigate, Routes} from 'react-router'
import Login from '../login/login'
import Register from '../register/Register'
import Main from '../main/Main'


const Router = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to ='/login'/>} />
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/main' element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router