import { useState } from "react";
import { Container } from "./Flashcards.styles";
import seta_play from "/home/hudson/Documents/DRIVEN/projeto9-zaprecall/src/assets/img/seta_play.png"
import seta_virar from "/home/hudson/Documents/DRIVEN/projeto9-zaprecall/src/assets/img/seta_virar.png"
import icone_certo from "/home/hudson/Documents/DRIVEN/projeto9-zaprecall/src/assets/img/icone_certo.png"
import icone_erro from "/home/hudson/Documents/DRIVEN/projeto9-zaprecall/src/assets/img/icone_erro.png"
import icone_quase from "/home/hudson/Documents/DRIVEN/projeto9-zaprecall/src/assets/img/icone_quase.png"


export default function FlashCard(props){
    const [perguntaAberta, setPerguntaAberta] = useState(false);
    const [cardVirado, setCardVirado] = useState(false);
    const [concluido, setConcluido] = useState(false);
    const [statusCard, setStatusCard] = useState(null);

  function Renderizar() {
    if (concluido) {
      let icon = null;
      switch (statusCard) {
        case "VERDE":
          icon = (<img src={icone_certo} alt="icone_certo" />);
          break;
        case "AMARELO":
          icon = (<img src={icone_quase} alt="icone_erro" />);
          break;
        default:
          icon = (<img src={icone_erro} alt="icone_quase" />);
          break;
      }
      return (
        <Container className={`finished ${statusCard}`}>
          <p>Pergunta {props.index + 1}</p>
          {icon}
        </Container>
      );
    }
    
    if (cardVirado) {
        return (
          <Container className="open back">
            <p>{props.card.answer}</p>
            <div className="buttons">
              <button className="VERMELHO" onClick={() => {Finalizar('VERMELHO')}}>Não lembrei</button>
              <button className="AMARELO" onClick={() => {Finalizar('AMARELO')}}>Quase não lembrei</button>
              <button className="VERDE" onClick={() => {Finalizar('VERDE')}}>Zap!</button>
            </div>
          </Container>
        );
      }

      if (perguntaAberta) {
        return (
          <Container className="open">
            <p>{props.card.question}</p>
            <img
              src={seta_virar}
              alt="seta_virar"
              onClick={() => setCardVirado(true)}
            />
          </Container>
        );
      }
      return (
        <Container>
          <p>Pergunta {props.index + 1}</p>
          <img src={seta_play} alt="seta_play" onClick={() => setPerguntaAberta(true)} />
        </Container>
      );
    }
    function Finalizar(status) {
        props.setContagem(prev => prev+1);
        setStatusCard(status);
        setConcluido(true);
      }
      return (
        <>{Renderizar()}</>
        );
}