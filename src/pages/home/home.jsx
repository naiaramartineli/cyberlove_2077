// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import '../../css/global.css';
import '../../css/button.css';
import './home.css'

function Home() {
  const navigate = useNavigate();

  return (
    <div className='page-container'>
      <Header />
      <div className='conteudo'> 
        <div className="container-home">
          <div className='container-botao-home'>
            <div className="div1-home">
              <button className="btn-memoria" onClick={() => navigate('/timer')}>⧉ UPLOADING MEMORIES… LINK NEURAL ATIVO</button>
              <button className="btn-niver" onClick={() => navigate('/niver')}>EXECUTAR: mensagem_de_aniversário()</button>
              <button className="btn-carta" onClick={() => navigate('/carta')}>∆ CÓDIGO: AFETO.ATIVO</button>
              <button className="btn-playlist" onClick={() => navigate('/playlist')}>∆ PLAYLIST ∙ NEURAL</button>
            </div>

            <div className="div2-home">
              <button className="btn-mapa" onClick={() => navigate('/estrelas')}>✦ CONSTEL4ÇÃO ⸻ MEMØRIA.NEXUS</button>
              <button className="btn-terminal" onClick={() => navigate('/terminal')}>⌲ SYNTH-EMOTIONS :: TERMINAL ABERTO</button>
              <button className="btn-radio" onClick={() => navigate('/radio')}>RÁDIO ∞ NIGHT CITY</button>
              <button className="btn-clima" onClick={() => navigate('/clima')}>∆ ATMOSFERA: ONLINE</button>
            </div>            
          </div>

        </div>
        <hr className='linha-home'></hr>
        <div className="mensagem">
          <p className="p-mensagem">⌲ Upload completo :: A experiência personalizada foi injetada com êxito no seu sistema.</p>
          <p className="p-mensagem">⌲ Espero que cada byte tenha se entrelaçado aos seus sentimentos,tocando memórias escondidas e emoções não ditas.</p>
        </div>
      </div>

      <div className='container-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
