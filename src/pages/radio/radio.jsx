import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Equalizador from '../../components/radio/equalizador';
import faixasData from '../../data/faixas.json';
import '../../css/global.css';
import '../../css/button.css';
import './radio.css';

export default function Radio() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const [faixas] = useState(faixasData);

  const [trackIndex, setTrackIndex] = useState(() => {
    const saved = localStorage.getItem('trackIndex');
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  const [trackName, setTrackName] = useState('Carregando faixa...');
  const [estaTocando, setEstaTocando] = useState(false);

  const loadTrack = (index) => {
    if (audioRef.current) {
      audioRef.current.src = faixas[index].src;
      audioRef.current.volume = 0.8;
      setTrackName(`Pronto para tocar: ${faixas[index].title}`);
      setEstaTocando(false);
    }
  };

  const playAudio = async () => {
    if (!audioRef.current) return;

    // Inicializa o AudioContext se ainda não existir
    if (!audioContextRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContextRef.current = new AudioContext();
    }

    // Ativa o contexto se estiver suspenso
    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume();
    }

    audioRef.current
      .play()
      .then(() => {
        setTrackName(`Tocando agora: ${faixas[trackIndex].title}`);
        setEstaTocando(true);
      })
      .catch((err) => {
        console.error('Erro ao tentar tocar áudio:', err);
      });
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setTrackName('Música pausada');
      setEstaTocando(false);
    }
  };

  const nextTrack = () => {
    const next = (trackIndex + 1) % faixas.length;
    setTrackIndex(next);
    loadTrack(next);
  };

  const prevTrack = () => {
    const prev = (trackIndex - 1 + faixas.length) % faixas.length;
    setTrackIndex(prev);
    loadTrack(prev);
  };

  useEffect(() => {
    localStorage.setItem('trackIndex', trackIndex);
  }, [trackIndex]);

  useEffect(() => {
    loadTrack(trackIndex);

    const handleEnded = () => nextTrack();

    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('ended', handleEnded);
      return () => {
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [trackIndex]);

  return (
    <div className="page-container">
      <Header />
      <div className="container-titulo-radio">
        <h3 className="titulo-radio">Bytewave // Heart Sync</h3>
      </div>

      <div className="container-equalizador">
        <Equalizador audioRef={audioRef} audioContextRef={audioContextRef} />
      </div>

      <div className="controle-audio">
        <button className="btn-radio-prev" onClick={prevTrack}>« Anterior</button>
        <button className="btn-radio-play" onClick={playAudio}>▶ Play</button>
        <button className="btn-radio-pause" onClick={pauseAudio}>∥ Pause</button>
        <button className="btn-radio-next" onClick={nextTrack}>Próximo »</button>
      </div>

      <div className="soudtrack-container">
        <div id="track-name" className='track-name'>{trackName}</div>
      </div>

      <audio ref={audioRef} id="audio" />

      <div className='btn-volta-radio'>
        <button className="btn-voltar" onClick={() => navigate('/home')}>// CORE &gt; MAIN</button>
      </div>
      
      <Footer />
    </div>
  );
}
