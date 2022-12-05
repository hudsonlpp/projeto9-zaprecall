import styled from "styled-components";
import logo from "/home/hudson/Documents/DRIVEN/projeto9-zaprecall/src/assets/img/logo.png";

export default function Header() {
  return (
    <Container>
        <img src={logo} alt="logo"/>
        <h1>ZapRecall</h1>
    </Container>
  )
}


export const Container = styled.header`

  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;

img {
  width: 52px;
}

h1 {
  width: 203.17px;
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
}
`;