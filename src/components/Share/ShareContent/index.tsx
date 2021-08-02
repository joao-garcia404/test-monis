import { useState } from "react";
import { Container } from "./styles";

export default function ShareContent() {
  const token = "Xyz123";
  const [copied, setCopied] = useState(false);

  function handleCopyCode() {
    navigator.clipboard.writeText(token);
    setCopied(true);
  }

  return (
    <Container>
      <div className="title">Ajude seus amigos a realizarem sonhos!</div>

      <div className="copy_section">
        <span className="copy_text">Copie seu código</span>

        <div className="copy_box">
          <span id="text_to_code">{token}</span>

          <button type="button" onClick={handleCopyCode}>
            Copiar
          </button>
        </div>

        {copied && <span className="copied">Copiado!</span>}
      </div>
    </Container>
  );
}
