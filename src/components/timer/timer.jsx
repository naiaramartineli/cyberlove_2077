import { useEffect, useState } from "react";

export default function Timer() {
  const [tempo, setTempo] = useState({
    anos: 0,
    meses: 0,
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  const dataInicio = new Date("2024-11-11T00:00:00");

  useEffect(() => {
    const calcularTempo = () => {
      const agora = new Date();

      let anos = agora.getFullYear() - dataInicio.getFullYear();
      let meses = agora.getMonth() - dataInicio.getMonth();
      let dias = agora.getDate() - dataInicio.getDate();
      let horas = agora.getHours() - dataInicio.getHours();
      let minutos = agora.getMinutes() - dataInicio.getMinutes();
      let segundos = agora.getSeconds() - dataInicio.getSeconds();

      if (segundos < 0) {
        segundos += 60;
        minutos--;
      }

      if (minutos < 0) {
        minutos += 60;
        horas--;
      }

      if (horas < 0) {
        horas += 24;
        dias--;
      }

      if (dias < 0) {
        const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0);
        dias += ultimoMes.getDate();
        meses--;
      }

      if (meses < 0) {
        meses += 12;
        anos--;
      }

      setTempo({anos,meses,dias,horas,minutos,segundos});
    };

    calcularTempo(); // inicial
    const intervalo = setInterval(calcularTempo, 1000); // atualiza a cada segundo

    return () => clearInterval(intervalo); // limpa intervalo ao desmontar
  }, []);

  return (
    <>
      <div className="titulo-timer">
        <h3>&gt;&gt; [LOG.DE.CONEXÃO] :: Relacionamento iniciado há:</h3>
      </div>
      <div className="timer">
      ∆ {tempo.anos} ano(s), {tempo.meses} mês(es), {tempo.dias} dia(s),{" "} {tempo.horas} hora(s), {tempo.minutos} minuto(s) e {tempo.segundos} segundo(s) desde o início da conexão.
      </div>

    </>
  );
}
