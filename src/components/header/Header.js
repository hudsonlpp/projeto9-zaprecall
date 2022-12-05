import { Container } from "../header/Header.styles"
import logo from "/home/hudson/Documents/DRIVEN/projeto9-zaprecall/src/assets/img/logo.png";

export default function Header() {
  return (
    <Container>
        <img src={logo} alt="logo"/>
        <h1>ZapRecall</h1>
    </Container>
  )
}