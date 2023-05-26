import { BrowserRouter, Routes, Route }
 from 'react-router-dom';

import Erro from './pages/Erro';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Header from './components/Header';
import Loja from './pages/Loja';


function RouterApp(props) {
 return (
 <BrowserRouter>
 <Header/>
 <Routes>
 <Route path="/" element={<Home texto={props.texto}  />} />
 <Route path="/sobre" element={<Sobre />} />
 <Route path='/loja' element={<Loja/>}/>
 <Route path='*' element={<Erro/>} />
 </Routes>
 </BrowserRouter>
 )
}

export default RouterApp; 