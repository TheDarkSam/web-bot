import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Time } from './pages/time'


export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/time' element={<Time/>}/>
        </Routes>
    )
}