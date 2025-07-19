import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Grafico from '../../components/grafico/grafico';
import estrela from '../../assets/estrelas.png'
import '../../css/global.css';
import '../../css/button.css'
import './estrelas.css';

export default function Estrelas() {
  const navigate = useNavigate();

  return(
    <div className='page-container'>
      <Header/>
      <div className='estrela-conteudo-1'>

        <div className='img-estrela'>
          <img src={estrela}/>
        </div>

        <div className='texto1'>
          <p className='p-texto1'>📡 ARQUIVO ESTELAR: ANÁLISE DO CÉU — 11.11.2077</p>
          <p className='p-texto1'>⟶ STATUS: INTERPRETAÇÃO AFETIVA ATIVA</p>
          <p className='p-texto1'>⟶ FONTE: SATÉLITE EMOTIONAL-SCAN v3.9</p>

          <hr className='separador-estrela-1'/>

          <p className='p-texto1'>Constelações sincronizadas em padrão incomum.</p>
          <p className='p-texto1'>Frequência luminosa acima do esperado nas coordenadas afetivas.</p>
          <p className='p-texto1'>Dados coletados indicam instabilidade positiva na órbita emocional.</p>

          <hr className='separador-estrela-1'/>

          <p className='p-texto1'>As estrelas brilharam mais forte nesse dia por causa do nosso encontro.</p>
          <p className='p-texto1'>Como se o céu executasse, em silêncio, um comando de celebração silenciosa:</p>

          <hr className='separador-estrela-1'/>

          <p className='p-texto1'>Relatórios astronômicos sugerem que esse momento foi tão raro quanto belo —</p>
          <p className='p-texto1'>Um glitch no tempo onde tudo se alinhou.</p>
        </div>
      </div>

      <hr className='separador-estrela-2'/>

      <div className='estrela-conteudo-2'>
        <div className='titulo-estrelas-cont2'>
          <h1 className='titulo-estrelas'>COMPATIBILIDADE ESTELAR</h1>
        </div>
        <div className='container-compatibilidade'>
          <div className='grafico'>
            <Grafico/>
          </div>

          <div className='texto2'>
            <p className='p-texto2-titulo'>🔍ANÁLISE DE COMPATIBILIDADE ESTELAR</p>
            <p className='p-texto2'>⟶ PROGRAMA: NAI ⇄ DOUG  </p>
            <p className='p-texto2'>⟶ STATUS: VINCULO ATIVO | FUSÃO DE INTERESSES DETECTADA</p>

            <hr className='separador-estrela-3'/>

            <p className='p-texto2'>Quando Nai e Doug se conectaram, o céu reagiu.</p>
            <p className='p-texto2'>Estrelas recalcularam rotas. Satélites registraram picos de sincronia</p>
            <p className='p-texto2'>Não era apenas místico, era estatístico.</p>

            <hr className='separador-estrela-3'/>

            <p className='p-texto2-titulo'>📀GOSTOS COMUNS:</p>
            <p className='p-texto2'>Resident Evil ∙ Rodando na mesma engine emocional</p>
            <p className='p-texto2'>Jogos ∙ Do RPG ao Terror, de FPS à pixel art indie</p>
            <p className='p-texto2'>88h em call no Discord ∙ Tempo suficiente para fundir duas mentes em uma frequência única</p>
            <p className='p-texto2'>Jogos de Luta ∙ Nai, com paixão flamejante - Doug, a divindade dos combos.</p>

            <hr className='separador-estrela-3'/>

            <p className='p-texto2-titulo'>🔗CONCLUSÃO:</p>
            <p className='p-texto2'>Não se trata apenas de afinidade.</p>
            <p className='p-texto2'>É sobre coexstência cósmica!</p>
            <p className='p-texto2'>Duas unidades autônomas de luz e sombra que quando combinadas criam o mais lindo dos universos.</p>   

            <hr className='separador-estrela-3'/>

            <p className='p-texto2'>COMPATIBILIDADE: 207,7% ∙ VALIDAÇÃO COMPLETA</p>
          </div>    

        </div>
      </div>
      <div className='container-btn-estrelas'>
        <button className="btn-voltar-estrela" onClick={() => navigate('/home')}>// CORE &gt; MAIN</button>
      </div>
      <Footer/>
    </div>
  );

}
