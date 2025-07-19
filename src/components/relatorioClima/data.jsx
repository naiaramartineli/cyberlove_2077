import React, { useState, useEffect } from 'react';

export default function Data() {
  const [dataAtual, setDataAtual] = useState(new Date());

  useEffect(() => {
  
  // Atualiza a data a cada minuto (60000 ms)
  const intervalo = setInterval(() => {
    setDataAtual(new Date());
  }, 60000);

  // Atualiza imediatamente ao montar o componente
  setDataAtual(new Date());

  return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar

  }, []);

  // Formata a data para exibição legível, ex: "17/07/2025 16:45"
  const dataFormatada = dataAtual.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
});

  return (
    <div>
      <p className='p-data-clima'>// ACESSO EM: {dataFormatada}</p>
    </div>
  );
}
