// LoadingTerminal.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import '../../css/global.css'
import "./loading.css";

const terminalLines = [
  "::: Iniciando protocolo de ativação neural...",
  "::: Estabelecendo conexão com rede quântica...",
  "::: Carregando núcleo de combate sintético...",
  "::: Sincronizando com implantes ópticos...",
  "::: Interface cibernética online. Executando acesso..."
];

export default function LoadingTerminal() {
  const navigate = useNavigate();
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    document.body.classList.add('bg-loading');

    return () => {
      document.body.classList.remove('bg-loading');
    };
  }, []);

  useEffect(() => {
    if (currentLine >= terminalLines.length) {
      setDoneTyping(true);
      setTimeout(() => navigate("/home"), 2000);
      return;
    }

    const line = terminalLines[currentLine];

    const typingInterval = setInterval(() => {
      setLines((prev) => {
        const newLines = [...prev];
        const typedLine = (newLines[currentLine] || "") + line[charIndex];
        newLines[currentLine] = typedLine;
        return newLines;
      });

      setCharIndex((prev) => prev + 1);
    }, 35);

    if (charIndex >= line.length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCharIndex(0);
      }, 400);
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, currentLine]);

  return (
    <div className="container-loading">
      <Header />
      <div className="terminal-container">
        <div className="terminal-glow">
          {lines.map((line,i) => (
            <div key={i} className="terminal-line">{line}</div>
          ))}
          {doneTyping && <span className="terminal-cursor">█</span>}
        </div>
      </div>
    </div>
  );
}
