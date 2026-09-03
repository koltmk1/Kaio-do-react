import './index.css';
import App from './pages/app/App';
import Contato from './pages/contato/index.jsx'
import './pages/contato/index.scss'
import Naoencontrado from './pages/notfound/index.jsx'
import './pages/notfound/index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Routeamento(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<App/>}/>
      <Route path='/contato' element= {<Contato/>}/>
      <Route path='*' element= {<Naoencontrado/>}/>
    </Routes>
    </BrowserRouter>
  )
  
};