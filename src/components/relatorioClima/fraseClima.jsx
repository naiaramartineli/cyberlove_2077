import React, { useEffect, useRef, useState } from "react";
import fraseClima from "../../data/fraseClima.json";
import TerminalRelatorio from "./relatorioClima";

export default function TerminalClima() {
  const [textoFinal, setTextoFinal] = useState("");
  const [mostrarRelatorio, setMostrarRelatorio] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const dataHoje = new Date().toISOString().split("T")[0];
    const fraseSalva = localStorage.getItem("fraseClima");
    const dataSalva = localStorage.getItem("dataFrase");

    if (fraseSalva && dataSalva === dataHoje) {
      digitarTexto(fraseSalva);
    } else {
      const novaFrase = gerarFraseAleatoria();
      localStorage.setItem("fraseClima", novaFrase);
      localStorage.setItem("dataFrase", dataHoje);
      digitarTexto(novaFrase);
    }

    return () => clearTimeout(timeoutRef.current);
  }, []);

  function gerarFraseAleatoria() {
    const categorias = Object.keys(fraseClima);
    const categoria = categorias[Math.floor(Math.random() * categorias.length)];
    const frases = fraseClima[categoria];
    return frases.join("\n");
  }

  function digitarTexto(textoCompleto) {
    let index = 0;
    setTextoFinal("");
    setMostrarRelatorio(false);

    const digitar = () => {
      if (index < textoCompleto.length) {
        setTextoFinal((prev) => prev + textoCompleto.charAt(index));
        index++;
        timeoutRef.current = setTimeout(digitar, 15);
      } else {
        setMostrarRelatorio(true);
      }
    };

    digitar();
  }

  return (
    <div className="terminal-clima">
      <pre className="clima">{textoFinal}</pre>
      {mostrarRelatorio && <TerminalRelatorio iniciar={true} />}
    </div>
  );
}
