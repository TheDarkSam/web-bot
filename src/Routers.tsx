import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Time } from './pages/time'
import { History } from './pages/history'


export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Time />} />
            <Route path='/history' element={<History />} />
        </Routes>
    )
}