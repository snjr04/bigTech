import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './Companents/Layout/Layout'
import './styles/Style.css'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route element={<Home/>} path=''/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default App
