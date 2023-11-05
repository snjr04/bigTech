import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './Companents/Layout/Layout'
import News from './pages/news/news'
import './styles/Style.scss'
import Catalog from "./pages/Catalog/Catalog";
import Info from "./pages/Info/Info";
import Companies from "./Companents/Companies/Companies";
import Contracts from './pages/Contract/Contract';
import ContractsCard from './pages/ContractCards/ContractCard';
import NotFound from "./pages/NotFound";
import Plans from "./pages/Plans/Plans"
import DetailedPlan from './pages/DetailedPlan/DetailedPlan';
import Questions from './pages/Questions/Questions.jsx'
import Documents from './pages/Documents/documents.jsx'
import Messenger from "./pages/Messenger/Messenger";
import Map1 from "./Companents/MapBanner/Map1";




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
                    <Route element={<Contracts/>} path="/Contracts"/>
                    <Route element={<ContractsCard />} path="/Contracts/contractsCard" />
                    <Route element={<Plans/>} path="/Plans"/>
                    <Route element={<DetailedPlan/>} path="/DetailedPlan"/>
                    <Route element={<Questions/>} path="/Questions"/>
                    <Route element={<Documents/>} path="/Documents"/>
                    <Route element={<Map1/>} path="/map"/>
                </Route>
                <Route element={<NotFound/>} path="*"/>
                <Route element={<Messenger/>} path="/message"/>
            </Routes>
        </BrowserRouter>
    )
}


export default App
