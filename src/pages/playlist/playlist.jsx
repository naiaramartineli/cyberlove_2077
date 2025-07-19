import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import '../../css/global.css';
import '../../css/button.css';
import './playlist.css';

export default function PlayList() {
  const navigate = useNavigate();

  return (
  <div className="page-container">
    <Header />   
    <div className="container-log-playlist">
      <h3 className="titulo-log">// [LOG: ANALYTICS::VIBRAÇÃO_NEURAL]</h3>
      <hr className="separador-playlist" />
      <p className="log">// PROTOCOLO: RELATÓRIO DE VIBRAÇÃO NEURAL</p>
      <p className="log">// SINAL: Frequência cardíaca sincronizada via ondas musicais</p>
      <p className="log">// MEMÓRIA: Sons selecionados com base em momentos compartilhados</p>
      <p className="log">// NÍVEL DE CARGA AFETIVA: ALTA</p>
      <p className="log">// INFO: Cada som representa uma memória ∙ uma conexão real ∙ um sentimento digitalizado</p>
    </div>

    <div className="playlist-container">
      <div className="playlist-header">
        <h3>// TRANSMISSÃO SONORA ∙ ATIVA</h3>
        <div className="playlist">
          <iframe
              style={{ borderRadius: '12px', border: 'none' }}
              src="https://open.spotify.com/embed/playlist/5sHFSGsX9OMYdXXvukobnv?utm_source=generator&theme=0"
              width="100%"
              height="352px"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Playlist">
          </iframe>
        </div>
      </div>
    </div>
  <button className="btn-voltar-playlist" onClick={() => navigate('/home')}>// CORE &gt; MAIN</button>
  <Footer />
    </div>
  );
}
