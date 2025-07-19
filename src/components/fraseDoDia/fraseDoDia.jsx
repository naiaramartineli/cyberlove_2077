
import { useEffect, useState } from "react";
import frases from "../../data/fraseDia.json";

export default function FraseDoDia() {
  const [frase, setFrase] = useState("");

  useEffect(() => {
    const dataHoje = new Date().toISOString().split("T")[0];
    const fraseSalva = localStorage.getItem("fraseDoDia");
    const dataSalva = localStorage.getItem("dataFrase");

    if (fraseSalva && dataSalva === dataHoje) {
      setFrase(fraseSalva);
      return;
    }

    //acessa o array dentro do objeto
    const frasesArray = frases.frases;

    const aleatoria = frasesArray[Math.floor(Math.random() * frasesArray.length)];
    localStorage.setItem("fraseDoDia", aleatoria);
    localStorage.setItem("dataFrase", dataHoje);
    setFrase(aleatoria);

  }, []);

  return (
    <div className="container-frase">
      <div className="titulo-frase-dia">
        <h3>::NEURO.LOG &gt;&gt; Frase Codificada do Dia</h3>
      </div>
      <div className="fase-dia">{frase}</div>
    </div>
  );
}
