import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './Companents/Layout/Layout'
import News from './pages/news/news'
import './styles/Style.scss'
import Catalog from "./pages/Catalog/Catalog";
import Info from "./pages/Info/Info";
import Companies from "./Companents/Companies/Companies";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route element={<Home/>} path=''/>
                    <Route element={<News/>} path='/news'/>
                    <Route element={<Catalog/>} path='/catalog'/>
                    <Route element={<Info/>} path='/catalog/info'/>
                    <Route element={<Companies/>} path="/comp"/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default App
