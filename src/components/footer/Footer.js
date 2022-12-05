import { Container } from "../footer/Footer.styles"

export default function Footer(props) {
  return (
    <Container>
            <div className="footer-concluidos"> {props.contagem}/{props.cardsLength} CONCLUÍDOS</div>
    </Container>
  )
}