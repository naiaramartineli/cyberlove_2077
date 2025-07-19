import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FraseDoDia from '../../components/fraseDoDia/fraseDoDia';
import Timer from '../../components/timer/timer';
import '../../css/global.css';
import '../../css/button.css'
import './timer.css';

export default function Cronometro() {
  const navigate = useNavigate();
  return (
    <div className='page-container'>
      <Header />
      <div className='container-conteudo'>
        <Timer />
        <hr className='linha-timer'/>
        <div className="log-emocoes">
          <h3 className='titulo-log-emocoes'>==&gt; NEURO.PULSE ∆ Frequência Afetiva Ativa</h3>
          <ul className="lista">
            <li>[🛡️] Vinculo emocional estável</li>
            <li>[💜] Afeto em crescimento</li>
            <li>[📡] Coração sintonizado</li>
            <li>[⚡] Empatia carregando... 87%</li>
            <li>[🔗] Fluxo afetivo sincronizado com ∎.∎.∎ (ID confidencial)</li>
          </ul>
        </div>
        <hr className='linha-timer'/>
        <FraseDoDia />
        <div className='container-btn-timer'>
          <button className="btn-voltar-timer" onClick={() => navigate('/home')}>// CORE &gt; MAIN</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
