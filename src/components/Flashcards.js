import seta_play from "../assets/img/seta_play.png"; 

export default function Flashcards(){
    return(
        <div className="pergunta-fechada">
            <p>flashcards</p>
            <img src={seta_play} alt="seta"/>
        </div>
    )
}