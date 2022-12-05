import Flashcards from "./components/Flashcards";
import Deck from "./components/Deck";
import logo from "./assets/img/logo.png";

export default function App() {


  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={logo} alt="logo"/>
        <h1>ZapRecall</h1>
      </div>
      <Flashcards/>
      <Flashcards/>
      <Flashcards/>
      <Flashcards/>
      <div className="footer-concluidos">0/4 CONCLUÍDOS</div>
    </div>
  );
}