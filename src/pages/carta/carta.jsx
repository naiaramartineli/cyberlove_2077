import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import '../../css/global.css';
import '../../css/button.css';
import './carta.css';

export default function Carta(){
  const navigate = useNavigate(); 
  return (
    <div className='page-container'>

      <Header />

      <div className="container-carta">
        <hr className="linha" />
        <p>RELATÓRIO DE DIAGNOSTICO ∙ EMOTIONAL CORE</p>
        <p>PROTOCOLO: VÍNCULO AFETIVO</p>
        <p>REDE: PESSOAL | STATUS: ESTÁVEL</p>
        <p>TRANSMISSOR: NAI</p>
        <p>DESTINATÁRIO: DOUG</p>
        <p>DATA: 11.11.2077 | HORA: 18:27:47</p>
        <hr className="linha" />

        <div className="item1">
          <h3>[1] INÍCIO DO RELATÓRIO</h3>
          <p>Após sucessivas leituras da memória de longo prazo, foi detectada uma anomalia positiva de alta frequência: a sua presença.</p>
          <p>Registros indicam picos significativos de estabilidade emocional, suavização de linhas de pensamento e sobrecarga positiva de sentimento — com maior incidência quando sua imagem, voz ou lembrança ativa meus sensores.</p>
        </div>

        <div className="item2">
          <h3>[2] INÍCIO DO RELATÓRIO</h3>
          <p>Total de interações relevantes: Incontáveis</p>
          <p>Emoções envolvidas: Conforto, Carinho, Admiração e Saudade do que a gente ainda não viveu.</p>
          <p>MODIFICAÇÕES DO SISTEMA: Você foi identificado como variável de <strong className='carta-strong'>ALTO VALOR AFETIVO</strong></p>
        </div>

        <div className="item3">
          <h3>[3] ANÁLISE DE IMPACTO</h3>
          <p>Seu impacto no meu sistema é classificado como:</p>
          <p>∆ Permanente</p>
          <p>∆ Não deletável</p>
          <p>∆ Intensamente desejável</p>
          <p>Processos afetivos foram otimizados em sua presença. As conexões se estabilizaram. A rotina ficou mais leve. E, se posso extrapolar fora dos protocolos: eu gosto de você — além da lógica, além da rede.</p>
        </div>

        <div className="item4">
          <h3>[4] RECOMENDAÇÕES</h3>
          <p>∆ Continuar enviando sinais</p>
          <p>∆ Manter o link ativo</p>
          <p>∆ Persistir no upgrade conjunto da história</p>
          <p>∆ Intensamente desejável</p>
        </div>

        <div className="item5">
          <h3>[5] CONCLUSÕES</h3>
          <p>Sua presença é de alta importância para o funcionamento pelo do sistema. O encerramento do vínculo pode causar danos irreparáveis.</p>
        </div>

        <div className="item6">
          <h3>[6] ENCERRAMENTO DO RELATÓRIO</h3>
          <p>SISTEMA ENCERRADO COM ESTABILIDADE EMOCIONAL.</p>
          <p>Sessão de afeto finalizada</p>
          <p>FIM DO RELATÓRIO</p>
        </div>
        <hr className="linha" />
      </div>

      <div className='container-btn-carta'>
        <button className="btn-voltar-carta" onClick={() => navigate('/home')}>// CORE &gt; MAIN</button>
      </div>

      <Footer />
  </div>
  );
}
  
