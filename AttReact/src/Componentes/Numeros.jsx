import "../Styles/NumerosCss.css"

function Numeros (){

    return(
        <div className="NumerosContainer">
            <input type="button"  value={1} />
            <input type="button"  value={2} />
            <input type="button"  value={3} />
            <input type="button"  value={4} />
            <input type="button"  value={5} />
        </div> 
    )
}
export default Numeros