import React,{useState,useEffect,useMemo} from 'react';
import fraseEmocao from "../../data/fraseEmocao.json"

export default function TerminalFrase({texto}){
  const sentimento = texto.trim().toLowerCase();
  const fraseSelecionada = useMemo(() =>{
    if(!sentimento) return null;

    const frases = fraseEmocao[sentimento];
    if(frases && frases.length > 0){
      const index = Math.floor(Math.random() * frases.length);
      return frases[index];
    }

    return "Não consegui identificar o seu sentimento, mas estou aqui com você ♥";
  },[sentimento]);

  const fraseProcessada = `:: PROCESSANDO SENTIMENTO: ${texto}`;
  const fraseResposta = `:: RESPOSTA GERADA: ${fraseSelecionada}`;

  const [textoExibido,setTexto] = useState("");
  const [respostaExibida,setRespostaExibida] = useState("");
  const [etapa,setEtapa] = useState(0);

  useEffect(() =>{
    setTexto("");
    setRespostaExibida("");
    setEtapa(0);
  }, [texto,fraseSelecionada]);

  //Primeira Frase
  useEffect(() => {
    if(etapa !== 0) return;
    if(!fraseProcessada) return;

    let i = 0;
    const intervalo = setInterval(() => {
      setTexto((prev) => prev + fraseProcessada.charAt(i));
      i++;

      if(i >= fraseProcessada.length){
        clearInterval(intervalo);
        setTimeout(() => setEtapa(1),500)
      }
    },40);

    return () => clearInterval(intervalo);

  }, [fraseProcessada,etapa]);

  //Segunda frase
  useEffect(() =>{
    if(etapa !== 1) return;
    if(!fraseResposta) return;

    let i = 0;
    setRespostaExibida("");
    const intervalo = setInterval(() => {
      setRespostaExibida((prev) => prev + fraseResposta.charAt(i));
      i++;
      if(i >= fraseResposta.length){
        clearInterval(intervalo);
      }
    },40);

    return () => clearInterval(intervalo);

  }, [fraseResposta, etapa]);

  if(!fraseSelecionada) return null; 

  return(
    <div className='frase-terminal'>
      <p>{textoExibido}</p>
      <p>{respostaExibida}</p>
    </div>
  );
}