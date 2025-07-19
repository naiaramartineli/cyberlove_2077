import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import TerminalFrase from '../../components/terminarEmocao/terminalFrases';
import '../../css/global.css';
import '../../css/button.css';
import './terminal.css';

export default function Terminal() {
  const navigate = useNavigate();
  const [mostrarFrase, setMostrarFrase] = useState(false);
  const [inputValor,setInputValor] = useState("");

  const escolherFrase = () => {
    if(inputValor.trim() === ""){
      alert("Por favor insira um sentemento");
      return;
    }
    setMostrarFrase(true); 
  };

  const resetFrase = () => {
    setMostrarFrase(false);
    setInputValor("");
  };

  return (
    <div className="page-container">
      <Header />

      <div className='terminal-container-frases'>

        <div className='titulo-terminal'>
          <h2 className='h2-terminal'>::[EMOTION INPUT REQUIRED] – Inicie o protocolo de resposta.</h2>
        </div>

        <div className='container-dados'> 
          <div className='container-input'>
            <input type='text' name='emocao' id='emocao' placeholder='Como se sente hoje?' value={inputValor} onChange={(e) => setInputValor(e.target.value)}/>
          </div>
          <div className='container-botao-terminal'>
            <button className='btn-gerar' onClick={escolherFrase}>Run Emotion()</button>
          </div>
        </div>

        <div className='frase-terminal-container'>
          <div className='frase-container'>
            {mostrarFrase && <TerminalFrase texto={inputValor} />}
          </div>
        </div>

        <div className='container-botoes'>
          <button className='btn-reset' onClick={resetFrase}>//Reset ALL</button>
          <button className='btn-voltar-terminal' onClick={() => navigate('/home')}>//CORE &gt; MAIN</button>
        </div>
      </div>
    
      <Footer />

    </div>

  );
}
