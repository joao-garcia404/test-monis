import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      <footer>
        <div className="footer_title">Compartilhe!</div>

        <div className="icons">
          <img src="/assets/whatsapp.svg" alt="WhatsApp" />
          <img src="/assets/message.svg" alt="Mensagem" />
          <img src="/assets/more.svg" alt="Mais" />
        </div>
      </footer>
    </Container>
  );
}
