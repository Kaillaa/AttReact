import IconStar from "../Imagens/IconStar.svg";
import Botao from "./Botao";
import Numeros from "./Numeros";
import "../Styles/CardCss.css";

function Card(){

 return(
    <div className="CardContainer">
        <div className="Circulo">
            <img src={IconStar} alt="Estrela" />
        </div>
        <div className="TextosCard">
            <h1>How did we do?</h1>
            <p>Please let us know we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        </div>
        <div className="NumerosCard">
            <Numeros/>
        </div>
        <div className="BotaoSubmit">
            <Botao/>
        </div>
    </div>
 ) 

}
export default Card
