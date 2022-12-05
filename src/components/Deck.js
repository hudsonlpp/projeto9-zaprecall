import FlashCard from "./flashcards/Flashcards"

export default function Deck(props) {
  return (
    <>
      {props.cards.map((card, indice) => {
        return (<FlashCard key={indice} indice={indice} card={card} setContagem={props.setContagem} />)})}
    </>
  )
}