import { useState } from "react";
import styled from "styled-components";
import seta_play from "../assets/img/seta_play.png"
import seta_virar from "../assets/img/seta_virar.png"
import icone_certo from "../assets/img/icone_certo.png"
import icone_erro from "../assets/img/icone_erro.png"
import icone_quase from "../assets/img/icone_quase.png"


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
          icon = (<img data-test="zap-icon" src={icone_certo} alt="icone_certo" />);
          break;
        case "AMARELO":
          icon = (<img data-test="partial-icon" src={icone_quase} alt="icone_erro" />);
          break;
        default:
          icon = (<img data-test="no-icon" src={icone_erro} alt="icone_quase" />);
          break;
      }
      return (
        <Container className={`${statusCard}`}>
          <p data-test="flashcard-text">Pergunta {props.indice + 1}</p>
          {icon}
        </Container>
      );
    }
    
    if (cardVirado) {
        return (
          <Container className="pergunta-aberta">
            <p data-test="flashcard-text" >{props.card.answer}</p>
            <div className="container-botoes">
              <button data-test="no-btn" className="VERMELHO" onClick={() => {Finalizar('VERMELHO')}}>Não lembrei</button>
              <button data-test="partial-btn" className="AMARELO" onClick={() => {Finalizar('AMARELO')}}>Quase não lembrei</button>
              <button data-test="zap-btn" className="VERDE" onClick={() => {Finalizar('VERDE')}}>Zap!</button>
            </div>
          </Container>
        );
      }

      if (perguntaAberta) {
        return (
          <Container className="pergunta-aberta">
            <p data-test="flashcard-text" >{props.card.question}</p>
            <img  data-test="turn-btn" src={seta_virar} alt="seta_virar" onClick={() => setCardVirado(true)}/>
          </Container>
        );
      }
      return (
        <Container>
          <p data-test="flashcard-text" >Pergunta {props.indice + 1}</p>
          <img data-test="play-btn" src={seta_play} alt="seta_play" onClick={() => setPerguntaAberta(true)} />
        </Container>
      );
    }
    function Finalizar(status) {
        props.setContagem(prev => prev+1);
        setStatusCard(status);
        setConcluido(true);
      }
      return (
        <div data-test="flashcard">{Renderizar()}</div>
        );
}

export const corBotao = {  VERDE : "#2FBE34",  AMARELO : "#FF922E",  VERMELHO : "#FF3030",CINZA : "#333333" };

export const Container = styled.div`

    position: relative;
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
  
  > p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  
  &.pergunta-aberta {
    width: 300px;
    margin: 12px;
    padding: 15px;
    height: 160px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

  
  >p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  > img{
    position: absolute;
    bottom: 20px;
    right: 20px;
    height: 15px;
  }

  }
  
  .container-botoes{

    display: flex;
  
    > button {
    width: 85.17px;
    height: 37.17px;
    border-radius: 5px;
    margin: 5px;
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
  }

  }

  .VERMELHO {
    border: ${corBotao.VERMELHO};
    background: ${corBotao.VERMELHO}; 
  }
  &.VERMELHO{
    >p{
      color:${corBotao.VERMELHO};
      text-decoration-line: line-through;
    }
  }

  .AMARELO {
    border: ${corBotao.AMARELO};
    background: ${corBotao.AMARELO};
  }
  &.AMARELO{
    >p{
      color:${corBotao.AMARELO};
      text-decoration-line: line-through;
    }
  }
  .VERDE {
    border: ${corBotao.VERDE};
    background: ${corBotao.VERDE};
  }
  &.VERDE{
    >p{
      color:${corBotao.VERDE};
      text-decoration-line: line-through;
    }
  }

`;

  