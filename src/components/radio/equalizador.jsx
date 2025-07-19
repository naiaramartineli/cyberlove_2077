// Equalizador.jsx
import { useEffect, useRef } from 'react';

export default function Equalizador({ audioRef }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const audio = audioRef.current;

    if (!audio) return;

    let animationId;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }

      // Se já existe uma source conectada ao mesmo elemento, evite erro
      if (!sourceRef.current || sourceRef.current.mediaElement !== audio) {
        sourceRef.current = audioContextRef.current.createMediaElementSource(audio);
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 256;

        sourceRef.current.connect(analyserRef.current);
        analyserRef.current.connect(audioContextRef.current.destination);
      }

      const bufferLength = analyserRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const barWidth = (canvas.width / bufferLength) * 2.5;

      function draw() {
        animationId = requestAnimationFrame(draw);
        analyserRef.current.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let x = 0;
        for (let i = 0; i < bufferLength; i++) {
          const barHeight = dataArray[i];
          //Controle da cor das barras, paleta atual ROXO
          const r = 100 +(barHeight / 2);     //Controla o vermelho
          const g = 20 + (i % 30);            //Contrla o verde
          const b = 150 + (barHeight / 3);    //Controla o azul  

          ctx.fillStyle = `rgb(${r},${g},${b})`;
          ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);

          x += barWidth + 1;
        }
      }

      draw();
    } catch (e) {
      console.error("Erro ao criar contexto de áudio:", e);
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [audioRef.current]);

  return (
    <canvas ref={canvasRef} width="400" height="100" className="equalizador-canvas" />
  );
}
