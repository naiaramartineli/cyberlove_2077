import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Cronometro from '../pages/timer/timer';
import Carta from '../pages/carta/carta';
import Niver from '../pages/cartaAniversario/niver';
import Clima from '../pages/clima/clima';
import Estrelas from '../pages/estrelas/estrelas';
import PlayList from '../pages/playlist/playlist';
import Terminal from '../pages/terminal/terminal';
import Radio from '../pages/radio/radio';
import Loading from '../pages/loading/loading';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} /> {/* Página inicial padrão */}
        <Route path="/home" element={<Home />} /> 
        <Route path="/timer" element={<Cronometro />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/niver" element={<Niver />} />
        <Route path="/clima" element={<Clima />} />
        <Route path="/estrelas" element={<Estrelas />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/terminal" element={<Terminal />} />
        <Route path="/radio" element={<Radio />} />
      </Routes>
    </BrowserRouter>
  );
}
