import {BrowserRouter, Route} from 'react-router-dom'
import { Navigate, Routes} from 'react-router'
import Login from '../login/login'
import Register from '../register/Register'


const Router = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to ='/login'/>} />
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router