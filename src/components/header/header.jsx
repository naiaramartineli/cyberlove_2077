import React from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const subtitulos = {
    '/': 'DOUG | CyberCore v3.7',
    '/home': 'Neutral Link Secured • Emotional Dampeners Disengaged • Night City Ready',
    '/timer': '//MEMÓRIA.VINCULADA::DOUG_TIMER_CORE',
    '/niver': '>> SYSTEM_BOOT: CELEBRAÇÃO.INICIADA',
    '/carta': 'SOFT.DATA ∙ SENTIMENTAL',
    '/playlist': '//PLAYLIST.NEURAL_2077 > VIBRAÇÕES_AFETIVAS.SINCRONIZADAS',
    '/estrelas': '//MAPA_ESTELAR_2077 > MEMÓRIA_AFETIVA.INSTANCIADA',
    '/terminal': '∆ NeuroFlux // Terminal de Emoções',
    '/radio': '//BROADCASTING LOVE...VIA FREQUÊNCIA 207.7 FM',
    '/clima': '[NEURO-WEATHER_ΣCAN] :: Relatório AtmosSensitivo',
  };

  const titulo = '[CORE_01] DOUG INTERFACE // ONLINE_SIGNAL: ∆STÁVEL';

  const subtituloAtual = subtitulos[location.pathname] || 'Interface Ativa';

  return (
    <div>
      <div className="titulo">
        <h1>{titulo}</h1>
      </div>
      <div className="subtitulo">
        <h2>{subtituloAtual}</h2>
      </div>
    </div>
  );
}

export default Header;

