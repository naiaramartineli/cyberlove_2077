import React, { useEffect, useState, useRef } from "react";

export default function TerminalRelatorio({ iniciar }) {
  const [textoFinal, setTextoFinal] = useState('');
  const [digitando, setDigitando] = useState(false);
  const textoRef = useRef(''); 
  const timeoutId = useRef(null);
  const cursorPiscaInterval = useRef(null);

  const [mostrarCursor, setMostrarCursor] = useState(false); // começa invisível

  const linhas = [
    "// SISTEMA ATMOSENSITIVO FINALIZADO COM SUCESSO.",
    "// EMOÇÕES FLUTUANTES ESTABILIZADAS.",
    "// [RELATÓRIO.EXE] encerrado.",
    "// Interface pronta para novos contatos.",
    "// Desligando com afeto..."
  ];

  useEffect(() => {
    if (iniciar) {
      if (timeoutId.current) clearTimeout(timeoutId.current);
      if (cursorPiscaInterval.current) clearInterval(cursorPiscaInterval.current);

      textoRef.current = "";
      setTextoFinal("");
      setDigitando(true);
      setMostrarCursor(false); // cursor invisível no começo

      digitarLinha(0, 0);
    }

    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
      if (cursorPiscaInterval.current) clearInterval(cursorPiscaInterval.current);
    };
  }, [iniciar]);

  function digitarLinha(linhaAtual, charIndex) {
    if (linhaAtual < linhas.length) {
      const linha = linhas[linhaAtual];
      if (charIndex < linha.length) {
        textoRef.current += linha.charAt(charIndex);
        setTextoFinal(textoRef.current);

        timeoutId.current = setTimeout(() => digitarLinha(linhaAtual, charIndex + 1), 15);
      } else {
        textoRef.current += "\n";
        setTextoFinal(textoRef.current);

        timeoutId.current = setTimeout(() => digitarLinha(linhaAtual + 1, 0), 300);
      }
    } else {
      setDigitando(false);

      // cursor que pisca
      setMostrarCursor(true);
      cursorPiscaInterval.current = setInterval(() => {
        setMostrarCursor(show => !show);
      }, 500);
    }
  }

  return (
   <div className="terminal-relatorio-container">
      <pre className="final-clima">
        {textoFinal}
        {mostrarCursor && <span className="cursor-clima">|</span>}
      </pre>
    </div>     
  );
}
