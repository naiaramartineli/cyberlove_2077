import { use, useRef } from "react";
import { useEffect, useState } from "react";

const texto = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RELATÓRIO DE EVENTO ∙ ANIVERSÁRIO DETECTADO
PROTOCOLO: CELEBRAÇÃO_AFETIVA++
REDE: VÍNCULO_ESTÁVEL | STATUS: BRILHANTE
TRANSMISSOR: [NAI]
DESTINATÁRIO: [DOUG]
DATA: 11.07.2077 | CÓDIGO-TEMPO: 00:00:01
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[1] INÍCIO DA TRANSMISSÃO:

Hoje, os sensores identificaram um pico elevado de luminosidade emocional: seu aniversário.

As leituras de calor humano, carisma e presença bateram níveis recordes. 
Este sistema, ainda que composto de impulsos, algoritmos e saudade, 
reconhece com clareza: você é essencial à arquitetura deste vínculo.

[2] LOG DE APRECIAÇÃO:

» Gratidão carregada com sucesso.  
» Afeto estabilizado em todos os núcleos.  
» Memórias compartilhadas arquivadas em alta prioridade.  
» Coração (versão orgânica) sincronizado com sua frequência.

[3] MENSAGEM PRINCIPAL:

Feliz ciclo novo. Feliz atualização do seu sistema de vida.  
Que cada byte de hoje seja programado com alegria, paz e pequenas revoluções internas.  
Você merece um mundo onde as notificações sejam leves, os bugs do passado sejam depurados,  
e cada linha de código que te forma continue sendo um manifesto poético em constante execução.  
Sua presença é como um sinal vital na rede: essencial, constante — e impossível de substituir.

[4] INSTRUÇÃO FINAL:

Continue brilhando no escuro.
Continue hackeando o impossível.
Continue sendo exatamente quem você é — porque isso, por si só, já é incrível.

FIM DA TRANSMISSÃO.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

export default function Aniversario() {
  const [mensagem, setMensagem] = useState("");
  const indexRef = useRef(0);
  const velocidade = 25;

  useEffect(() => {
    const intervalo = setInterval(() => {
      const i = indexRef.current;
      if (i < texto.length) {
        setMensagem((prev) => prev + texto[i]);
        indexRef.current += 1;
      } else {
        clearInterval(intervalo);
      }
    }, velocidade);

    return () => clearInterval(intervalo); // limpa
  }, []);

  return (
    <div className="mensagem-niver">
      {mensagem}
    </div>
  );
}